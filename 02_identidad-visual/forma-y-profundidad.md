# Forma y profundidad — FUCAI

> Radios de borde y elevación. **Acotado a web/AppSheet** (los documentos y la
> impresión son planos, sin sombras). Ligero por diseño: FUCAI es minimalista y
> sofisticada, con poca o nula profundidad.

## Forma (radios de borde)

Esquinas levemente redondeadas, nunca pastilla completa ni cuadrado duro. El radio
de marca (`radius.sm` = 4 px) viene del Manual (§6.4) y aplica a botones y tarjetas.

<!-- [GEN] derivado de tokens.json (radius.*) -->

| Token | Valor | Uso |
|-------|-------|-----|
| `radius.none` | 0 px | Sin redondeo |
| `radius.sm` | 4 px | **Radio de marca**: botones y tarjetas |
| `radius.md` | 8 px | Contenedores grandes (opcional) |

## Profundidad (elevación)

**Mínima.** La jerarquía se logra con espacio en blanco y color de acento, no con
sombras (`01_fundamentos/principios-de-diseno.md`). El **default es SIN sombra**;
solo si es imprescindible (p. ej. menú flotante en AppSheet) se usa una única
elevación sutil, en gris de soporte, **nunca de color**.

<!-- [GEN] derivado de tokens.json (elevation.*) -->

| Token | Sombra (color · offset Y · blur) | Uso |
|-------|----------------------------------|-----|
| (sin token) | ninguna | Default — superficies planas |
| `elevation.sm` | `color.gris-linea` (#CCCCCC) · 1 px · 3 px | Única elevación permitida (flotantes) |
