import json, glob, os, datetime
from collections import Counter

SRC_META = {
 "adfinkling1": ("ADF Inkling Part 1", "App Dev Fundamentals"),
 "adfinkling2": ("ADF Inkling Part 2", "App Dev Fundamentals"),
 "adfinkling3": ("ADF Inkling Part 3", "App Dev Fundamentals"),
 "inkling1":    ("Inkling Part 1", "Client-Side Scripting"),
 "inklingpart2":("Inkling Part 2", "Server-Side Scripting & Flow"),
}

questions = []
errors = []
for path in sorted(glob.glob("data/qsrc/*.json")):
    src = os.path.splitext(os.path.basename(path))[0]
    if src not in SRC_META:
        errors.append(f"unknown source file {path}"); continue
    title, domain = SRC_META[src]
    arr = json.load(open(path, encoding="utf-8"))
    seen_keys = Counter()
    for i, q in enumerate(arr):
        page = q["page"]
        seen_keys[page]+=1
        suffix = f"q{seen_keys[page]}"
        # validation
        opts = q["options"]
        if len(opts) != 4: errors.append(f"{src} p{page}: needs 4 options")
        if not (0 <= q["answer"] < 4): errors.append(f"{src} p{page}: bad answer index")
        if len(set(opts)) != 4: errors.append(f"{src} p{page}: duplicate options")
        if not q.get("explanation"): errors.append(f"{src} p{page}: missing explanation")
        questions.append({
            "id": f"{src}-p{page:03d}-{suffix}",
            "source": src,
            "sourceTitle": title,
            "page": page,
            "domain": domain,
            "image": f"assets/pages/{src}-p{page:03d}.jpg",
            "stem": q["stem"],
            "options": opts,
            "answer": q["answer"],
            "explanation": q["explanation"],
        })

stats = {
  "total": len(questions),
  "perSource": dict(Counter(q["source"] for q in questions)),
  "perDomain": dict(Counter(q["domain"] for q in questions)),
}
payload = {
  "generatedAt": datetime.datetime.utcnow().isoformat()+"Z",
  "stats": stats,
  "questions": questions,
}
with open("data/questions.js","w",encoding="utf-8") as f:
    f.write("window.INKLING_QUESTIONS = ")
    json.dump(payload, f, ensure_ascii=False, indent=1)
    f.write(";\n")

print("Built data/questions.js")
print("total questions:", len(questions))
print("per source:", stats["perSource"])
if errors:
    print("\nERRORS:")
    for e in errors[:50]: print(" -", e)
else:
    print("validation: OK")
