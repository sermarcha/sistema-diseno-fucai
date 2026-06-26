---
name: naane-branding
description: "Aplica membrete oficial AICS+NAANE y logos del consorcio CC217 a documentos Word, PowerPoint y Excel. Úsalo para proyecto Naane, CC217, OIKOS, AICS o Buen Vivir Amazonas."
---

# NAANE Project (CC217) Branding & Letterhead Skill

This skill defines the official letterhead and visual identity rules for the FUCAI project **CC217 — Naãne ("nuestra tierra" en lengua tikuna)**, funded by **AICS — Agenzia Italiana per la Cooperazione allo Sviluppo** through the Italian NGO **OIKOS**, implemented by **Fundación Caminos de Identidad (FUCAI)** in partnership with indigenous authorities and academic partners in the Colombian Amazon Trapezoid.

> **Project code:** CC217
> **Project name:** Naãne — Buen Vivir Amazonas
> **Donor:** Agenzia Italiana per la Cooperazione allo Sviluppo (AICS) — Cooperazione Italiana
> **Lead Italian partner:** OIKOS (ONG italiana)
> **Implementing partner (Colombia):** Fundación Caminos de Identidad — FUCAI
> **Territory:** Trapecio Amazónico (Leticia, Puerto Nariño, resguardos TICOYA y CIMTAR)

---

## Relationship to fucai-branding

This skill is a **letterhead overlay**, not a replacement. Before applying NAANE rules, **always read `fucai-branding`** for:
- Color palette (Naranja FUCAI `#E94513`, Arena `#EDE8D3`, etc.)
- Typography (Space Grotesk for headings, Calibri for body)
- Voice & tone rules
- Body formatting, table styles, footer slogan
- 60-30-10 proportion rule

Then apply the NAANE-specific overrides defined below.

**The key NAANE override is the letterhead** (header with AICS+NAANE logos, footer with partner consortium logos). FUCAI's standard one-line footer (`Fundación Caminos de Identidad — FUCAI | www.fucaicolombia.org`) is REPLACED on NAANE documents by the partner-logos footer band.

---

## Brand Assets Location

All logos are bundled with this skill in `assets/logos/` as PNG/JPG. Reference path at runtime: `<SKILL_DIR>/assets/logos/<filename>`.

### Header (top of page) — 2 logos

| Position | File | Represents | Size guidance |
|----------|------|------------|---------------|
| **Left** | `aics.png` | AICS — Agenzia Italiana per la Cooperazione allo Sviluppo (the donor) | ~2.5 cm tall |
| **Right** | `naane.png` | Logo del proyecto Naãne (árbol con guacamayo y delfín rosado) | ~2.5 cm tall (square) |

The header reads as: **"Project X (right) is financed by Italian Cooperation AICS (left)"** — donor on the reading-start side, project identity on the reading-end side.

### Footer (bottom of page) — 9 partner logos

The footer is a single horizontal band with all consortium and territorial partners. Logos appear in this order, left to right, in two visual tiers (Italian partners + Colombian partners + territorial authorities + indigenous associations):

| # | File | Represents | Category |
|---|------|------------|----------|
| 1 | `oikos.png` | OIKOS (ONG italiana) | Italian implementing partner |
| 2 | `unitn_dicam.png` | Università di Trento — Dipartimento di Ingegneria Civile, Ambientale e Meccanica | Italian academic partner |
| 3 | `fucai.png` | FUCAI — Fundación Caminos de Identidad | Colombian lead implementer |
| 4 | `javeriana.png` | Pontificia Universidad Javeriana Bogotá | Colombian academic partner |
| 5 | `alcaldia_leticia.png` | Alcaldía de Leticia | Territorial authority |
| 6 | `acitam.png` | ACITAM — Asociación de Cabildos Indígenas del Trapecio Amazónico | Indigenous authority |
| 7 | `aticoya.jpg` | ATICOYA — Asociación de Autoridades Indígenas Tikuna, Cocama, Yagua de Puerto Nariño | Indigenous authority |
| 8 | `maikuchiga.jpg` | Fundación Maikuchiga (Mocagua) | Local conservation partner |
| 9 | `raiz.jpg` | Fundación Raíz | Local partner |

