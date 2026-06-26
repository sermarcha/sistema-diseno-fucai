# naane-branding

Skill institucional para el proyecto **CC217 — Naãne (Buen Vivir Amazonas)** de FUCAI,
financiado por la Agenzia Italiana per la Cooperazione allo Sviluppo (AICS) e
implementado en consorcio con OIKOS y socios académicos y territoriales.

## Garantías del skill

Este skill aplica **reglas inmutables** sobre la ubicación, el orden y el tamaño
de los logos, y las verifica automáticamente después de generar cada documento:

| Regla | Garantía | Verificación |
|-------|----------|--------------|
| Header tiene 2 logos | AICS (izquierda) + NAANE (derecha) | conteo de `<w:drawing>` |
| Footer tiene 9 logos | Orden canónico fijo (ver SKILL.md §Immutable Rules) | comparación por hash MD5 |
| Logos del header | Todos cuadrados 2.0 × 2.0 cm idénticos | comparación de `<wp:extent>` |
| Logos del footer | Todos cuadrados 1.2 × 1.2 cm idénticos | comparación de `<wp:extent>` |
| Identificador CC217 | Presente en el cuerpo del documento | grep en `document.xml` |

Si alguna verificación falla, el script lanza `NaaneBrandingValidationError`
con un reporte detallado antes de entregar el documento.

## Uniformidad de tamaño

Todos los logos están preprocesados a **canvas cuadrados de 1024 × 1024 px** con
el contenido centrado y fondo transparente. Esto significa que un logo horizontal
como OIKOS, un logo vertical como Raíz, y un logo cuadrado como Maikuchiga, al
insertarse en una celda cuadrada del mismo tamaño, aparecen del mismo tamaño
visual sin ser deformados.

Los originales (sin procesamiento) están guardados en `assets/logos/_originals/`
por si en el futuro necesitas regenerar el preprocesamiento.

## Instalación

Copiar la carpeta completa a:

- **Mac mini / Linux:** `~/.claude/skills/user/naane-branding/`
- **Windows desktop:** `%USERPROFILE%\.claude\skills\user\naane-branding\`

O en el contenedor de Claude (cuando esté disponible read-write):
`/mnt/skills/user/naane-branding/`

## Estructura

```
naane-branding/
├── SKILL.md                  # documentación principal del skill (lee Claude)
├── README.md                 # este archivo
├── assets/
│   └── logos/                # 11 logos institucionales, todos 1024×1024 px PNG transparente
│       ├── aics.png          # AICS — donante (header izquierda)
│       ├── naane.png         # Naane — logo proyecto (header derecha)
│       ├── oikos.png         # OIKOS — socio italiano (footer #1)
│       ├── unitn_dicam.png   # Università di Trento DICAM (footer #2)
│       ├── fucai.png         # FUCAI (footer #3)
│       ├── javeriana.png     # Pontificia Universidad Javeriana (footer #4)
│       ├── alcaldia_leticia.png  # Alcaldía de Leticia (footer #5)
│       ├── acitam.png        # ACITAM (footer #6)
│       ├── aticoya.png       # ATICOYA (footer #7)
│       ├── maikuchiga.png    # Fundación Maikuchiga (footer #8)
│       ├── raiz.png          # Fundación Raíz (footer #9)
│       └── _originals/       # versiones sin preprocesar (respaldo)
└── scripts/
    └── build_naane_docx.py   # generador + validador de .docx
```

## Uso desde Claude

Basta con pedirle a Claude cualquiera de los siguientes detonantes:

- "Crea una carta para OIKOS sobre…"
- "Necesito un informe trimestral del CC217"
- "Haz un acta de reunión NAANE"
- "Prepara un presupuesto del proyecto Naane"
- "Documento institucional para AICS"

Claude leerá automáticamente `SKILL.md`, generará el documento con el membrete
completo, y ejecutará `validate_naane_document()` para confirmar que todo
está en orden antes de entregarlo.

## Uso programático directo

```python
import sys
sys.path.insert(0, '/ruta/a/naane-branding/scripts')
from build_naane_docx import create_naane_document, validate_naane_document

doc = create_naane_document(
    title="Informe trimestral",
    subtitle="Periodo enero–marzo 2026",
    document_type="informe",
    skill_dir="/ruta/a/naane-branding",
)
doc.add_heading("1. Resumen", level=1)
doc.add_paragraph("Contenido...")

doc.save("/ruta/a/output.docx")
report = validate_naane_document("/ruta/a/output.docx")
print(report["status"])  # "OK" si todo bien, o excepción si algo falla
```

## Activación condicional

El skill **solo** se activa para documentos del proyecto CC217 / Naane / comunicaciones
con OIKOS o AICS. Para documentos institucionales generales de FUCAI no relacionados
con CC217 (como CC216 Manos Unidas o CC218 Misereor), Claude usará únicamente
`fucai-branding`.

## Nota técnica sobre los logos

Los logos originales (antes del preprocesamiento) tenían formatos heterogéneos:
algunos PNG con fondo negro (porque la transparencia se perdió en la carga),
otros JPG con fondo blanco, con distintos aspect ratios. El preprocesamiento
estandariza todos a:

1. Detección y eliminación del fondo (negro o blanco) → transparencia real
2. Recorte del bounding box del contenido visible
3. Centrado en un canvas cuadrado de 1024×1024 px con padding del 7.5 %

Para el logo de **Università di Trento – DICAM**, el archivo original tenía el
texto "Dipartimento di Ingegneria Civile, Ambientale e Meccanica" en color
blanco que se perdió al hacer la conversión a transparencia. Por eso solo se
muestra el escudo. Si requieres el texto completo, reemplaza
`assets/logos/unitn_dicam.png` con una versión que tenga texto en negro o azul.
