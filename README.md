# Quizling

A static flashcard web app generated from the Inkling PDF screenshots.

## Run

```powershell
npm run dev
```

Then open `http://localhost:5174`.

## What is included

- `data/materials.js`: OCR-derived line cards from the supplied Inkling PDFs.
- `assets/pages/`: cropped source-page previews shown beside each card.
- `app.js`: local spaced review, flashcards, multiple choice, typed cloze, filters, and saved progress.
- `tools/`: PDF rendering and OCR rebuild scripts.

## Deploy to Vercel

The app is a static site. Vercel can deploy it directly from this repository.

```powershell
npm run build
```

The build step validates `data/materials.js`; Vercel serves `index.html`, `app.js`, `styles.css`, `data/`, and `assets/`.

## Rebuild the card data

Install/use the bundled Python runtime, then rebuild with:

```powershell
python tools/render_pages.py
powershell -ExecutionPolicy Bypass -File tools/ocr_pages.ps1
python tools/build_materials.py
```

The default scripts are configured for the five Inkling PDFs from this session. To add another book, pass one or more `--pdf "id=Title=C:\path\to\book.pdf"` arguments to `tools/render_pages.py`.
