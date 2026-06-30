const MATERIALS = window.INKLING_MATERIALS || { cards: [], sources: [], stats: {} };
const CARDS = MATERIALS.cards || [];
const STORAGE_KEY = "quizling.progress.v2"; // bump version for clean state
const DAY_MS = 24 * 60 * 60 * 1000;
const SPRINT_DAYS = 2;

const STOPWORDS = new Set(["about","after","again","also","because","before","being","between","cannot","could","during","every","from","have","into","more","most","only","other","should","that","their","there","these","this","through","when","where","which","with","without","will","would","your","what","how","does"]);

const els = {
  appShell: document.querySelector(".app-shell"),
  sidebarOverlay: document.querySelector(".sidebar-overlay"),
  sidebarToggle: document.querySelector("#sidebarToggle"),
  contextToggle: document.querySelector("#contextToggle"),
  workspace: document.querySelector(".workspace"),
  contextPanel: document.querySelector(".context-panel"),
  card: document.querySelector(".card"),
  
  datasetSummary: document.querySelector("#datasetSummary"),
  searchInput: document.querySelector("#searchInput"),
  sourceFilters: document.querySelector("#sourceFilters"),
  dueCount: document.querySelector("#dueCount"),
  seenCount: document.querySelector("#seenCount"),
  masteredCount: document.querySelector("#masteredCount"),
  todayTarget: document.querySelector("#todayTarget"),
  dailyMeter: document.querySelector("#dailyMeter"),
  dailyProgress: document.querySelector("#dailyProgress"),
  
  cardSource: document.querySelector("#cardSource"),
  cardLocator: document.querySelector("#cardLocator"),
  cardKind: document.querySelector("#cardKind"),
  promptText: document.querySelector("#promptText"),
  
  answerBox: document.querySelector("#answerBox"),
  answerText: document.querySelector("#answerText"),
  quizChoices: document.querySelector("#quizChoices"),
  writeForm: document.querySelector("#writeForm"),
  writeInput: document.querySelector("#writeInput"),
  
  feedback: document.querySelector("#feedback"),
  revealButton: document.querySelector("#revealButton"),
  grades: [...document.querySelectorAll(".grade")],
  segments: [...document.querySelectorAll(".segment")],
  kindFilters: [...document.querySelectorAll("[data-kind]")],
  
  resetButton: document.querySelector("#resetButton"),
  pageImage: document.querySelector("#pageImage"),
  contextTitle: document.querySelector("#contextTitle"),
  openImageButton: document.querySelector("#openImageButton"),
};

const clozeCache = new Map();
let state = loadState();
let ui = {
  mode: "flash",
  sourceId: "all",
  kind: "all",
  search: "",
  current: null,
  currentCloze: null,
  currentChoices: [],
  revealed: false,
  answered: false,
  previousId: null,
  showContext: false,
};

init();

function init() {
  ensureDailyState();
  renderSourceFilters();
  bindEvents();
  els.datasetSummary.textContent = `${formatNumber(CARDS.length)} cards`;
  selectNextCard();
  render();
}

function bindEvents() {
  els.sidebarToggle.addEventListener("click", () => els.appShell.classList.toggle("is-collapsed"));
  els.sidebarOverlay.addEventListener("click", () => els.appShell.classList.add("is-collapsed"));
  
  els.contextToggle.addEventListener("click", () => {
    ui.showContext = !ui.showContext;
    els.contextPanel.classList.toggle("is-hidden", !ui.showContext);
    els.workspace.classList.toggle("has-context", ui.showContext);
  });

  els.searchInput.addEventListener("input", () => {
    ui.search = els.searchInput.value.trim();
    selectNextCard();
    render();
  });

  els.segments.forEach((button) => {
    button.addEventListener("click", () => {
      ui.mode = button.dataset.mode;
      ui.revealed = false;
      ui.answered = false;
      render();
    });
  });

  els.kindFilters.forEach((button) => {
    button.addEventListener("click", () => {
      ui.kind = button.dataset.kind;
      selectNextCard();
      render();
    });
  });

  els.revealButton.addEventListener("click", revealCard);

  els.grades.forEach((button) => {
    button.addEventListener("click", () => {
      if (!ui.current || button.disabled) return;
      gradeCurrent(button.dataset.grade);
    });
  });

  els.writeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    checkWrittenAnswer();
  });

  els.resetButton.addEventListener("click", () => {
    if (!confirm("Reset all saved review progress?")) return;
    state = createFreshState();
    saveState();
    selectNextCard();
    render();
  });

  els.openImageButton.addEventListener("click", () => {
    if (ui.current?.pageImage) {
      window.open(ui.current.pageImage, "_blank", "noopener");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.target instanceof HTMLInputElement) return;
    if (event.key === " " && !ui.revealed) {
      event.preventDefault();
      revealCard();
    } else if ((event.key === "Enter" || event.key === "ArrowRight") && ui.revealed && !els.grades.find(g=>g.dataset.grade==="good").disabled) {
      event.preventDefault();
      gradeCurrent("good");
    }
    if (ui.mode === "quiz" && !ui.revealed && /^[1-4]$/.test(event.key)) {
      const index = Number(event.key) - 1;
      const button = els.quizChoices.querySelectorAll(".choice")[index];
      if (button) button.click();
    }
  });
}

