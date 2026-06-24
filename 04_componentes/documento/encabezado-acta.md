# Componente — Encabezado de acta

> Bloque de encabezamiento para actas y documentos administrativos.
> Origen: `scripts/generators/fucai_docx.js → textHeader()` (header de cuerpo) +
> un bloque de título con `h1/h2`. Estado: **borrador** (sin builder dedicado).

## Anatomía

1. Header de cuerpo: filete naranja + texto a la derecha "Fundación Caminos de
   Identidad — FUCAI" (`textHeader()`).
2. Bloque de título: tipo de documento (Acta), número/consecutivo, fecha, lugar y
   asunto, con jerarquía `h1`/`h2` (Space Grotesk, `text.heading`).
3. Campo de **proyecto / centro de costo** como **texto abierto** (CC216, CC217,
   CC219, CC220…).

## Variantes

- Acta de reunión · acta de comité · memorando (mismo encabezado, distinto título).
- Co-branding Naane: membrete AICS+NAANE según `naane-branding`.

## Estados

- Con/sin número de consecutivo · con/sin lista de asistentes.

## Reglas técnicas críticas

- **Header de solo texto** (sin imágenes) para evitar el bug `rId0`.
- **Fondo blanco** y arquitectura de **2 secciones** (portada/cuerpo); el acta es
  contenido del cuerpo, no una sección nueva.
- Centro de costo en **campo de texto abierto**, nunca checkbox fijo.

## Cuándo usar / cuándo no

- **Usar:** actas, memorandos, comunicaciones internas formales.
- **No usar:** no incrustar logo en el header; no crear una sección por acta.

## Tokens y script

`text.heading`, `font.size.h1`/`h2`, `brand.primary` (filete). Builder dedicado:
> [Pendiente: añadir `actaHeader()` a `fucai_docx.js`. Hoy se compone con
> `textHeader()` + `h1/h2`; el skill no trae un builder específico de acta.]
