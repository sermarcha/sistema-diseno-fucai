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

> [Pendiente: tokenizar duraciones (`motion.duration.*`) y curvas de easing
> (`motion.easing.*`) en `03_tokens/tokens.json`. El skill no define movimiento.
> Recomendación a validar y tokenizar (no oficial): duración corta ~150 ms y
> media ~250 ms; easing estándar (entrada/salida suave). Mantener el set mínimo.]