function revealCard() {
  ui.revealed = true;
  ui.answered = true;
  render();
}

function renderSourceFilters() {
  const allButton = makeFilterButton("all", "All sources", CARDS.length);
  els.sourceFilters.appendChild(allButton);

  MATERIALS.sources.forEach((source) => {
    const button = makeFilterButton(source.id, source.title, source.cards);
    els.sourceFilters.appendChild(button);
  });
}

function makeFilterButton(sourceId, label, count) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `filter${sourceId === ui.sourceId ? " is-active" : ""}`;
  button.dataset.sourceId = sourceId;
  button.textContent = `${label} (${formatNumber(count)})`;
  button.addEventListener("click", () => {
    ui.sourceId = sourceId;
    [...els.sourceFilters.querySelectorAll(".filter")].forEach((item) => {
      item.classList.toggle("is-active", item.dataset.sourceId === sourceId);
    });
    selectNextCard();
    render();
  });
  return button;
}

function render() {
  ensureDailyState();
  renderMode();
  renderStats();

  if (!ui.current) {
    renderEmptyState();
    return;
  }

  const card = ui.current;
  const cloze = ui.currentCloze;

  els.cardSource.textContent = card.sourceTitle;
  els.cardLocator.textContent = `Page ${card.page}, line ${card.line}`;
  els.cardKind.textContent = card.kind;
  
  // Truncate prompt if it's too long
  let promptHtml = cloze.promptHtml;
  if (promptHtml.length > 200 && !promptHtml.includes('<span class="blank"></span>')) {
     promptHtml = promptHtml.substring(0, 197) + "...";
  }
  els.promptText.innerHTML = promptHtml;
  
  els.answerText.textContent = card.text;
  
  els.card.classList.toggle("is-flipped", ui.revealed);
  els.feedback.textContent = "";
  els.feedback.className = "feedback";

  els.pageImage.src = card.pageImage;
  els.contextTitle.textContent = `p.${card.page}`;

  els.quizChoices.hidden = ui.mode !== "quiz";
  els.writeForm.hidden = ui.mode !== "write";
  els.revealButton.disabled = ui.revealed;
  
  els.grades.forEach((button) => {
    button.disabled = !ui.answered && !ui.revealed;
  });

  if (ui.mode === "quiz" && !ui.revealed) {
    renderChoices();
  }

  if (ui.mode === "write") {
    els.writeInput.placeholder = "Type the missing term...";
    if(!ui.revealed) {
      setTimeout(()=>els.writeInput.focus(), 100);
    }
  }
}

function renderMode() {
  els.segments.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === ui.mode);
  });
  els.kindFilters.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.kind === ui.kind);
  });
}

function renderStats() {
  const filtered = getFilteredCards();
  const now = Date.now();
  let due = 0, seen = 0, mastered = 0;
  for (const card of filtered) {
    const progress = state.cards[card.id];
    if (!progress || progress.due <= now) due += 1;
    if (progress?.seen) seen += 1;
    if (progress?.mastered) mastered += 1;
  }

  els.dueCount.textContent = formatNumber(due);
  els.seenCount.textContent = formatNumber(seen);
  els.masteredCount.textContent = formatNumber(mastered);

  const daysElapsed = Math.max(0, Math.floor((Date.now() - state.sprintStart) / DAY_MS));
  const daysLeft = Math.max(1, SPRINT_DAYS - daysElapsed);
  const remaining = Math.max(0, filtered.length - seen);
  const target = remaining === 0 ? 0 : Math.max(1, Math.ceil(remaining / daysLeft));
  const completed = Math.min(state.dailyReviews, target);
  const percent = target ? Math.min(100, Math.round((completed / target) * 100)) : 100;

  els.todayTarget.textContent = `${formatNumber(target)} cards today`;
  els.dailyProgress.textContent = `${formatNumber(completed)} / ${formatNumber(target)}`;
  els.dailyMeter.style.width = `${percent}%`;
}

function renderChoices() {
  els.quizChoices.innerHTML = "";
  ui.currentChoices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.textContent = `${index + 1}. ${choice}`;
    button.addEventListener("click", () => chooseAnswer(button, choice));
    els.quizChoices.appendChild(button);
  });
}

