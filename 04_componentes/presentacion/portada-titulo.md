# Componente — Portada de presentación

> Diapositiva de apertura/sección/cierre. **Aquí SÍ aplica fondo naranja** (a
> diferencia de Word). Generador: `scripts/generators/fucai_pptx.js → titleSlide()`
> / `sectionSlide()` / `closingSlide()`. Estado: **estable**.

## Anatomía

Fondo de color completo (`pptx.titleSlide.bg` → `surface.title.pptx`, naranja por
defecto; verde para mazos de territorio; negro alternativo) + `logo_blanco.png` +
título Space Grotesk blanco (36–44 pt) + subtítulo + un pilar en cursiva + URL.

## Variantes

- Portada (título) · divisoria de sección (título + pilar) · cierre (logo + slogan + contacto).
- Fondo: naranja (general), verde (territorio), negro (alto contraste).

## Estados

- Con/sin subtítulo · pilar configurable.

## Reglas técnicas críticas

- Fondo de color **solo en portada/sección/cierre**; las de contenido van blancas.
- Sobre fondo de color, usar `logo_blanco.png` y texto blanco (`text.onColor`).
- Contraste naranja↔blanco válido por ser título grande, no cuerpo.

## Cuándo usar / cuándo no

- **Usar:** aperturas y cierres de presentación.
- **No usar:** no replicar el fondo naranja en Word; no para slides de contenido.

## Tokens y script

`pptx.titleSlide.bg`, `surface.title.pptx`, `text.onColor`, `font.family.heading`.
Producido por `titleSlide()` / `sectionSlide()` / `closingSlide()`.
