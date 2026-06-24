# Componente — Tabla de firmas

> Bloque de firmas para actas, contratos y documentos administrativos.
> Origen: primitivas de tabla del estilo FUCAI. Estado: **borrador** (sin builder dedicado).

## Anatomía

Tabla minimalista (solo filetes horizontales, sin líneas verticales) con filas por
firmante: nombre, cargo/rol, organización y espacio de firma. Encabezados en
`docx.tableHeader.bg` (naranja) con texto blanco; márgenes de celda generosos.

## Variantes

- 2 firmantes (bilateral) · n firmantes (comité) · con/sin fecha por firma.

## Estados

- Campos de identificación (cargo, organización, **centro de costo**) en **texto abierto**.

## Reglas técnicas críticas

- **Campos abiertos**, **nunca checkboxes fijos** para proyecto/centro de costo
  (CC219, CC220…): los proyectos cambian.
- Tabla con **solo filetes horizontales** (sin grilla completa), coherente con el
  estilo de `dataTable()`.
- Es contenido del **cuerpo** (no sección nueva); fondo blanco.

## Cuándo usar / cuándo no

- **Usar:** cierre de actas y documentos que requieren firma.
- **No usar:** no convertir los campos en casillas fijas; no usar líneas verticales.

## Tokens y script

`docx.tableHeader.bg`, `text.onColor`, `color.gris-linea` (filete). Builder dedicado:
> [Pendiente: añadir `signatureTable()` a `fucai_docx.js`. Hoy se arma con las
> primitivas de tabla; el skill no trae un builder de firmas.]