Total: **9 partner logos** in the footer band (in addition to the 2 in the header).

---

## Letterhead Layout — Word (.docx)

### Page setup
- Format: **A4** (21 × 29.7 cm) — Italian and European standard, since the donor is Italian
- Margins: **Top 2.0 cm · Bottom 2.0 cm · Left 2.5 cm · Right 2.5 cm**
- Header distance: **1.0 cm** from top of page
- Footer distance: **1.0 cm** from bottom of page

### Header band (must appear on every page)

The header contains a **2-column invisible table** (1 row, 2 columns) with no borders:

| Left cell (50% width) | Right cell (50% width) |
|----------------------|------------------------|
| AICS logo, left-aligned | Naane logo, right-aligned |
| Height: ~2.5 cm | Height: ~2.5 cm |

Below the logos, a **thin orange separator line** (1 pt, color `#E94513`, FUCAI naranja) spans the full page width to visually close the header.

### Footer band (must appear on every page)

The footer contains an **invisible single-row table with 9 cells** (one per logo), spanning the full content width. Logos are vertically center-aligned within their cells, with consistent height of approximately **1.0–1.2 cm**. Logo widths vary because aspect ratios differ; the table cells auto-size to content with small equal padding.

Above the logo row, a **thin orange line** (0.75 pt, `#E94513`) acts as a separator from the body.

Below the logo row, a **single line of fine print** (Calibri 7 pt, gray `#666666`, centered):

> *Proyecto «Naãne — Buen Vivir Amazonas» (CC217) · Financiado por la Agenzia Italiana per la Cooperazione allo Sviluppo (AICS) · Implementado por OIKOS y Fundación Caminos de Identidad — FUCAI*

The page number goes immediately below the fine print, right-aligned, in the format `Página X de Y` (Calibri 8 pt, gray `#666666`).

### Document body

Body styling inherits from `fucai-branding`:
- Headings: Space Grotesk Bold, colors per FUCAI scale
- Body: Calibri 11 pt, justified, line spacing 1.15
- Tables: orange header row, alternating arena claro rows
- Voice & tone: per fucai-branding (sencillo, concreto, empoderador, etc.)

### First page (cover or letter opening)

For formal letters, the first content paragraph below the header should be the date, right-aligned, in the format:
> *Bogotá, D.C., 14 de mayo de 2026*

Followed by the addressee block (typically `OIKOS — [Nombre]` or `AICS Sede Regionale di Bogotá — [Nombre]`) left-aligned, then the body of the letter.

For internal NAANE deliverables (informes, actas, presupuestos), the first content line is the document title in Space Grotesk Bold 22 pt, color `#E94513`, with the project identifier `Proyecto CC217 — Naãne` immediately above in Calibri 10 pt italic gray `#666666`.

---

## Letterhead Layout — PowerPoint (.pptx)

For NAANE presentations, the letterhead translates to a **master slide template** with:

### All slides (master)
- **Top-left corner:** AICS logo, height 1.2 cm, margin 0.7 cm from edges
- **Top-right corner:** Naane logo, height 1.5 cm (square, slightly larger), margin 0.7 cm from edges
- **Bottom band:** orange separator line + the 9 partner logos in a single row, height ~0.8 cm each, with the fine-print caption below in Calibri 6 pt gray

### Cover slide
- Solid orange background (`#E94513`)
- AICS logo top-left in white version (use `aics.png` if no white version available — donor logos rarely have brand-mandated reversed versions for cover use; prefer placing on a small white card if needed)
- Naane logo top-right (it has color, so place it on a small white circle or rounded rectangle background if needed for legibility on orange)
- Title in white Space Grotesk Bold, 40–48 pt, left-aligned
- Subtitle: `Proyecto CC217 · Financiado por la Cooperazione Italiana — AICS`, white Calibri 16 pt italic
- Partner-logos footer band: white background strip (height ~2 cm), all 9 logos in row

