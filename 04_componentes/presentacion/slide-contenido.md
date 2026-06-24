# Componente — Slide de contenido

> Diapositiva de contenido: blanca y minimalista. Generador:
> `scripts/generators/fucai_pptx.js → contentSlide()`. Estado: **estable**.

## Anatomía

Fondo blanco + barra naranja delgada arriba (`brand.primary`) + `logo_naranja.png`
pequeño arriba a la derecha + título Space Grotesk naranja (26–32 pt) + cuerpo
Calibri negro + **barra arena al pie** (`surface.section.pptx`) con la firma.

## Variantes

- Texto · dato héroe (cifra Space Grotesk 36–60 pt) · cita (Calibri itálica 16–18 pt).

## Estados

- Con/sin imagen (una imagen fuerte, no collage).

## Reglas técnicas críticas

- **Máximo 6 líneas** de cuerpo por slide; un elemento focal.
- Verde solo en contenido de territorio/ambiente.
- No transmitir información solo por color (añadir etiqueta/ícono).

## Cuándo usar / cuándo no

- **Usar:** todo el contenido entre portada y cierre.
- **No usar:** no saturar de texto; no fondo de color en slides de contenido.

## Tokens y script

`surface.page.web`/blanco, `brand.primary` (barra), `surface.section.pptx` (pie),
`text.body`. Producido por `contentSlide()`.
