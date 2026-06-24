# Componente — Portada de documento

> Primera página de un informe/documento FUCAI. **Blanca, cálida, sofisticada.**
> Generador: `scripts/generators/fucai_docx.js → buildCover()` (+ banda de
> `coverFooterBand()`). Estado: **estable**.

## Anatomía (de arriba a abajo)

1. Logo naranja (`02_identidad-visual/logo/logo_naranja.png`, ≈4 cm) a la izquierda.
2. Filete naranja delgado (único acento).
3. Gran espacio en blanco (~⅓ de página) — el aire **es** la sofisticación.
4. Título — Space Grotesk Bold, `text.heading`, `font.size.coverTitle` (28 pt), tracking negativo.
5. Subtítulo — Calibri, `text.caption`.
6. Un pilar de marca en cursiva (uno, no los cuatro).
7. Al pie, **banda arena** (`docx.cover.band` → `surface.warmth.docx`) con fecha, proyecto y slogan.

## Variantes

- Con/sin subtítulo · con/sin proyecto en la banda · pilar configurable.
- Editorial: una foto cálida **solo** en banda, nunca tras el texto.

## Estados

- Por defecto (formal): sin foto, banda arena al pie.
- Co-branding Naane (CC217): añadir *lockup* AICS+NAANE según `naane-branding`.

## Reglas técnicas críticas

- **Fondo de página BLANCO siempre** (`surface.page.docx`). Nunca portada naranja
  a sangre; la calidez va en la banda arena.
- La banda arena va como **tabla de solo texto dentro del `Footer`** de la sección
  de portada (se ancla al pie sin depender de espaciadores frágiles).
- **Header de portada vacío explícito** (no hereda el del cuerpo) y **sin imágenes
  en el header** (bug `rId0`); el logo va en el **cuerpo**.

## Cuándo usar / cuándo no

- **Usar:** informes, propuestas, documentos formales.
- **No usar:** no aplicar fondo naranja; no meter el logo en el header; no usar
  como diapositiva (en pptx la portada sí lleva fondo de color).

## Tokens y script

`surface.page.docx`, `docx.cover.band`, `text.heading`, `font.size.coverTitle`,
`font.family.heading`. Producido por `buildCover()` + `coverFooterBand()`.
