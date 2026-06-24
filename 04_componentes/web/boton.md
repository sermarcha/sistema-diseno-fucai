# Componente — Botón (web/HTML/React)

> Botón de interfaz web. Minoría dentro del sistema (FUCAI es sobre todo
> documentos). Estado: **borrador**. Mantener ligero.

## Anatomía / variantes

- **Primario:** fondo `brand.primary` (naranja), texto `text.onColor` (blanco),
  radio 4 px.
- **Secundario:** borde naranja, fondo transparente, texto naranja.
- **Enlace:** naranja, sin subrayado en normal, subrayado en hover.

## Estados

- Normal · hover (naranja claro `accent.soft`/`color.durazno`) · foco (anillo
  visible, contraste ≥ 3:1) · deshabilitado (gris de soporte).

## Reglas críticas

- Texto de acción con verbo directo ("Conoce nuestro trabajo", "Súmate"), nunca
  "Haz clic aquí" (ver `05_contenido-lenguaje/microcopy.md`).
- **Foco visible** por teclado; objetivo táctil cómodo (ver `06_accesibilidad/`).
- Contraste: naranja↔blanco (3.1:1) válido en botón grande/negrita; verificar tamaño.

## Cuándo usar / cuándo no

- **Usar:** acciones en web/artefactos.
- **No usar:** no como elemento dominante; no pastilla completa ni cuadrado duro.

## Tokens

`brand.primary`, `text.onColor`, `accent.soft`. Radio 4 px:
> [Pendiente: tokenizar el radio (`radius.*`) en `tokens.json` — ver `02_identidad-visual/forma-y-profundidad.md`.]
