from __future__ import annotations

import argparse
import json
from pathlib import Path

from PIL import Image


MAX_DIMENSION = 3800
OVERLAP = 120


def chunk_image(image_path: Path, max_dimension: int) -> list[Path]:
    image = Image.open(image_path).convert("RGB")
    width, height = image.size
    if width <= max_dimension and height <= max_dimension:
        return [image_path]

    if width > max_dimension:
        scale = max_dimension / width
        image = image.resize((max_dimension, int(height * scale)))
        width, height = image.size

    if height <= max_dimension:
        image.save(image_path)
        return [image_path]

    stem = image_path.with_suffix("")
    chunk_paths: list[Path] = []
    step = max_dimension - OVERLAP
    top = 0
    chunk_index = 1
    while top < height:
        bottom = min(height, top + max_dimension)
        chunk = image.crop((0, top, width, bottom))
        chunk_path = Path(f"{stem}-chunk{chunk_index:02d}.png")
        chunk.save(chunk_path)
        chunk_paths.append(chunk_path)
        if bottom == height:
            break
        top += step
        chunk_index += 1

    return chunk_paths


def main() -> None:
    parser = argparse.ArgumentParser(description="Chunk already rendered OCR page images.")
    parser.add_argument("--manifest", type=Path, default=Path("tmp/render-manifest.json"))
    parser.add_argument("--max-dimension", type=int, default=MAX_DIMENSION)
    args = parser.parse_args()

    manifest = json.loads(args.manifest.read_text(encoding="utf-8"))
    chunked = 0
    for page in manifest["pages"]:
        original = Path(page["ocrImage"])
        chunks = chunk_image(original, args.max_dimension)
        page["ocrImage"] = str(chunks[0])
        page["ocrImages"] = [str(path) for path in chunks]
        if len(chunks) > 1:
            chunked += 1

    manifest["maxOcrDimension"] = args.max_dimension
    args.manifest.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Updated {args.manifest}; chunked {chunked} oversized pages", flush=True)


if __name__ == "__main__":
    main()
