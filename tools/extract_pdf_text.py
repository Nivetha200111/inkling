"""Extract embedded text from PDFs using pypdfium2.

This replaces the Windows OCR pipeline which produced garbage text
for PDFs that already have embedded text layers.

Usage:
    python tools/extract_pdf_text.py --project-root . --output tmp/ocr-lines.json
"""
from __future__ import annotations

import argparse
import json
import sys
from datetime import datetime, timezone
from pathlib import Path

try:
    import pypdfium2 as pdfium
except ImportError:
    print("ERROR: pypdfium2 is required. Install with: pip install pypdfium2", file=sys.stderr)
    sys.exit(1)


# (sourceId, sourceTitle, pdfFilename)
PDF_SOURCES = [
    ("inkling1", "Inkling Part 1", "inkling1.pdf"),
    ("inklingpart2", "Inkling Part 2", "inklingpart2.pdf"),
    ("adfinkling1", "ADF Inkling Part 1", "adfinkling1.pdf"),
    ("adfinkling2", "ADF Inkling Part 2", "adfinkling2.pdf"),
    ("adfinkling3", "ADF Inkling Part 3", "adfinkling3.pdf"),
]


def extract_text_from_pdf(pdf_path: Path, source_id: str, source_title: str, pdf_filename: str) -> list[dict]:
    """Extract text from every page of a PDF, returning page dicts."""
    pages: list[dict] = []

    try:
        doc = pdfium.PdfDocument(str(pdf_path))
    except Exception as exc:
        print(f"  WARNING: Could not open {pdf_path}: {exc}", file=sys.stderr)
        return pages

    num_pages = len(doc)
    print(f"  {pdf_filename}: {num_pages} pages")

    for page_idx in range(num_pages):
        page_num = page_idx + 1
        try:
            page = doc[page_idx]
            textpage = page.get_textpage()
            raw_text = textpage.get_text_range()
            textpage.close()
            page.close()
        except Exception as exc:
            print(f"    Page {page_num}: error extracting text – {exc}", file=sys.stderr)
            continue

        if not raw_text or not raw_text.strip():
            continue

        # Split into lines and strip each
        lines = [line.strip() for line in raw_text.splitlines()]
        # Remove empty lines
        lines = [line for line in lines if line]

        if not lines:
            continue

        preview_image = f"assets/pages/{source_id}-p{page_num:03d}.jpg"
        pages.append({
            "sourceId": source_id,
            "sourceTitle": source_title,
            "pdfPath": pdf_filename,
            "page": page_num,
            "previewImage": preview_image,
            "lines": lines,
        })

    doc.close()
    return pages


def main() -> None:
    parser = argparse.ArgumentParser(description="Extract text from PDFs using pypdfium2.")
    parser.add_argument("--output", type=Path, default=Path("tmp/ocr-lines.json"),
                        help="Output JSON path (default: tmp/ocr-lines.json)")
    parser.add_argument("--project-root", type=Path, default=Path("."),
                        help="Project root directory (default: current directory)")
    args = parser.parse_args()

    project_root = args.project_root.resolve()
    print(f"Project root: {project_root}")

    all_pages: list[dict] = []

    for source_id, source_title, pdf_filename in PDF_SOURCES:
        pdf_path = project_root / pdf_filename
        if not pdf_path.exists():
            print(f"  WARNING: PDF not found: {pdf_path}", file=sys.stderr)
            continue
        pages = extract_text_from_pdf(pdf_path, source_id, source_title, pdf_filename)
        all_pages.extend(pages)
        print(f"    -> {len(pages)} pages with text")

    payload = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "engine": "pypdfium2-text",
        "pages": all_pages,
    }

    output_path = args.output
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\nWrote {output_path} with {len(all_pages)} pages from {len(PDF_SOURCES)} sources.")


if __name__ == "__main__":
    main()
