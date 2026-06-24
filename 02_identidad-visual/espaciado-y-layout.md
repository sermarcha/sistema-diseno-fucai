# Espaciado y layout — FUCAI

> El espaciado es el **motor del minimalismo**. Valores: autoridad de
> `03_tokens/tokens.json` (`space.*`, `layout.*`). Tablas marcadas `[GEN]`.

## Escala de espaciado (base 8)

<!-- [GEN] derivado de tokens.json (space.*, en pt) -->

| Token | Valor | Talla |
|-------|-------|-------|
| `space.xs` | 4 pt | — |
| `space.sm` | 8 pt | **unidad base** |
| `space.md` | 12 pt | — |
| `space.lg` | 16 pt | — |
| `space.xl` | 24 pt | — |
| `space.2xl` | 32 pt | — |
| `space.3xl` | 48 pt | — |

Escala única **4 · 8 · 12 · 16 · 24 · 32 · 48**. En docx-js, `spacing` va en
veinteavos de punto (pt × 20). Se agrupa con espacio en blanco, no con cajas ni
bordes.

## Márgenes de página (print)

<!-- [GEN] derivado de tokens.json (layout.margin) -->

| Token | Valor | Formato |
|-------|-------|---------|
| `layout.margin.a4` | 2.5 cm | A4 |
| `layout.margin.letter` | 1 in | Carta |

Márgenes consistentes en todo el documento. **Un elemento focal** por página o
diapositiva; si compite, se divide.

## Composición para documentos (Word/PDF)

- **Portada (blanca):** logo naranja (≈4 cm) arriba a la izquierda · filete naranja
  · gran espacio en blanco (~⅓ de página) · título · subtítulo · un pilar en
  cursiva · al pie, **banda arena** (`surface.warmth.docx`) con fecha/proyecto/slogan.
- **Cuerpo:** encabezado de solo texto + filete naranja; pie con filete naranja,
  firma y número de página. Fondo blanco siempre.
- **Contraportada (blanca):** logo naranja centrado · slogan en cursiva · contacto
  · **barra naranja delgada al pie** (≈8 mm) con la URL en blanco.
- 2–3 secciones por documento (portada/cuerpo/contraportada), nunca una por capítulo.

## Composición para presentaciones

Patrón "sándwich": portada (fondo color) → contenido (blanco, barra naranja arriba,
barra arena al pie, máx. 6 líneas) → dato/cita → divisoria de sección → cierre.

## Grilla, contenedores y breakpoints (web/AppSheet)

- Grilla y mucho aire entre bloques; un foco por sección.
- **Botones:** radio 4 px (skill `references/web.md`).

> [Pendiente: tokenizar la grilla de columnas, anchos de contenedor y breakpoints
> responsive (móvil/tablet/escritorio) para web/AppSheet, y el radio de 4 px. El
> skill no los define como sistema; deben crearse como tokens en una fase futura.]
