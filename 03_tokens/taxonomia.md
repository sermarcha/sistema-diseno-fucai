# Taxonomía de tokens — Sistema de Diseño FUCAI

`tokens.json` es la **fuente única de verdad**. Este documento explica cómo se
nombran los tokens, cómo funcionan los alias (referencias) y por qué el alcance
por plataforma es parte de la marca, no un detalle de implementación.

## Formato

[W3C Design Tokens](https://www.designtokens.org/). Cada token es un objeto con:

- `$value` — el valor, o una **referencia** a otro token entre llaves: `{color.naranja}`.
- `$type` — el tipo (`color`, `dimension`, `fontFamily`, `fontWeight`, `number`).
  Puede declararse a nivel de grupo y heredarse.
- `$description` — opcional, explica el uso y las reglas duras.

Los grupos (objetos anidados) forman la ruta del token. El nombre de referencia
es la ruta de claves separada por puntos: el token `docx` dentro del grupo
`surface > page` se referencia como `{surface.page.docx}`.

## Los tres niveles

```
NIVEL 1 — PRIMITIVOS      color.naranja = "#E94513"        (valor crudo)
   ▲ referenciado por
NIVEL 2 — SEMÁNTICOS      brand.primary = "{color.naranja}" (significado + scope)
   ▲ referenciado por
NIVEL 3 — DE COMPONENTE   appsheet.primary = "{brand.primary}" (mapeo a plataforma)
```

1. **Primitivos** (`color.*`): los únicos valores hex literales del sistema. Una
   sola lista; cambiar un primitivo se propaga a todo lo que lo referencia.
2. **Semánticos** (`surface.*`, `brand.*`, `accent.*`, `text.*`): dan significado
   y **codifican las reglas duras**. Nunca contienen un hex; siempre referencian
   un primitivo.
3. **De componente** (`docx.*`, `pptx.*`, `appsheet.*`): el contrato final que
   consume cada generador. Referencian semánticos (o, excepcionalmente, otro
   token de componente), nunca un primitivo directo ni un hex.

Las **rampas de visualización de datos** viven en `dataviz.ramp.*` (naranja, verde
y neutral, 7 pasos cada una, índice 1→7 de oscuro a claro). Son de nivel componente:
cada paso referencia un primitivo de `color.*`. La rampa verde es **exclusiva de
territorio/naturaleza**. Las consumen los generadores vía `lib/tokens` (`RAMP_ORANGE`,
`RAMP_GREEN`, `RAMP_NEUTRAL`).

**Regla de cadena:** componente → semántico → primitivo. No se salta hacia
arriba (un componente no apunta a un primitivo) ni se baja un hex a un semántico.

## Nomenclatura

- Grupos y tokens en `camelCase` o palabras en minúscula; los primitivos de
  color admiten guion para tintes y soportes: `arena-claro`, `naranja-oscuro`,
  `gris-texto`.
- Estructura jerárquica `categoria > [subcategoria] > variante`:
  `surface.page.docx`, `font.size.h1`, `space.xl`.
- Escala de espaciado por talla: `xs sm md lg xl 2xl 3xl` (base 8 pt).
- Escala tipográfica por rol: `coverTitle h1 h2 h3 body caption footer`.

## Alias (referencias)

Un alias es un `$value` que apunta a otro token: `"{color.naranja}"`. Resolverlo
es seguir la cadena hasta el primitivo. Beneficio: un solo punto de cambio. Si
mañana el naranja institucional cambia, se edita `color.naranja` y se
re-propaga a `brand.primary`, `surface.title.pptx`, `docx.h1.color`, etc.

## Regla de scope por plataforma (clave)

El **sufijo de plataforma** de un token semántico de superficie no es decorativo:
es una **regla dura de marca** sobre dónde es legítimo un color de fondo.

| Token | Plataforma | Regla que codifica |
|-------|-----------|--------------------|
| `surface.page.docx` → blanco | Word/Docs | Fondo de página SIEMPRE blanco, portada y contraportada incluidas. |
| `surface.warmth.docx` → arena | Word/Docs | La calidez va en bandas/secciones, NUNCA en el fondo. |
| `surface.title.pptx` → naranja | Presentaciones | Naranja de fondo SOLO en portadas/secciones/cierres de pptx. |
| `surface.section.pptx` → arena | Presentaciones | Banda arena para barras de sección y footers. |
| `surface.page.web` → blanco | Web | Lienzo base blanco por default. |

Por eso no existe un genérico `surface.title` sin plataforma: poner naranja a
sangre es correcto en una portada de PowerPoint y prohibido en Word. El scope
hace que esa diferencia sea explícita y verificable, no un criterio humano.

## Extensión del tipo `dimension` (pt, cm, in)

El borrador W3C define `dimension` con unidades `px`/`rem` (contexto pantalla).
FUCAI produce sobre todo documentos de oficina e impresión, así que **extendemos**
el tipo a `pt` (tipografía y espaciado), `cm` y `in` (márgenes). El valor sigue
siendo un objeto `{ "value": <número>, "unit": "pt" | "cm" | "in" }`, legible por
máquina. Los generadores convierten a la unidad nativa de cada plataforma (p. ej.
docx-js usa veinteavos de punto: pt × 20).

## Temas (`temas/*.json`)

Cada tema es una **paleta resuelta** con **exactamente las mismas claves**; solo
cambian los valores. Permite reusar un mismo componente con distinta piel.

- `claro.json` — tema por defecto; coincide con la paleta institucional base.
- `oscuro.json` — modo oscuro: fondo negro, texto arena (Manual v1.1).
- `tienda-fucai.json` — submarca comercial. Por decisión del dueño de marca
  (FUCAI, 2026-06) usa la **misma paleta que FUCAI**; no tiene subpaleta propia.
- `cobranding-naane.json` — proyecto CC217 (AICS/OIKOS): hereda la paleta FUCAI;
  la diferencia es el *lockup* de financiador y los logos (skill `naane-branding`),
  no el color.

> Nota: la submarca Tienda usa la paleta FUCAI por decisión del dueño de marca
> (FUCAI, 2026-06); se descartaron los valores provisionales de terracota y ocre.

## Reglas innegociables de la taxonomía

1. Ningún hex literal fuera de `color.*` en `tokens.json`.
2. Los semánticos solo referencian primitivos; los de componente solo referencian
   semánticos.
3. Todos los temas comparten el mismo conjunto de claves.
4. Cambiar un primitivo o una regla de scope es un cambio revisado por el
   Guardián de marca (ver `CONTRIBUTING.md`).

## Tokens reservados (definidos, aún sin consumidor)

Estos tokens existen para consumidores futuros y todavía no se referencian en
documentos ni generadores; son válidos y parte del contrato (no son huecos):
`accent.territorySoft`, `text.footer`, `docx.tableHeader.text`, `pptx.titleSlide.text`,
`appsheet.accent`.
