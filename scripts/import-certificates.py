"""Import local certificate files into public/assets/certificates and certificates.json.

The script never uploads files and never overwrites an existing destination file.
OCR is intentionally optional: install pytesseract and Pillow to enable it.
"""
from pathlib import Path
import json
import shutil
import re

try:
    import pymupdf
except ImportError:
    pymupdf = None

ROOT = Path(__file__).resolve().parents[1]
INBOX = ROOT / "public" / "assets" / "certifications" / "inbox"
DEST = ROOT / "public" / "assets" / "certificates"
DATA = ROOT / "src" / "data" / "certificates.json"
SUPPORTED = {".jpg", ".jpeg", ".png", ".webp", ".pdf"}

def main():
    INBOX.mkdir(parents=True, exist_ok=True)
    DEST.mkdir(parents=True, exist_ok=True)
    records = json.loads(DATA.read_text(encoding="utf-8")) if DATA.exists() else []
    known = {item["file"] for item in records}
    for source in sorted(INBOX.iterdir()):
        if not source.is_file() or source.suffix.lower() not in SUPPORTED:
            continue
        target = DEST / source.name
        if not target.exists():
            shutil.copy2(source, target)
        if source.suffix.lower() == ".pdf" and pymupdf is not None:
            preview = DEST / f"{source.stem}-preview.jpg"
            if not preview.exists():
                document = pymupdf.open(target)
                if document.page_count:
                    pixmap = document[0].get_pixmap(matrix=pymupdf.Matrix(2, 2), alpha=False)
                    pixmap.save(preview, jpg_quality=88)
                document.close()
        if source.name not in known:
            records.append({
                "title": re.sub(r"[_-]+", " ", source.stem).strip(),
                "issuer": "",
                "date": "",
                "description": "",
                "category": "",
                "file": source.name,
                "link": "",
                "needsReview": True,
            })
    DATA.parent.mkdir(parents=True, exist_ok=True)
    DATA.write_text(json.dumps(records, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    if pymupdf is None:
        print("PyMuPDF is not installed; PDF previews were not generated. Install it with: py -m pip install PyMuPDF")
    print(f"Processed {len(records)} certificate records. Review needsReview entries before publishing.")

if __name__ == "__main__":
    main()
