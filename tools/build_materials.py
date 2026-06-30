from __future__ import annotations

import argparse
import hashlib
import json
import re
from collections import Counter, defaultdict
from datetime import datetime, timezone
from pathlib import Path


LOGO_RE = re.compile(
    r"^(service\s*n[oe]?[wc]w?|servicen[czs]w|servicenow|cw|ow)$",
    re.IGNORECASE,
)
NOISE_RE = re.compile(
    r"(all rights reserved|how do you script|^\^+$|^loading$|^search$|^menu$|"
    r"^\d+\s*$|^[•·=\-–—_\s]+$|^\.\.\s|^@\s*\d{4}|"
    r"table of contents|select a link below|^\d+\s*/\s*\d+$|"
    r"^module labs?$|^module objectives?$|"
    r"^tip from the field$|^[\d\s,.;:|/\\-]+$)",
    re.IGNORECASE,
)
ONLY_NUMBERS_RE = re.compile(r"^[\d\s,.;:|/\\-]+$")
LAB_FRAGMENT_RE = re.compile(r"^lab\s+[\d.]+\s*-?\s*$", re.IGNORECASE)
OCR_FIXES = {
    "\u2022": "=",
    "\u00b7": "=",
    "\u201c": '"',
    "\u201d": '"',
    "\u2018": "'",
    "\u2019": "'",
    "\u2026": "...",
}


def normalize_text(text: str) -> str:
    for source, replacement in OCR_FIXES.items():
        text = text.replace(source, replacement)
    text = re.sub(r"\s+", " ", text).strip()
    text = re.sub(r"\s+([,.;:!?])", r"\1", text)
    text = re.sub(r"([({\[])\\s+", r"\1", text)
    text = re.sub(r"\s+([)}\]])", r"\1", text)
    text = text.replace(" = = ", " = ")
    return text.strip(" \t\r\n")


def is_noise(text: str) -> bool:
    cleaned = text.strip()
    if len(cleaned) < 4:
        return True
    if LOGO_RE.match(cleaned):
        return True
    if NOISE_RE.search(cleaned):
        return True
    if ONLY_NUMBERS_RE.match(cleaned):
        return True
    if LAB_FRAGMENT_RE.match(cleaned):
        return True
    # Single word fragments under 12 chars with no meaningful content
    words = cleaned.split()
    if len(words) == 1 and len(cleaned) < 12 and not any(c in cleaned for c in "(){}=.;"):
        # Allow short technical terms
        if cleaned.lower() in ("gliderecord", "glidesystem", "glideajax", "glidequery"):
            return False
        if not cleaned[0].isupper():
            return True
    return False


def classify(text: str) -> str:
    lower = text.lower()
    # Code detection
    code_tokens = ("function", "var ", "return ", "this.", "{", "}", "();", "==",
                   "!=", "console.", "gs.", "current.", "new ", ".get(", ".set(",
                   ".query(", ".next(", ".addQuery(", "typeof ", "===", "!==")
    if any(token in text for token in code_tokens):
        return "code"
    if text.rstrip().endswith(";") and len(text) > 10:
        return "code"
    # Question detection
    if re.match(r"^(what|when|where|why|how|which|who|can|is|does|do|should)\s", lower) and "?" in text:
        return "question"
    # Heading detection
    if len(text) < 80 and (text.endswith(":") or (text.istitle() and len(text.split()) <= 8)):
        return "heading"
    if re.match(r"^module\s+\d+", lower):
        return "heading"
    return "line"


def stable_hash(value: str) -> str:
    return hashlib.sha1(value.encode("utf-8")).hexdigest()[:10]


def looks_like_continuation(text: str) -> bool:
    """Check if text looks like it continues from a previous line."""
    if not text:
        return False
    # Starts with lowercase
    if text[0].islower():
        return True
    # Starts with common continuation patterns
    if re.match(r"^(and|or|but|that|which|where|when|to|for|in|on|of|with|the|a|an)\s", text, re.IGNORECASE):
        if text[0].islower():
            return True
    return False


def merge_continuation_lines(lines: list[str]) -> list[str]:
    """Merge lines that are obviously broken mid-sentence."""
    if not lines:
        return lines
    merged = [lines[0]]
    for line in lines[1:]:
        prev = merged[-1]
        # Merge if: previous line ends without sentence terminator AND current looks like continuation
        if (prev and not prev[-1] in ".!?:;" and
            (looks_like_continuation(line) or
             (prev[-1] == "," or prev.endswith(" of") or prev.endswith(" the") or
              prev.endswith(" a") or prev.endswith(" an") or prev.endswith(" to") or
              prev.endswith(" and") or prev.endswith(" or") or prev.endswith(" in") or
              prev.endswith(" is") or prev.endswith(" for") or prev.endswith(" with") or
              prev.endswith(" not") or prev.endswith(" that")))):
            merged[-1] = prev + " " + line
        else:
            merged.append(line)
    return merged


def build_cards(payload: dict) -> dict:
    cards: list[dict] = []
    source_stats: dict[str, Counter] = defaultdict(Counter)
    global_seen: dict[str, set] = defaultdict(set)  # Track seen text per source

    for page in payload["pages"]:
        source_id = page["sourceId"]
        raw_lines = page.get("lines", [])

        # Normalize and filter lines
        clean_lines = []
        for raw_line in raw_lines:
            text = normalize_text(raw_line)
            if is_noise(text):
                continue
            text_key = text.casefold()
            # Dedupe across entire source, not just page
            if text_key in global_seen[source_id]:
                continue
            global_seen[source_id].add(text_key)
            clean_lines.append(text)

        # Merge continuation lines
        clean_lines = merge_continuation_lines(clean_lines)

        # Build cards from merged lines
        line_number = 0
        for text in clean_lines:
            # Skip if still too short after merging (unless it's code)
            kind = classify(text)
            if len(text) < 15 and kind not in ("code", "question"):
                continue

            # Truncate very long cards
            if len(text) > 250:
                text = text[:247] + "..."

            line_number += 1
            card_id = f"{source_id}-p{int(page['page']):03d}-l{line_number:03d}-{stable_hash(text)}"
            cards.append(
                {
                    "id": card_id,
                    "sourceId": source_id,
                    "sourceTitle": page["sourceTitle"],
                    "page": int(page["page"]),
                    "line": line_number,
                    "kind": kind,
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
