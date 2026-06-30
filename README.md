# Quizling

A static flashcard web app generated from the Inkling PDF screenshots.

## Run

```powershell
python -m http.server 5173
```

Then open `http://localhost:5173`.

## What is included

- `data/materials.js`: 10,261 OCR-derived line cards from the two supplied PDFs.
- `assets/pages/`: cropped source-page previews shown beside each card.
- `app.js`: local spaced review, flashcards, multiple choice, typed cloze, filters, and saved progress.
- `tools/`: PDF rendering and OCR rebuild scripts.

## Add another PDF later

Install/use the bundled Python runtime, then rebuild with:

```powershell
python tools/render_pages.py --pdf "book3=Book 3=C:\path\to\book.pdf"
powershell -ExecutionPolicy Bypass -File tools/ocr_pages.ps1
python tools/build_materials.py
```

The default scripts are already configured for the two Inkling PDFs from this session.
