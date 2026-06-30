import json, re
from collections import defaultdict

raw = open("data/materials.js", encoding="utf-8").read()
raw = raw[raw.index("{"):].rstrip().rstrip(";")
data = json.loads(raw)
cards = data["cards"]

DOMAIN = {
 "adfinkling1":"App Dev Fundamentals",
 "adfinkling2":"App Dev Fundamentals",
 "adfinkling3":"App Dev Fundamentals",
 "inkling1":"Client-Side Scripting",
 "inklingpart2":"Server-Side Scripting & Flow",
}

pages = defaultdict(lambda: {"lines":[], "image":None, "title":None})
for c in cards:
    k=(c["sourceId"], c["page"])
    pages[k]["lines"].append(c.get("text",""))
    pages[k]["image"]=c.get("pageImage")
    pages[k]["title"]=c.get("sourceTitle")

def clean(lines):
    out=[]
    seen=set()
    for ln in lines:
        ln=ln.strip()
        # drop dup phrases inside a line (OCR doubling)
        ln=re.sub(r'\s+',' ',ln)
        if not ln: continue
        key=re.sub(r'[^a-z0-9]','',ln.lower())
        if not key: continue
        if key in seen: continue
        seen.add(key)
        out.append(ln)
    return out

# fuzzy dup keys to drop (keep first occurrence). From earlier analysis.
DROP = {("adfinkling2",52),("adfinkling3",18),
        ("inkling1",98),("inklingpart2",130),
        ("adfinkling3",1),("inklingpart2",193),("inklingpart2",37)}

STOP=set("the a an and or of to in is are for with on as by be this that it its from at into can will not have has".split())
def wc(lines):
    t=" ".join(lines).lower(); t=re.sub(r'[^a-z0-9 ]',' ',t)
    return len([w for w in t.split() if len(w)>3 and w not in STOP])

worklist=[]
skipped={"thin":0,"dup":0}
for (s,p) in sorted(pages.keys()):
    info=pages[(s,p)]
    lines=clean(info["lines"])
    text="\n".join(lines)
    n=wc(lines)
    if (s,p) in DROP:
        skipped["dup"]+=1; continue
    if n<22:
        skipped["thin"]+=1; continue
    worklist.append({
        "key":f"{s}-p{p:03d}",
        "source":s,
        "page":p,
        "domain":DOMAIN[s],
        "title":info["title"],
        "image":info["image"],
        "words":n,
        "text":text,
    })

json.dump(worklist, open("tmp/worklist.json","w",encoding="utf-8"), ensure_ascii=False, indent=1)
print("unique content pages for authoring:", len(worklist))
print("skipped:", skipped)
from collections import Counter
print("per domain:", Counter(w["domain"] for w in worklist))
print("per source:", Counter(w["source"] for w in worklist))