function renderEmptyState() {
  els.cardSource.textContent = "No cards";
  els.cardLocator.textContent = "Page 0, line 0";
  els.cardKind.textContent = "line";
  els.promptText.textContent = "No matching cards for current filters.";
  els.quizChoices.hidden = true;
  els.writeForm.hidden = true;
  els.revealButton.disabled = true;
  els.card.classList.remove("is-flipped");
  els.grades.forEach((button) => button.disabled = true);
  els.contextTitle.textContent = "Preview";
  els.pageImage.removeAttribute("src");
}

function selectNextCard() {
  const filtered = getFilteredCards();
  if (!filtered.length) {
    ui.current = null;
    return;
  }

  const now = Date.now();
  const available = filtered.filter((card) => card.id !== ui.previousId);
  const pool = available.length ? available : filtered;
  const reviewedDue = pool.filter((card) => {
    const progress = state.cards[card.id];
    return progress?.seen && progress.due <= now;
  }).sort((a, b) => progressRank(a, now) - progressRank(b, now));

  const unseen = pool.filter((card) => !state.cards[card.id]?.seen);
  const source = reviewedDue.length ? reviewedDue : unseen.length ? unseen : pool;
  const limit = reviewedDue.length ? Math.min(source.length, 80) : source.length;
  const windowed = source.slice(0, limit);
  const next = windowed[Math.floor(Math.random() * windowed.length)];

  ui.current = next;
  ui.currentCloze = getCloze(next);
  ui.currentChoices = buildChoices(next, ui.currentCloze);
  ui.revealed = false;
  ui.answered = false;
  els.writeInput.value = "";
  
  // Entrance animation
  els.card.classList.remove("card-enter");
  void els.card.offsetWidth; // trigger reflow
  els.card.classList.add("card-enter");
}

function progressRank(card, now) {
  const progress = state.cards[card.id];
  if (!progress) return -Number.MAX_SAFE_INTEGER;
  return (progress.due || 0) - now + (progress.attempts || 0) * 1000;
}