### Content slides
- White background
- Standard FUCAI orange title bar (per fucai-branding pptx rules)
- AICS + Naane in top corners (always visible)
- Footer logos band always visible

---

## Letterhead Layout — Excel (.xlsx)

Excel files (budgets, MEL trackers, indicator tables) for NAANE use the letterhead via **page setup → header/footer with image embed** for printing, and a **branded title block at the top of the first sheet** for on-screen display.

### Top of first sheet (rows 1–4)
- **Row 1, cols A–E:** merged, contains AICS logo (inserted as picture, height ~50 px)
- **Row 1, cols F+:** merged, contains Naane logo (height ~60 px), right-aligned
- **Row 2:** merged across all used columns, orange fill `#E94513`, white text, Space Grotesk Bold 14 pt, content: `Proyecto CC217 — Naãne · Buen Vivir Amazonas`
- **Row 3:** merged across all used columns, white fill, Calibri 10 pt italic gray `#666666`, content: `Financiado por la Agenzia Italiana per la Cooperazione allo Sviluppo (AICS) · Implementado por OIKOS y FUCAI`
- **Row 4:** empty (visual breathing room)
- Data starts on **row 5**.

### Print setup
- Page header (Excel built-in): AICS logo left + "CC217 — Naãne" centered (Calibri 10 italic) + Naane logo right
- Page footer (Excel built-in): the partner-logos band is too dense for Excel's native footer; instead use a small caption: `Proyecto CC217 · AICS · OIKOS · FUCAI · &P de &N` (where `&P` is page and `&N` is total pages)
- Orientation: landscape for most NAANE budget/MEL tables
- Scale: fit to 1 page wide

---

## Project Identifiers — Mandatory References

Every NAANE document must carry these identifiers in the appropriate places:

| Identifier | Where it appears |
|------------|------------------|
| **CC217** | Document title block, file name, footer fine print |
| **Naãne** (with tilde on the second A) | Document title; the spelling with tilde is the official Tikuna form |
| **AICS — Agenzia Italiana per la Cooperazione allo Sviluppo** | First page, footer fine print |
| **OIKOS** | First page or letter addressee block when relevant, footer logo |
| **Buen Vivir Amazonas** | Subtitle on cover pages |

**Variants accepted:** "Naane" (without tilde) is acceptable in file names, email subject lines, and code/identifiers where diacritics are technically problematic. In body text, presentation titles, and formal documents, always write **Naãne**.

**Project full name (canonical, for first reference in formal documents):**
> *Proyecto Naãne — Buen Vivir Amazonas: fortalecimiento de la gobernanza territorial y la seguridad alimentaria de pueblos indígenas en el Trapecio Amazónico colombiano (CC217)*

---

## File Naming Convention

NAANE deliverables use this naming pattern:
```
CC217_TipoDocumento_Tema_YYYY-MM[-DD].ext
```

Examples:
- `CC217_Informe_Trimestre1_2026-03.docx`
- `CC217_Acta_ReunionConsorcio_2026-05-14.docx`
- `CC217_Presupuesto_AnoII_2026-04.xlsx`
- `CC217_Presentacion_RendicionAICS_2026-06.pptx`
- `CC217_Carta_OIKOS_SolicitudNoObjecion_2026-05-14.docx`

---

## When to Apply This Skill (Activation Rules)

Apply NAANE branding ALWAYS when:

1. The user mentions **CC217**, **Naane**, **Naãne**, **proyecto Naane**, **Buen Vivir Amazonas**.
2. The deliverable is **addressed to OIKOS** (any communication, letter, report, request).
3. The deliverable is **addressed to AICS** (sede Bogotá or sede Roma) or any Italian Cooperation entity.
4. The content discusses activities, budgets, MEL data, or results **funded by AICS through OIKOS**.
5. The user says **"membrete NAANE"**, **"plantilla NAANE"**, **"carta para OIKOS"**, **"informe CC217"**, or any close variant.

