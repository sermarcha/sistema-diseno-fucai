# Tipografía — FUCAI

> Reglas de uso tipográfico. Familias, tamaños y pesos son autoridad de
> `03_tokens/tokens.json` (grupo `font`). Archivos de fuente y procedencia en
> `tipografia/FUENTES.md`. Tablas de valores marcadas `[GEN]`.

## Dos fuentes, una identidad

- **Titulares: Space Grotesk Bold.** Solo títulos y encabezados; nunca cuerpo,
  tablas, captions ni footers. Respaldo: Arial Black.
- **Cuerpo: Calibri.** Sustituto métrico idéntico **Carlito** (Canva o donde no
  haya Calibri). En **AppSheet**, sustituto **Roboto** para titulares.
- **Logo: Futura PT Demi** (solo en el archivo del logo, no se sustituye).

Máximo **dos fuentes por documento**.

## Familias (tokens)

<!-- [GEN] derivado de tokens.json (font.family) -->

| Token | Valor (familia + respaldos) |
|-------|------------------------------|
| `font.family.heading` | Space Grotesk, Arial Black, sans-serif |
| `font.family.body` | Calibri, Carlito, Arial, sans-serif |
| `font.family.logo` | Futura PT Demi |

## Pesos (tokens)

<!-- [GEN] derivado de tokens.json (font.weight) -->

| Token | Valor |
|-------|-------|
| `font.weight.regular` | 400 |
| `font.weight.bold` | 700 |

Archivos provistos: `SpaceGrotesk-Regular.ttf` (400), `-Medium.ttf` (500),
`-Bold.ttf` (700) y sus `.woff2` web.

## Escala modular — Word / PDF

<!-- [GEN] derivado de tokens.json (font.size, en pt) -->

| Rol | Token | Tamaño | Color | Peso |
|-----|-------|--------|-------|------|
| Título portada | `font.size.coverTitle` | 28 pt | Naranja sobre blanco | Bold |
| H1 | `font.size.h1` | 22 pt | Naranja (o blanco sobre barra) | Bold |
| H2 | `font.size.h2` | 16 pt | Naranja | Bold |
| H3 | `font.size.h3` | 13 pt | Negro | Bold |
| Cuerpo | `font.size.body` | 11 pt | Negro | Regular |
| Caption | `font.size.caption` | 9 pt | Gris texto | Italic |
| Footer | `font.size.footer` | 8 pt | Gris borde | Italic |

> [Pendiente: la escala documentada cubre portada/H1/H2/H3/cuerpo. Para una
> jerarquía completa **H1–H6** (web), definir H4–H6 como tokens. Recomendación a
> tokenizar: H4 ≈ H3, H5/H6 como variantes en mayúscula/etiqueta sobre cuerpo.]

## Interlineado y tracking

<!-- [GEN] derivado de tokens.json (font.lineHeight, font.tracking) -->

| Token | Valor | Uso |
|-------|-------|-----|
| `font.lineHeight.tight` | 1.15 | Mínimo de cuerpo |
| `font.lineHeight.body` | 1.3 | Recomendado de cuerpo |
| `font.tracking.display` | −0.02 | Títulos > 40 pt (−1 a −2 %) |

## Reglas tipográficas

1. Space Grotesk **solo** en títulos/encabezados.
2. Sin subrayado en cuerpo (reservado a hipervínculos).
3. Cursivas solo: citas, nombres científicos, palabras en lengua indígena (1ª
   mención), pilares y slogan.
4. **Nunca más de 4 palabras seguidas en mayúsculas.**
5. Alineación de cuerpo: justificada o a la izquierda; centrado solo en portadas.
6. Tras un título: ≥ 12 pt de espaciado (ver `espaciado-y-layout.md`).

## Fuentes de respaldo (web)

Titulares: cargar **Space Grotesk** (`tipografia/*.woff2`) o Google Fonts; respaldo
Arial Black/sans-serif. Cuerpo: Calibri/Carlito si se cargan, o el sans nativo del
sistema. Tracking levemente negativo en H1 grandes.
