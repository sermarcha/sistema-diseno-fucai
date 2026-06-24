# Componente — Card (web/HTML/React)

> Tarjeta de contenido web. Estado: **borrador**. Mantener ligero.

## Anatomía

Contenedor sobre fondo blanco: imagen o ícono opcional, título Space Grotesk,
cuerpo Calibri, y un enlace/acción. Redondeo sutil (mismo criterio que el botón).
Agrupación por espacio en blanco, no por bordes pesados.

## Variantes

- Card de historia (con foto de comunidad) · card de dato · card de enlace.

## Estados

- Normal · hover (elevación mínima o cambio sutil de fondo `accent.soft`) · foco visible.

## Reglas críticas

- **Un foco por card**; mucho aire; proporción 60-25-10-5.
- Verde solo en cards de territorio/ambiente.
- Foto con consentimiento y texto con contraste ≥ 4.5:1 (ver `06_accesibilidad/`).
- Profundidad mínima (FUCAI es plana y sofisticada; ver `forma-y-profundidad.md`).

## Cuándo usar / cuándo no

- **Usar:** listados de historias, datos o enlaces en web.
- **No usar:** no sombras de color; no bordes pesados como recurso principal.

## Tokens

`surface.page.web`, `brand.primary`, `text.body`, `text.heading`, `accent.soft`,
`radius.sm` (4 px) o `radius.md` (8 px) para contenedores, y `elevation.sm` solo si
una elevación es imprescindible (default sin sombra). Ver
`02_identidad-visual/forma-y-profundidad.md`.
