---
name: naane-branding
description: "Aplica membrete oficial AICS+NAANE y logos del consorcio CC217 a documentos Word, PowerPoint y Excel. Úsalo para proyecto Naane, CC217, OIKOS, AICS o Buen Vivir Amazonas."
---

# NAANE Project (CC217) Letterhead Skill

This skill applies the official letterhead and branding for the FUCAI project **CC217 — Naãne (Buen Vivir Amazonas)**, funded by **AICS (Italian Cooperation)** and implemented in partnership with **OIKOS** (Italian NGO) and Colombian academic + indigenous partners.

## When to use this skill

Activate this skill whenever the user requests:
- Any document mentioning **CC217**, **Naane**, **Naãne**, **proyecto Naane**, or **Buen Vivir Amazonas**
- Any communication addressed to **OIKOS** or **AICS** (Agenzia Italiana per la Cooperazione allo Sviluppo)
- Any institutional output produced under the AICS-funded Italian cooperation cycle

Do NOT use this skill for:
- General FUCAI documents not tied to CC217 → use `fucai-branding` only
- CC216 (Manos Unidas) or CC218 (Misereor) documents → use `fucai-branding` only

This skill **extends** `fucai-branding` — always read `fucai-branding` first for typography, color palette, and voice & tone, then layer NAANE-specific letterhead rules on top.

## Immutable rules (verified automatically)

### Header — exactly 2 logos, identical size
1. **Left:** `aics.png` (donor: AICS)
2. **Right:** `naane.png` (project logo)

Both rendered at exactly **2.0 × 2.0 cm** (square).

### Footer — exactly 9 logos, identical size, fixed order
1. `oikos.png` — Italian implementing partner
2. `unitn_dicam.png` — Università di Trento DICAM
3. `fucai.png` — Colombian lead implementer
4. `javeriana.png` — Pontificia Universidad Javeriana
5. `alcaldia_leticia.png` — Territorial authority
6. `acitam.png` — Indigenous authority (ACITAM)
7. `aticoya.png` — Indigenous authority (ATICOYA)
8. `maikuchiga.png` — Fundación Maikuchiga
9. `raiz.png` — Fundación Raíz

All rendered at exactly **1.2 × 1.2 cm** (square).

### Body identifier
The body must contain the string `CC217` at least once. The title block auto-inserts this.

## How to generate a NAANE document

For `.docx` outputs, ALWAYS use the provided script — it guarantees correct layout AND validates the result automatically:

```python
import sys
from pathlib import Path

SKILL_DIR = "<this skill's directory>"  # auto-detected if running as script
sys.path.insert(0, str(Path(SKILL_DIR) / "scripts"))
from build_naane_docx import create_naane_document, validate_naane_document

# 1. Create the document (header + footer auto-applied)
doc = create_naane_document(
    title="Informe trimestral CC217 — Naãne",
    subtitle="Periodo enero–marzo 2026",
    document_type="informe",  # "informe" | "carta" | "acta" | "presupuesto" | "memorando"
    addressee=None,           # for cartas: {"name": ..., "position": ..., "organization": ..., "city": ...}
    skill_dir=SKILL_DIR,
)

# 2. Add body content
doc.add_heading("1. Resumen ejecutivo", level=1)
doc.add_paragraph("Texto del informe...")

# 3. Save
output_path = "/mnt/user-data/outputs/CC217_Informe_2026-03.docx"
doc.save(output_path)

# 4. MANDATORY: validate
report = validate_naane_document(output_path)
# raises NaaneBrandingValidationError if anything is wrong
```

**Always call `validate_naane_document()` after `doc.save()`.** It verifies that all immutable rules are satisfied. If it raises an error, fix the issue before delivering.

## Project identifiers — mandatory references

Every NAANE document must carry these identifiers:

| Identifier | Where it appears |
|------------|------------------|
| `CC217` | Title block, file name, body |
| `Naãne` (with tilde on the second A — official Tikuna form) | Title and body text |
| `AICS — Agenzia Italiana per la Cooperazione allo Sviluppo` | First page, footer |
| `OIKOS` | Addressee block when applicable, footer |
| `Buen Vivir Amazonas` | Subtitle |

## File naming convention

```
CC217_TipoDocumento_Tema_YYYY-MM[-DD].ext
```

Examples:
- `CC217_Informe_Trimestre1_2026-03.docx`
- `CC217_Acta_ReunionConsorcio_2026-05-14.docx`
- `CC217_Carta_OIKOS_SolicitudNoObjecion_2026-05-14.docx`
- `CC217_Presupuesto_AnoII_2026-04.xlsx`

## For PowerPoint and Excel

The script in `scripts/` currently covers `.docx`. For `.pptx` and `.xlsx` outputs, see `references/full-specification.md` for the layout rules (header logos in top corners, footer band with all 9 partners, color and typography rules inherited from `fucai-branding`).

## More detail

When you need the complete specification (page setup, Italian Cooperation language conventions, full PowerPoint and Excel rules, voice & tone overrides, delivery checklist), read `references/full-specification.md`. It contains all the original 367-line specification this compact SKILL.md was distilled from.

For installation instructions and notes on how the logos were preprocessed, see `references/installation.md`.
