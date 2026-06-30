import json, re
from collections import defaultdict

# page text by (source, page)
wl = json.load(open("tmp/worklist.json", encoding="utf-8"))
page_text = {(w["source"], w["page"]): w["text"].lower() for w in wl}

raw = open("data/questions.js", encoding="utf-8").read()
raw = raw[raw.index("{"):].rstrip().rstrip(";")
data = json.loads(raw)
qs = data["questions"]

STOP = set("the a an and or of to in is are for with on as by be this that it its from at into can will not have has you your when where which what how does also more most other their there these page do use used using able select each new set value field fields record records table tables user users".split())
def toks(t):
    t = t.lower()
    t = re.sub(r'[^a-z0-9_]', ' ', t)
    return [w for w in t.split() if len(w) > 3 and w not in STOP]

def page_toks(s, p):
    txt = page_text.get((s, p), "")
    return set(toks(txt))

rows = []
for q in qs:
    pt = page_toks(q["source"], q["page"])
    # content that asserts page facts: the correct option + explanation
    content = q["options"][q["answer"]] + " " + q["explanation"]
    ct = toks(content)
    if not ct:
        cov = 0.0
    else:
        hit = sum(1 for w in ct if w in pt)
        cov = hit / len(ct)
    rows.append((cov, q["id"], q["source"], q["page"]))

rows.sort()
print(f"{len(qs)} questions checked against their source page OCR.\n")
import statistics
covs = [r[0] for r in rows]
print(f"coverage: min={min(covs):.2f} median={statistics.median(covs):.2f} mean={sum(covs)/len(covs):.2f}")
for thr in (0.4, 0.5, 0.6, 0.7):
    n = sum(1 for c in covs if c < thr)
    print(f"  below {thr:.0%}: {n} questions")
print("\n--- 30 LEAST-GROUNDED (lowest coverage) ---")
for cov, qid, s, p in rows[:30]:
    print(f"{cov:.2f}  {qid}")
