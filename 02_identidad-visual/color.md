# Color — FUCAI

> Narrativa y reglas de uso de la paleta. **La autoridad de los valores es
> `03_tokens/tokens.json`** (primitivos en `color.*`, semánticos en `surface.*`,
> `brand.*`, `accent.*`, `text.*`). Las tablas de valores están marcadas `[GEN]`:
> hoy se rellenan con los tokens vigentes; en el futuro un script las regenerará.

## Raíz territorial de la paleta

El color es narrativo y se usa con mesura: **naranja** = tierra, energía, fuego;
**arena** = territorios áridos de La Guajira y suelos amazónicos; **verde** = la
selva y la vida. El verde **no** es intercambiable con el naranja: aparece solo
en contextos de territorio, naturaleza y medio ambiente.

## Proporción 60-25-10-5

60 % blanco/arena · 25 % naranja · 10 % verde (solo territorio) · 5 % negro/grises.
Naranja y verde son **acentos**, nunca fondos generales. Esta proporción es lo que
hace una pieza minimalista y sofisticada a la vez (ver `01_fundamentos/principios-de-diseno.md`).

## Paleta de marca

<!-- [GEN] derivado de tokens.json (color.*) -->

| Token | Nombre | HEX | RGB | CMYK | Pantone | Rol |
|-------|--------|-----|-----|------|---------|-----|
| `color.naranja` | Naranja FUCAI | #E94513 | 233,69,19 | 0/70/92/0 | 1665 XGC | Primario |
| `color.arena` | Arena / Crema | #EDE8D3 | 237,232,211 | 0/2/11/7 | 11-0105 TPG | Secundario / calidez |
| `color.verde` | Verde Amazónico | #2D6A4F | 45,106,79 | 75/0/53/58 | 18-0135 TCX | Terciario (solo territorio) |
| `color.blanco` | Blanco | #FFFFFF | 255,255,255 | 0/0/0/0 | 11-0601 TCX | Neutro / fondo |
| `color.negro` | Negro | #000000 | 0,0,0 | 0/0/0/100 | — | Neutro / texto |

## Tintes (50 %) y sombra

<!-- [GEN] derivado de tokens.json (color.*) -->

| Token | Nombre | HEX | Uso |
|-------|--------|-----|-----|
| `color.durazno` | Naranja claro | #F4A28A | Llamadas, hover web, acentos suaves |
| `color.arena-claro` | Arena claro | #F6F3E9 | Filas alternas, cajas informativas |
| `color.verde-claro` | Verde claro | #74B597 | Secciones ambientales, badges de territorio |
| `color.naranja-oscuro` | Naranja oscuro | #C13A10 | Extremo de rampa: hover/sombra/profundidad |

## Grises de soporte (no son color de marca)

<!-- [GEN] derivado de tokens.json (color.*) -->

| Token | HEX | Uso |
|-------|-----|-----|
| `color.gris-texto` | #333333 | Texto secundario, captions, footers |
| `color.gris-borde` | #666666 | Bordes y separadores |
| `color.gris-linea` | #CCCCCC | Líneas sutiles, datos atenuados |

## Combinaciones autorizadas y contraste

<!-- [GEN] derivado de tokens.json + tabla de contraste del Manual v1.1 -->

| Fondo | Texto | Contraste | Uso |
|-------|-------|-----------|-----|
| Blanco | Negro | 21:1 | Cuerpo de texto |
| Blanco | Naranja | 3.1:1 | **Solo H1/H2 — nunca cuerpo** |
| Blanco | Verde | 5.9:1 | Títulos de secciones de territorio |
| Naranja | Blanco | 3.1:1 | **Solo encabezados grandes / portadas pptx** |
| Verde | Blanco | 5.9:1 | Secciones de impacto ambiental |
| Arena | Negro | 10.5:1 | Infografías, banners |
| Arena claro | Gris texto | 8.5:1 | Filas alternas, cajas |

Disciplina (detalle en `06_accesibilidad/estandar-accesibilidad.md`): mínimo 3:1
para títulos, 4.5:1 para cuerpo. Naranja↔blanco (3.1:1) **solo** en texto grande
en negrita. Nunca transmitir información solo por color.

## Reglas duras de superficie (ya en tokens)

- **Word/Docs: fondo de página SIEMPRE blanco**, portada y contraportada incluidas
  (`surface.page.docx`). La calidez entra por la **banda arena** (`surface.warmth.docx`),
  nunca por un fondo naranja a sangre.
- **Naranja de fondo solo en portadas/secciones/cierres de PowerPoint/Slides**
  (`surface.title.pptx`).

## Colores semánticos de estado (éxito / error / alerta)

> [Pendiente: definir como tokens los colores de estado (éxito/error/alerta) para
> interfaces. `tokens.json` **no** los define hoy, y la paleta del Manual excluye
> rojo/azul/morado/amarillo genéricos. Propuesta a validar y luego tokenizar (no
> oficial): alerta/acento de atención = naranja `brand.primary`; confirmación con
> verde **solo** si el contexto es territorial; estados neutros con grises de
> soporte. Acompañar SIEMPRE de ícono/etiqueta, nunca solo color.]

## Visualización de datos

Una serie → rampa naranja; serie de territorio → rampa verde; ejes/etiquetas →
grises. Sin azul/rojo/morado/amarillo; máx. 3 tonos por gráfico; resalta un dato
clave en naranja y atenúa el resto a `color.gris-linea`. Rampas completas en
`skill/fucai-branding/references/color-system.md`.
