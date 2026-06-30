import json, re
wl = json.load(open("tmp/worklist.json", encoding="utf-8"))
page_text = {(w["source"], w["page"]): w["text"] for w in wl}
raw = open("data/questions.js", encoding="utf-8").read()
raw = raw[raw.index("{"):].rstrip().rstrip(";")
qs = json.loads(raw)["questions"]

STOP=set("the a an and or of to in is are for with on as by be this that it its from at into can will not have has you your when where which what how does also more most other their there these page do use used using able select each new set value field fields record records table tables user users".split())
def toks(t):
    t=t.lower(); t=re.sub(r'[^a-z0-9_]',' ',t); return [w for w in t.split() if len(w)>3 and w not in STOP]

import sys
flagged = [qid for qid in sys.argv[1:]]
byid = {q["id"]: q for q in qs}
for qid in flagged:
    q = byid[qid]
    print("="*80)
    print(f"{qid}")
    print(f"STEM: {q['stem']}")
    print(f"CORRECT: {q['options'][q['answer']]}")
    print(f"EXPL: {q['explanation']}")
    print(f"--- PAGE {q['source']} p{q['page']} OCR ---")
    print(page_text.get((q['source'],q['page']),'(no text)'))
    print()