Do NOT apply NAANE branding when:
- The deliverable is for **CC216 (Manos Unidas)** → use FUCAI branding only.
- The deliverable is for **CC218 (Misereor/KZE)** → use FUCAI branding only (or the future Misereor-specific skill if created).
- The deliverable is a **general institutional FUCAI document** not tied to any specific project (e.g., FUCAI annual report, board minutes, internal HR documents).

If unclear, ASK the user which project (CC216/CC217/CC218) the document belongs to before applying any project-specific letterhead.

---

## Implementation Script

The Python script `scripts/build_naane_docx.py` (included in this skill) creates a properly branded .docx with the full letterhead **AND validates the result automatically** before returning it. Usage:

```python
import sys
sys.path.insert(0, '<SKILL_DIR>/scripts')
from build_naane_docx import create_naane_document, validate_naane_document

# 1. Create the document (header + footer auto-applied)
doc = create_naane_document(
    title="Informe trimestral CC217 — Naãne",
    subtitle="Periodo enero–marzo 2026",
    document_type="informe",  # "informe" | "carta" | "acta" | "presupuesto" | "memorando"
    addressee=None,  # for letters: dict with name, position, organization, city
    skill_dir="<SKILL_DIR>"
)

# 2. Add body content
doc.add_heading("1. Resumen ejecutivo", level=1)
doc.add_paragraph("Contenido del informe...")

# 3. Save
output_path = "/mnt/user-data/outputs/CC217_Informe_Trimestre1_2026-03.docx"
doc.save(output_path)

# 4. MANDATORY validation step — verifies all immutable rules
report = validate_naane_document(output_path)
print(report)  # {"status": "OK", "footer_order_resolved": [...], ...}
```

**Always call `validate_naane_document()` after saving.** It raises
`NaaneBrandingValidationError` if any of the immutable rules are violated.

## Immutable Rules (Verified Automatically)

The skill enforces these rules. They are NOT defaults — they are guarantees, and the
validator will reject any document that violates them:

### Logo position and order

1. **Header has EXACTLY 2 logos** in this exact order:
   - Position 1 (left): `aics.png` — donor
   - Position 2 (right): `naane.png` — project

2. **Footer has EXACTLY 9 logos** in this exact order:
   1. `oikos.png` — Italian implementing partner
   2. `unitn_dicam.png` — Università di Trento DICAM
   3. `fucai.png` — Colombian lead implementer
   4. `javeriana.png` — Pontificia Universidad Javeriana
   5. `alcaldia_leticia.png` — Territorial authority
   6. `acitam.png` — Indigenous authority (ACITAM)
   7. `aticoya.png` — Indigenous authority (ATICOYA)
   8. `maikuchiga.png` — Fundación Maikuchiga
   9. `raiz.png` — Fundación Raíz

### Logo size uniformity

All logos are preprocessed to **1024 × 1024 px square canvases** with content
centered and transparent backgrounds. In every document:

- **Header logos:** all rendered at exactly **2.0 × 2.0 cm** (square).
- **Footer logos:** all rendered at exactly **1.2 × 1.2 cm** (square).

This guarantees visual uniformity regardless of each logo's original aspect ratio.
The validator checks that ALL header images share identical EMU dimensions and
ALL footer images share identical EMU dimensions.

### Identifier presence

The body MUST contain the string `CC217` at least once. The title block of the
script auto-inserts this on every document.

### Validation method

`validate_naane_document(docx_path, assets_dir=None)` does:

1. Opens the .docx as a zip archive.
2. Counts `<w:drawing>` elements in `word/header*.xml` and `word/footer*.xml`.
3. Extracts `<wp:extent cx="X" cy="Y">` values and checks they are identical
   within each region.
4. **Resolves logo identity by MD5 hash** of the embedded image bytes (python-docx
   renames files to `image1.png`, `image2.png`, etc., so name-based matching is
   unreliable; hash matching is exact).
