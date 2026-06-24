# Forma y profundidad — FUCAI

> Radios de borde y elevación. **Acotado a web/AppSheet** (los documentos y la
> impresión son planos, sin sombras). Ligero por diseño: FUCAI es minimalista y
> sofisticada, con poca o nula profundidad.

## Forma (radios de borde)

- **Botones: radio 4 px** (skill `references/web.md`). Esquinas levemente
  redondeadas, nunca pastilla completa ni cuadrado duro.
- Tarjetas/contenedores: redondeo sutil y consistente; mismo criterio que botones.

## Profundidad (elevación)

- **Mínima.** La jerarquía se logra con espacio en blanco y color de acento, no
  con sombras (principios `01_fundamentos/principios-de-diseno.md`).
- Si una sombra es imprescindible (p. ej. menú flotante en AppSheet): una sola
  elevación sutil, gris de soporte, sin sombras de color.

> [Pendiente: tokenizar radios (`radius.*`) y elevaciones (`shadow.*`) en
> `03_tokens/tokens.json`. Hoy solo existe el valor de radio 4 px documentado en
> el skill; conviene formalizarlo como token junto a 1–2 niveles de sombra.]
