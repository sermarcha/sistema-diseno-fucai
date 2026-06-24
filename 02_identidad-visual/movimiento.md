# Movimiento — FUCAI

> Transiciones y animación. **Solo web/AppSheet.** Ligero: el movimiento sirve a
> la claridad, nunca decora. Coherente con una marca minimalista y sofisticada.

## Principios

- **Discreto y con propósito:** anima para orientar (aparición de contenido,
  cambio de estado), no para llamar la atención.
- **Rápido:** transiciones breves; nada que haga esperar al usuario.
- **Respeta la accesibilidad:** honra `prefers-reduced-motion` y reduce o elimina
  la animación cuando el sistema lo pide (ver `06_accesibilidad/`).
- Sin rebotes exagerados ni parpadeos; una sola transición por interacción.

## Valores

Tokenizados en `03_tokens/tokens.json` (`motion.*`). El Manual no define movimiento;
estos son los defaults minimalistas del sistema. Mantener el set mínimo.

<!-- [GEN] derivado de tokens.json (motion.duration.*) -->

| Token | Valor | Uso |
|-------|-------|-----|
| `motion.duration.fast` | 150 ms | Microinteracciones (hover, foco) |
| `motion.duration.base` | 250 ms | Transiciones de contenido/estado |

<!-- [GEN] derivado de tokens.json (motion.easing.*) -->

| Token | Curva (cubic-bezier) | Uso |
|-------|----------------------|-----|
| `motion.easing.standard` | 0.2, 0, 0, 1 | Default (entrada/salida equilibrada) |
| `motion.easing.in` | 0.4, 0, 1, 1 | Acelera al salir |
| `motion.easing.out` | 0, 0, 0.2, 1 | Desacelera al entrar |

Con `prefers-reduced-motion`, reducir o eliminar la animación.
