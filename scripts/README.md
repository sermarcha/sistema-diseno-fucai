# scripts/ — Motor del Sistema de Diseño FUCAI

Generadores y utilidades que **consumen** `03_tokens/tokens.json`. Ningún script
tiene colores ni familias tipográficas quemados: todo se lee de los tokens vía
`lib/`. Los entregables (.docx/.pptx/.xlsx) se producen en ejecución y van a
`dist/` (ignorado por git); el repo solo guarda fuentes.

## Contenido

| Archivo | Qué es | Origen |
|---------|--------|--------|
| `lib/tokens.js` | Carga y resuelve `tokens.json` para Node (expone `C`, `FONT`, `SZ`, `PT`). | Nuevo |
| `lib/tokens.py` | Igual para Python (`C`, `FONT`, `PT`). | Nuevo |
| `generators/fucai_docx.js` | Constructores de Word. **Reutilizado** del skill; adaptado para leer marca desde tokens. | Skill (adaptado) |
| `generators/fucai_pptx.js` | Constructores de PowerPoint. **Reutilizado**; adaptado. | Skill (adaptado) |
| `generators/fucai_xlsx.py` | Estilos de Excel. **Reutilizado**; adaptado. | Skill (adaptado) |
| `check_fucai.py` | QA objetivo de un `.docx` (fondo blanco, bug `rId0`, paleta, fuentes). **Reutilizado**; adaptado. | Skill (adaptado) |
| `build-skill.js` | **Esqueleto documentado** del compilador tokens → constantes + tablas `[GEN]`. | Nuevo (stub) |

## Uso

```bash
npm install                         # docx, pptxgenjs
pip install -r requirements.txt     # openpyxl, (fonttools para fuentes)

node scripts/build-skill.js         # dry-run: imprime valores resueltos y tablas [GEN]
python3 scripts/check_fucai.py <archivo.docx>   # QA de un documento Word
```

Los generadores se invocan desde un script de armado (ver ejemplos del skill en
`skill/fucai-branding/scripts/example_*`). Resuelven la ruta de los logos a
`02_identidad-visual/logo/` por sí mismos.

## Reglas técnicas críticas que encapsulan (ver `04_componentes/documento/`)

Fondo blanco en Word siempre · sin imágenes en headers (bug `rId0`) · 2–3
secciones · bandas como tablas de solo texto en el `Footer` · `lineRule:"atLeast"`
en tipos > 60 pt · campos de centro de costo de texto abierto.