5. Compares the resolved order against `HEADER_LOGOS_ORDER` and `FOOTER_LOGOS_ORDER`.
6. Greps the body XML for `CC217`.

If any check fails, raises `NaaneBrandingValidationError` with a detailed report
of what was expected vs. what was found.

---

## General Rules

1. **Always read `fucai-branding` first**, then layer NAANE-specific letterhead rules on top.
2. **AICS goes on the LEFT, Naane goes on the RIGHT** in the header — donor-first, project-second reading order.
3. **All 9 partner logos in the footer**, in the canonical order: OIKOS · UniTrento DICAM · FUCAI · Javeriana · Alcaldía Leticia · ACITAM · ATICOYA · Maikuchiga · Raíz.
4. **CC217 identifier** is mandatory in titles, file names, and footer fine print.
5. **The Tikuna spelling Naãne** (with tilde on the second A) is the official form in body text and formal titles. "Naane" is acceptable in technical/file contexts only.
6. **Italian Cooperation language:** in formal documents, write "Agenzia Italiana per la Cooperazione allo Sviluppo (AICS)" on first reference, then "AICS" or "la Cooperazione Italiana" thereafter.
7. **Letters to OIKOS** are typically in Spanish (OIKOS Colombia operates in Spanish), but if explicitly going to OIKOS Italia (Milano), prefer English or Italian.
8. **Footer slogan from FUCAI** (`Nuestro centro es la periferia`) is NOT used on NAANE letterhead documents — the partner-consortium identity takes precedence over institutional slogan.
9. **Voice & tone:** apply fucai-branding voice rules — emphasize community agency, indigenous protagonism, and partnership (not donor-recipient hierarchy).
10. **No logo deformation:** maintain aspect ratios for all 11 logos at all sizes.

---

## Checklist Before Delivery

**The validation step is non-negotiable.** Always call
`validate_naane_document(output_path)` after `doc.save()`. If it raises
`NaaneBrandingValidationError`, FIX the issue before delivering the document
to the user. Do NOT bypass the validator.

Before finalizing any NAANE document, verify:

### Letterhead (auto-verified by validator)
- [ ] Header has EXACTLY 2 logos: AICS (left) + NAANE (right)
- [ ] Footer has EXACTLY 9 logos in canonical order
- [ ] All header logos are 2.0 × 2.0 cm (identical EMU dimensions)
- [ ] All footer logos are 1.2 × 1.2 cm (identical EMU dimensions)
- [ ] Body contains the `CC217` identifier
- [ ] `validate_naane_document()` returned `status: OK`

### Visual (manual review)
- [ ] Orange separator lines above footer and below header
- [ ] Fine-print caption with "CC217 · AICS · OIKOS · FUCAI" present in footer
- [ ] Page numbers in footer ("Página X de Y" right-aligned)
- [ ] Header and footer present on every page (not just page 1)

### Identifiers
- [ ] CC217 appears in document title or first page
- [ ] Naãne is written with tilde in body text (not "Naane")
- [ ] "Agenzia Italiana per la Cooperazione allo Sviluppo (AICS)" on first reference
- [ ] File name follows `CC217_Tipo_Tema_YYYY-MM.ext` pattern

### Typography & Color (inherited from fucai-branding)
- [ ] Headings in Space Grotesk Bold
- [ ] Body in Calibri 11 pt
- [ ] Only FUCAI palette colors used
- [ ] Tables: orange header, alternating arena claro rows

### Verbal
- [ ] Communities named as protagonists, not "beneficiarios"
- [ ] Tone: empoderador, concreto, cercano
- [ ] No words from the FUCAI "avoid" list
- [ ] Partnership language (not "ayuda" or "intervención")

### Final
- [ ] All logos rendered at correct aspect ratio (no stretching)
- [ ] File exported with embedded fonts if shared as PDF
- [ ] Tested in print preview: header/footer not cropped at A4 margins
