# Onboarding — Cómo usar este sistema

> Para alguien que llega nuevo (persona o herramienta agéntica). En 10 minutos:
> qué es, dónde está cada cosa y cómo producir sin romper la marca.

## Qué es

El Sistema de Diseño FUCAI es la **fuente única de verdad** de la marca de la
Fundación Caminos de Identidad. Regla de oro: **los tokens y las reglas mandan;
los documentos son derivados.** Nunca se quema un valor de marca a mano.

## Mapa rápido del repositorio

- `03_tokens/` — **empieza aquí.** Colores, tipografía y espaciado (`tokens.json`),
  su nomenclatura (`taxonomia.md`) y los temas (`temas/`).
- `01_fundamentos/` — el porqué: plataforma de marca, principios, voz, audiencias.
- `02_identidad-visual/` — logo, color, tipografía (+ archivos de fuente), espaciado,
  iconografía, fotografía, etc.
- `05_contenido-lenguaje/` — cómo se escribe: guía editorial, microcopy, **léxico ético**.
- `06_accesibilidad/` — contraste, WCAG, lenguaje inclusivo.
- `04_componentes/` — piezas reutilizables (sobre todo de documento) y su catálogo.
- `scripts/` — el motor: generadores que leen los tokens y producen los entregables.
- `skill/fucai-branding/` — copia viva de la autoridad de marca.
- `07_gobernanza/` — cómo se cambia y versiona todo esto.

## Para producir un entregable

1. Lee los tokens (`03_tokens/tokens.json`) y la ficha del componente que necesitas
   (`04_componentes/`).
2. Usa el generador correspondiente en `scripts/generators/` (no reescribas su lógica):
   - Word → `fucai_docx.js` · PowerPoint → `fucai_pptx.js` · Excel → `fucai_xlsx.py`.
3. Tras un `.docx`, corre el QA: `python3 scripts/check_fucai.py <archivo>` y revisa en PDF.
4. Aplica la voz y el **léxico ético** (`05_contenido-lenguaje/lexico-institucional.md`).

## Reglas que nunca se rompen

- Word/Docs: **fondo blanco siempre** (incluidas portadas); calidez con banda arena.
- Naranja de fondo **solo** en portadas de presentación.
- **Comunidades como protagonistas**, no receptoras; nada de "beneficiarios"/"intervenir".
- Verde **solo** para territorio/naturaleza.

## Para cambiar algo

Lee `modelo-de-gobernanza.md` y `../CONTRIBUTING.md`: todo entra por Pull Request
revisado; los cambios de tokens los aprueba el Dueño de marca.
