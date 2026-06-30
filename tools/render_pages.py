from __future__ import annotations

import argparse
import json
from datetime import datetime, timezone
from pathlib import Path

import pypdfium2 as pdfium


DEFAULT_PDFS = [
    ("inkling1", "Inkling Part 1", Path(r"C:\Users\NivethaSivakumar\Downloads\inkling1.pdf")),
    ("inklingpart2", "Inkling Part 2", Path(r"C:\Users\NivethaSivakumar\Downloads\inklingpart2.pdf")),
]

CROP = (0.27, 0.02, 0.91, 0.99)
MAX_OCR_DIMENSION = 3800
OCR_CHUNK_OVERLAP = 120


def parse_pdf_arg(value: str) -> tuple[str, str, Path]:
    parts = value.split("=", 2)
    if len(parts) != 3:
        raise argparse.ArgumentTypeError("Use id=Title=C:\\path\\file.pdf")
    source_id, title, pdf_path = parts
    return source_id.strip(), title.strip(), Path(pdf_path.strip())


def crop_page(image):
    width, height = image.size
    left = int(width * CROP[0])
    top = int(height * CROP[1])
    right = int(width * CROP[2])
    bottom = int(height * CROP[3])
    return image.crop((left, top, right, bottom))


def save_ocr_images(image, output_dir: Path, stem: str, max_dimension: int) -> list[Path]:
    width, height = image.size
    if width <= max_dimension and height <= max_dimension:
        output_path = output_dir / f"{stem}.png"
        image.save(output_path)
        return [output_path]

    if width > max_dimension:
        scale = max_dimension / width
        image = image.resize((max_dimension, int(height * scale)))
        width, height = image.size

    if height <= max_dimension:
        output_path = output_dir / f"{stem}.png"
        image.save(output_path)
        return [output_path]

    chunk_paths: list[Path] = []
    step = max_dimension - OCR_CHUNK_OVERLAP
    top = 0
    chunk_index = 1
    while top < height:
        bottom = min(height, top + max_dimension)
        chunk = image.crop((0, top, width, bottom))
        chunk_path = output_dir / f"{stem}-chunk{chunk_index:02d}.png"
        chunk.save(chunk_path)
        chunk_paths.append(chunk_path)
        if bottom == height:
            break
        top += step
        chunk_index += 1
    return chunk_paths


def render_pdf(source_id: str, title: str, pdf_path: Path, args) -> list[dict]:
    if not pdf_path.exists():
        raise FileNotFoundError(pdf_path)

    document = pdfium.PdfDocument(str(pdf_path))
    records: list[dict] = []

    for page_index in range(len(document)):
        page_number = page_index + 1
        stem = f"{source_id}-p{page_number:03d}"
        page = document[page_index]

        ocr_image = crop_page(page.render(scale=args.ocr_scale).to_pil().convert("RGB"))
        ocr_paths = save_ocr_images(ocr_image, args.ocr_dir, stem, args.max_ocr_dimension)

        preview_image = crop_page(page.render(scale=args.preview_scale).to_pil().convert("RGB"))
        preview_path = args.preview_dir / f"{stem}.jpg"
        preview_image.save(preview_path, quality=args.preview_quality, optimize=True)

        records.append(
            {
                "sourceId": source_id,
                "sourceTitle": title,
                "pdfPath": str(pdf_path),
                "page": page_number,
                "ocrImage": str(ocr_paths[0]),
                "ocrImages": [str(path) for path in ocr_paths],
                "previewImage": str(preview_path.relative_to(args.app_root)).replace("\\", "/"),
            }
        )

        if page_number % 10 == 0 or page_number == len(document):
            print(f"{title}: rendered {page_number}/{len(document)} pages", flush=True)

    return records


def main() -> None:
    parser = argparse.ArgumentParser(description="Render cropped PDF pages for OCR and in-app previews.")
    parser.add_argument("--app-root", type=Path, default=Path.cwd())
    parser.add_argument("--ocr-dir", type=Path, default=Path("tmp/ocr-pages"))
    parser.add_argument("--preview-dir", type=Path, default=Path("assets/pages"))
    parser.add_argument("--manifest", type=Path, default=Path("tmp/render-manifest.json"))
    parser.add_argument("--ocr-scale", type=float, default=2.25)
    parser.add_argument("--max-ocr-dimension", type=int, default=MAX_OCR_DIMENSION)
    parser.add_argument("--preview-scale", type=float, default=1.25)
    parser.add_argument("--preview-quality", type=int, default=78)
    parser.add_argument("--pdf", action="append", type=parse_pdf_arg, help="Add a PDF as id=Title=C:\\path\\file.pdf")
    args = parser.parse_args()

    args.app_root = args.app_root.resolve()
    args.ocr_dir = (args.app_root / args.ocr_dir).resolve()
    args.preview_dir = (args.app_root / args.preview_dir).resolve()
    args.manifest = (args.app_root / args.manifest).resolve()
    args.ocr_dir.mkdir(parents=True, exist_ok=True)
    args.preview_dir.mkdir(parents=True, exist_ok=True)
    args.manifest.parent.mkdir(parents=True, exist_ok=True)

    sources = args.pdf or DEFAULT_PDFS
    pages: list[dict] = []
    for source_id, title, pdf_path in sources:
        pages.extend(render_pdf(source_id, title, pdf_path, args))

    manifest = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "crop": CROP,
        "ocrScale": args.ocr_scale,
        "previewScale": args.preview_scale,
        "pages": pages,
    }
    args.manifest.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {args.manifest} with {len(pages)} pages", flush=True)


if __name__ == "__main__":
    main()
