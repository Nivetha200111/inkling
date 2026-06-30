from __future__ import annotations

import argparse
import hashlib
import json
import re
from collections import Counter, defaultdict
from datetime import datetime, timezone
from pathlib import Path


LOGO_RE = re.compile(r"^(service\s*now|servicenow|servicen|ow|cw)$", re.IGNORECASE)
NOISE_RE = re.compile(
    r"(all rights reserved|how do you script|^\^+$|^loading$|^search$|^menu$)",
    re.IGNORECASE,
)
ONLY_NUMBERS_RE = re.compile(r"^[\d\s,.;:|/\\-]+$")
OCR_FIXES = {
    "•": "=",
    "·": "=",
    "“": '"',
    "”": '"',
    "‘": "'",
    "’": "'",
    "…": "...",
}


def normalize_text(text: str) -> str:
    for source, replacement in OCR_FIXES.items():
        text = text.replace(source, replacement)
    text = re.sub(r"\s+", " ", text).strip()
    text = re.sub(r"\s+([,.;:!?])", r"\1", text)
    text = re.sub(r"([({\[])\s+", r"\1", text)
    text = re.sub(r"\s+([)}\]])", r"\1", text)
    text = text.replace(" = = ", " = ")
    return text.strip(" \t\r\n")


def is_noise(text: str) -> bool:
    cleaned = text.strip()
    if len(cleaned) < 3:
        return True
    if LOGO_RE.match(cleaned):
        return True
    if NOISE_RE.search(cleaned):
        return True
    if ONLY_NUMBERS_RE.match(cleaned):
        return True
    return False


def classify(text: str) -> str:
    lower = text.lower()
    if any(token in text for token in ("function", "var ", "return ", "this.", "{", "}", "();", "==", "!=")):
        return "code"
    if lower.startswith(("what ", "when ", "where ", "why ", "how ")):
        return "question"
    if len(text) < 70 and (":" in text or text.istitle()):
        return "heading"
    return "line"


def stable_hash(value: str) -> str:
    return hashlib.sha1(value.encode("utf-8")).hexdigest()[:10]


def build_cards(payload: dict) -> dict:
    cards: list[dict] = []
    source_stats: dict[str, Counter] = defaultdict(Counter)

    for page in payload["pages"]:
        page_seen: set[str] = set()
        line_number = 0
        for raw_line in page.get("lines", []):
            text = normalize_text(raw_line)
            if is_noise(text):
                continue
            text_key = text.casefold()
            if text_key in page_seen:
                continue
            page_seen.add(text_key)
            line_number += 1

            source_id = page["sourceId"]
            card_id = f"{source_id}-p{int(page['page']):03d}-l{line_number:03d}-{stable_hash(text)}"
            cards.append(
                {
                    "id": card_id,
                    "sourceId": source_id,
                    "sourceTitle": page["sourceTitle"],
                    "page": int(page["page"]),
                    "line": line_number,
                    "kind": classify(text),
                    "text": text,
                    "pageImage": page["previewImage"],
                }
            )
            source_stats[source_id]["cards"] += 1
            source_stats[source_id]["pages"] = max(source_stats[source_id]["pages"], int(page["page"]))

    sources = []
    source_titles = {page["sourceId"]: page["sourceTitle"] for page in payload["pages"]}
    for source_id, stats in source_stats.items():
        sources.append(
            {
                "id": source_id,
                "title": source_titles[source_id],
                "pages": stats["pages"],
                "cards": stats["cards"],
            }
        )

    return {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "ocrGeneratedAt": payload.get("generatedAt"),
        "ocrEngine": payload.get("engine"),
        "sources": sources,
        "stats": {
            "sources": len(sources),
            "pages": len(payload["pages"]),
            "cards": len(cards),
            "codeCards": sum(1 for card in cards if card["kind"] == "code"),
        },
        "cards": cards,
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Build static flashcard data from OCR line JSON.")
    parser.add_argument("--ocr", type=Path, default=Path("tmp/ocr-lines.json"))
    parser.add_argument("--output", type=Path, default=Path("data/materials.js"))
    args = parser.parse_args()

    payload = json.loads(args.ocr.read_text(encoding="utf-8-sig"))
    data = build_cards(payload)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    js = "window.INKLING_MATERIALS = "
    js += json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    js += ";\n"
    args.output.write_text(js, encoding="utf-8")

    print(
        f"Wrote {args.output} with {data['stats']['cards']} cards from {data['stats']['pages']} pages",
        flush=True,
    )


if __name__ == "__main__":
    main()