function getFilteredCards() {
  const terms = ui.search.toLowerCase().split(/\s+/).filter(Boolean);
  return CARDS.filter((card) => {
    if (ui.sourceId !== "all" && card.sourceId !== ui.sourceId) return false;
    if (ui.kind !== "all" && card.kind !== ui.kind) return false;
    if (!terms.length) return true;
    const haystack = `${card.text} ${card.sourceTitle} page ${card.page} line ${card.line}`.toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}

function getCloze(card) {
  if (clozeCache.has(card.id)) return clozeCache.get(card.id);

  const text = card.text;
  
  // To avoid picking strings as blanks in code snippets
  const textForCandidates = card.kind === "code" 
      ? text.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '""') 
      : text;

  const matches = textForCandidates.match(/[A-Za-z][A-Za-z0-9_.$-]{3,}/g) || [];
  
  const candidates = matches.filter((word) => {
    const normalized = word.toLowerCase().replace(/[^a-z0-9_.$-]/g, "");
    return normalized.length >= 4 && !STOPWORDS.has(normalized);
  });

  const HIGH_PRIORITY = new Set([
    "gliderecord", "glidesystem", "glideajax", "glidequery", "glideform", "glideuser", "glideelement",
    "g_form", "g_user", "g_list", "g_scratchpad", "current", "previous",
    "addquery", "addencodedquery", "query", "next", "get", "getvalue", "setvalue", "update", "insert",
    "function", "return", "typeof", "instanceof", "prototype", "sys_id", "sys_created_on",
    "client", "server", "script", "include"
  ]);

  const scored = candidates.map(word => {
    const norm = word.toLowerCase().replace(/[^a-z0-9_]/g, "");
    let score = 1;
    // Boost known keywords heavily
    if (HIGH_PRIORITY.has(norm)) score += 100;
    // Boost TitleCase words (likely class names)
    if (/^[A-Z][a-z0-9]+/.test(word)) score += 50; 
    // Boost camelCase words (likely methods or variables)
    if (/^[a-z]+[A-Z][a-zA-Z]*$/.test(word)) score += 30; 
    return { word, score };
  });

  // Sort by score descending, then tie-break deterministically via hash
  scored.sort((a, b) => b.score - a.score || hashToIndex(card.id + a.word, 100) - hashToIndex(card.id + b.word, 100));

  let answer;
  if (scored.length > 0) {
    answer = scored[0].word;
  } else {
    const fallbackMatches = text.match(/[A-Za-z0-9_]{3,}/g) || [];
    answer = fallbackMatches.length ? fallbackMatches[hashToIndex(card.id, fallbackMatches.length)] : text.split(/\s+/)[0] || text;
  }

  const promptHtml = escapeHtml(text).replace(
    new RegExp(escapeRegExp(escapeHtml(answer)), "i"),
    '<span class="blank"></span>'
  );
  
  const cloze = { answer, promptHtml, full: text };
  clozeCache.set(card.id, cloze);
  return cloze;
}

function buildChoices(card, cloze) {
  const options = new Set([cloze.answer]);
  const sameSource = CARDS.filter((c) => c.sourceId === card.sourceId && c.id !== card.id);
  let index = hashToIndex(card.id + "-choices", Math.max(1, sameSource.length));
  while (options.size < 4 && sameSource.length) {
    const candidate = sameSource[index % sameSource.length];
    const answer = getCloze(candidate).answer;
    if (answer && normalizeAnswer(answer) !== normalizeAnswer(cloze.answer)) {
      options.add(answer);
    }
    index += 17;
    if (index > sameSource.length * 6) break;
  }
  while (options.size < 4) {
    const candidate = CARDS[hashToIndex(`${card.id}-${options.size}`, CARDS.length)];
    options.add(getCloze(candidate).answer);
  }
  return shuffle([...options], card.id);
}

function chooseAnswer(button, choice) {
  if (ui.answered) return;
  const correct = normalizeAnswer(choice) === normalizeAnswer(ui.currentCloze.answer);
  ui.answered = true;
  ui.revealed = true;

  [...els.quizChoices.querySelectorAll(".choice")].forEach((item) => {
    const value = item.textContent.replace(/^\d+\.\s*/, "");
    const isCorrect = normalizeAnswer(value) === normalizeAnswer(ui.currentCloze.answer);
    item.classList.toggle("is-correct", isCorrect);
    item.disabled = true;
  });
  if (!correct) button.classList.add("is-wrong");

  els.feedback.textContent = correct ? "Correct" : "Review this line";
  els.feedback.className = `feedback ${correct ? "is-good" : "is-bad"}`;
  render();
}

function checkWrittenAnswer() {
  if (!ui.current) return;
  const submitted = normalizeAnswer(els.writeInput.value);
  const expected = normalizeAnswer(ui.currentCloze.answer);
  const correct = submitted.length > 0 && (submitted === expected || expected.includes(submitted));
  ui.answered = true;
  ui.revealed = true;
  els.feedback.textContent = correct ? "Correct" : "Review this line";
  els.feedback.className = `feedback ${correct ? "is-good" : "is-bad"}`;
  render();
}

function gradeCurrent(grade) {
  const card = ui.current;
  if (!card) return;
  const now = Date.now();
  const progress = state.cards[card.id] || { attempts: 0, correct: 0, box: 0, seen: false, mastered: false, due: 0 };
  
  progress.attempts += 1;
  progress.seen = true;
  progress.last = now;

  if (grade === "again") {
    progress.box = 0;
    progress.due = now + 5 * 60 * 1000;
  } else if (grade === "hard") {
    progress.box = Math.max(1, progress.box);
    progress.correct += 1;
    progress.due = now + 30 * 60 * 1000;
  } else if (grade === "good") {
    progress.box = Math.min(4, progress.box + 1);
    progress.correct += 1;
    progress.due = now + 8 * 60 * 60 * 1000;
  } else {
    progress.box = Math.min(5, progress.box + 2);
    progress.correct += 1;
    progress.due = now + 20 * 60 * 60 * 1000;
  }
  progress.mastered = progress.box >= 4;
  state.cards[card.id] = progress;
  state.dailyReviews += 1;
  ui.previousId = card.id;
  saveState();
  selectNextCard();
  render();
}

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (parsed && parsed.cards) return parsed;
  } catch {}
  return createFreshState();
}

function createFreshState() {
  return { sprintStart: Date.now(), dailyKey: getDayKey(), dailyReviews: 0, cards: {} };
}

function ensureDailyState() {
  const key = getDayKey();
  if (state.dailyKey !== key) {
    state.dailyKey = key;
    state.dailyReviews = 0;
    saveState();
  }
}

function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function getDayKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-${String(now.getDate()).padStart(2,"0")}`;
}
function normalizeAnswer(value) { return String(value || "").toLowerCase().replace(/[^a-z0-9_.$-]+/g, "").trim(); }
function escapeHtml(value) { return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"); }
function escapeRegExp(value) { return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
function hashToIndex(value, length) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  return length ? hash % length : 0;
}
function shuffle(items, seed) {
  const copy = [...items];
  let cursor = hashToIndex(seed, copy.length || 1);
  for (let i = copy.length - 1; i > 0; i--) {
    cursor = (cursor * 1103515245 + 12345) >>> 0;
    const swap = cursor % (i + 1);
    [copy[i], copy[swap]] = [copy[swap], copy[i]];
  }
  return copy;
}
function formatNumber(value) { return new Intl.NumberFormat().format(value || 0); }
