# Componente — Pie naranja (contraportada)

> Barra naranja delgada al pie de la contraportada, con la URL en blanco.
> Generador: `scripts/generators/fucai_docx.js → backFooterBar()`. Estado: **estable**.

## Anatomía

Tabla de una celda, ancho completo, fondo `brand.primary` (naranja), altura ~8 mm,
con la URL `www.fucaicolombia.org` centrada en blanco (`text.onColor`).

## Variantes

- URL sola (por defecto) · URL + redes (a definir).
- El pie de **cuerpo** es distinto: filete naranja + firma + número de página (`standardFooter()`).

## Estados

Altura mínima fija (`HeightRule.ATLEAST`) para anclarse al pie.

## Reglas técnicas críticas

- Es **barra delgada**, **nunca** una contraportada naranja completa (el fondo
  sigue blanco, `surface.page.docx`).
- Va dentro del `Footer` de la sección de contraportada, como **tabla de solo texto**.
- Contraste naranja↔blanco (3.1:1): válido aquí por ser etiqueta corta/grande, no cuerpo.

## Cuándo usar / cuándo no

- **Usar:** al pie de la contraportada.
- **No usar:** no como fondo general; no para texto de cuerpo sobre naranja.

## Tokens y script

`brand.primary`, `text.onColor`. Producido por `backFooterBar()`.
