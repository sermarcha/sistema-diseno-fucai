# Componente — Boletín

> Correo **periódico** que reúne varios contenidos en una pieza: noticias de
> territorio, avances de proyecto, convocatorias y un cierre con llamado.
> Construido sobre `plantilla.md`. Estado: **borrador**.

## Anatomía

Hereda cabecera, pie y firma de `plantilla.md`, y entre medio organiza **bloques**:

1. **Editorial breve** — 2–4 líneas que dan sentido al número, abiertas con un
   pilar o un dato (estructura de voz **Ver → Celebrar**, ver `voz-y-tono.md`).
2. **Bloques de contenido** — 3 a 5, cada uno con: título corto Space Grotesk,
   imagen opcional (con consentimiento), 2–3 líneas y **un enlace** ("Conoce
   más"). Una idea por bloque.
3. **Bloque de territorio** — al menos uno protagonizado por una comunidad, desde
   la fuerza (estructura B de `../social/post.md` adaptada a email).
4. **Cierre / CTA** — un llamado claro (donar, sumarse, leer el informe) + firma.

## Variantes

- **Mensual / trimestral** (público y aliados): foco en historias e impacto.
- **A financiadores**: más concreto y realista, cifras de impacto en cifra,
  aliados con nombre; menos editorial, más resultados.

## Reglas críticas

- **Jerarquía clara**: lo más importante arriba; el orden de bloques comunica
  prioridad.
- **Una idea y un enlace por bloque**; no apilar varios CTA por bloque.
- Imágenes con `alt` y consentimiento; contraste ≥ 4.5:1; verde solo territorio.
- Longitud razonable: mejor pocos bloques buenos que un correo interminable.
- Mismas reglas técnicas de `plantilla.md` (tablas, CSS en línea, ~600 px, fuentes
  seguras).
- Voz cercana, léxico ético, pilares en cursiva, siglas completas en primera mención.

## Cuándo usar / cuándo no

- **Usar:** resumen periódico de varias novedades a una base suscrita.
- **No usar:** para un único anuncio urgente (usa un correo de difusión simple);
  no convertirlo en un muro de texto; no enviar sin enlace de baja.

## Tokens

`brand.primary`, `brand.secondary`, `brand.territory`, `text.onColor`,
`font.family.heading`, `font.family.body`, grupo `email.*`.
