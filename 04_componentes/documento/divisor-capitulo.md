# Componente — Divisor de capítulo

> Página/bloque que separa secciones largas dentro de un documento.
> Origen: tabla de ancho completo dentro del cuerpo. Estado: **borrador**.

## Anatomía

Bloque de ancho completo (tabla de una celda) con: número/título de capítulo en
Space Grotesk (`text.heading`), opcionalmente un pilar en cursiva, sobre fondo
blanco o banda arena de acento. Mucho aire alrededor (un solo elemento focal).

## Variantes

- Solo título · título + pilar · con banda arena de acento (no naranja a sangre).

## Estados

- Con/sin numeración de capítulo.

## Reglas técnicas críticas

- **Se implementa como tabla de ancho completo DENTRO del cuerpo, NO como una
  sección nueva.** Una sección por capítulo genera múltiples footers XML y Word
  marca el archivo como malformado (arquitectura de **2 secciones**).
- **Fondo blanco**; si se usa color, banda arena de acento, nunca página naranja.
- Si el título es muy grande (> ~60 pt), usar `lineRule: "atLeast"` para evitar solape.

## Cuándo usar / cuándo no

- **Usar:** documentos largos con capítulos.
- **No usar:** **nunca** como sección nueva; no como fondo naranja.

## Tokens y script

`text.heading`, `surface.warmth.docx` (acento opcional), `font.family.heading`.
Builder dedicado:
> [Pendiente: añadir `chapterDivider()` a `fucai_docx.js` que inserte la tabla de
> ancho completo en el cuerpo. Hoy se construye a mano siguiendo esta regla.]
