#!/usr/bin/env python3
"""
check_fucai.py — Objective QA for a FUCAI .docx. Run this after generating any Word file.

    python3 scripts/check_fucai.py <archivo.docx>

HARD checks (must pass, exit 1 on failure):
  - White page background declared (<w:background w:color="FFFFFF"/>)
  - No invalid rId0 relationship in any header/footer rels (the bug that makes Word reject files)
SOFT checks (warn only):
  - Section count is small (<= 4)
  - Orange #E94513 is used; no obvious off-brand colors (generic blue/red)
  - Space Grotesk and Calibri are referenced
"""
import sys, re, zipfile, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "lib"))
from tokens import C, FONT  # naranja y familias desde 03_tokens/tokens.json

OK, WARN, FAIL = "PASS", "WARN", "FAIL"
ORANGE = C["primary"]  # desde tokens.json
OFF_BRAND = {"0000FF": "azul genérico", "4472C4": "azul Office", "FF0000": "rojo genérico",
             "1F4E79": "azul oscuro Office", "5B9BD5": "azul Office claro"}

def main(path):
    try:
        z = zipfile.ZipFile(path)
    except Exception as e:
        print(f"[{FAIL}] No se pudo abrir el .docx: {e}")
        return 1
    names = z.namelist()
    doc_xml = z.read("word/document.xml").decode("utf-8", "ignore") if "word/document.xml" in names else ""
    all_xml = "".join(z.read(n).decode("utf-8", "ignore") for n in names if n.endswith(".xml") or n.endswith(".rels"))

    results, hard_fail = [], False

    # HARD 1 — white page background
    if re.search(r'<w:background[^>]*w:color="FFFFFF"', doc_xml):
        results.append((OK, "Fondo de página blanco declarado (#FFFFFF)."))
    else:
        results.append((FAIL, "Falta el fondo de página blanco. Usa background:{color:'FFFFFF'} en el Document."))
        hard_fail = True

    # HARD 2 — no rId0 in header/footer rels
    bad = [n for n in names if re.search(r"word/(header|footer)\d*\.xml\.rels$", n)
           and 'Id="rId0"' in z.read(n).decode("utf-8", "ignore")]
    if bad:
        results.append((FAIL, f"rId0 inválido en {', '.join(bad)} (imagen en header/footer). Usa header de solo texto."))
        hard_fail = True
    else:
        results.append((OK, "Sin rId0 inválido en encabezados/pies (no hay imágenes en header/footer)."))

    # SOFT — section count
    n_sect = doc_xml.count("<w:sectPr")
    if n_sect <= 4:
        results.append((OK, f"Secciones: {n_sect} (arquitectura sana, 2–3 esperadas)."))
    else:
        results.append((WARN, f"Secciones: {n_sect}. Demasiadas — riesgo de archivo malformado. Usa 2–3."))

    # SOFT — palette
    if ORANGE in all_xml.upper():
        results.append((OK, f"Naranja FUCAI #{ORANGE} presente."))
    else:
        results.append((WARN, f"No se detectó el naranja #{ORANGE}. ¿Se aplicó la marca?"))
    found_off = {hex_: name for hex_, name in OFF_BRAND.items() if hex_ in all_xml.upper()}
    if found_off:
        results.append((WARN, "Colores fuera de marca detectados: " +
                        ", ".join(f"#{h} ({n})" for h, n in found_off.items())))
    else:
        results.append((OK, "Sin colores azul/rojo genéricos fuera de paleta."))

    # SOFT — fonts
    sg = FONT["heading"].replace(" ", "") in all_xml.replace(" ", "")
    cal = FONT["body"] in all_xml
    if sg and cal:
        results.append((OK, "Tipografías Space Grotesk (títulos) y Calibri (cuerpo) referenciadas."))
    else:
        miss = []
        if not sg: miss.append("Space Grotesk")
        if not cal: miss.append("Calibri")
        results.append((WARN, "Falta(n) tipografía(s): " + ", ".join(miss) + "."))

    print(f"\nQA FUCAI — {path}\n" + "-" * 60)
    for status, msg in results:
        mark = {OK: "✓", WARN: "!", FAIL: "✗"}[status]
        print(f"[{status}] {mark} {msg}")
    print("-" * 60)
    if hard_fail:
        print("RESULTADO: ✗ Hay fallos duros. NO entregar hasta corregir.\n")
        return 1
    print("RESULTADO: ✓ Reglas duras superadas. Revisa los WARN y haz QA visual (PDF) antes de entregar.\n")
    return 0

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python3 check_fucai.py <archivo.docx>")
        sys.exit(2)
    sys.exit(main(sys.argv[1]))
