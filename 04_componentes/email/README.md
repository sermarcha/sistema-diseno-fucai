# Componentes de email / mailing — FUCAI

> Familia de componentes para **correo electrónico**: correo institucional,
> boletín y campañas de mailing. Plataforma nueva en el sistema (antes solo había
> documento, presentación, AppSheet, social y web). Estado: **borrador**.

## Por qué email es su propia familia

El correo no se renderiza como un documento ni como una web normal: los clientes
(Gmail, Outlook, Apple Mail) tienen un **soporte de HTML/CSS limitado y desigual**.
Por eso email tiene reglas técnicas propias y, idealmente, **tokens propios**
(ancho máximo, fuentes seguras de cliente de correo) para no quemar valores a mano
—fiel a la regla de oro del sistema—.

## Fichas

| Ficha | Qué es |
|-------|--------|
| `plantilla.md` | Estructura base de un correo FUCAI (cabecera, cuerpo, pie, firma). |
| `boletin.md` | Boletín periódico: varios bloques de contenido en una sola pieza. |
| `campana-mailing.md` | Guía de campaña: segmentación, asunto, preheader, CTA, frecuencia, métricas y cumplimiento. |

## Qué referencia esta familia (no lo redefine)

- **Voz y tono** → `01_fundamentos/voz-y-tono.md`. En email pesa lo **cercano**:
  apertura "Hola, [nombre]: te escribimos desde el equipo de FUCAI para…"; cierre
  "Seguimos caminando juntos. Un abrazo desde la periferia, [nombre]."
- **Léxico ético** → `05_contenido-lenguaje/lexico-institucional.md` (manda siempre).
- **Microcopy y CTA** → `05_contenido-lenguaje/microcopy.md` (verbos directos,
  nada de "Haz clic aquí").
- **Audiencias** → `01_fundamentos/audiencias.md` (el tono cambia por público).
- **Color, tipografía, proporción, logo** → `03_tokens/tokens.json` y
  `02_identidad-visual/logo/` (autoridad).
- **Contraste y accesibilidad** → `06_accesibilidad/`.

## Grupo de tokens `email.*` (ya creado en `03_tokens/tokens.json`)

Para no escribir medidas a mano, el grupo de componente `email.*` vive en
`tokens.json` (nivel 3, referencia a semánticos; regla de cadena del sistema):

- `email.maxWidth` — ancho máximo del cuerpo: **600 px**, diseño de una columna.
- `email.font.heading` → `{font.family.heading}` y `email.font.body` →
  `{font.family.body}`. Estas familias **ya incluyen fallback seguro de email**
  (Space Grotesk → Arial Black/Arial; Calibri → Carlito/Arial), así que no se
  duplican: el correo reusa las fuentes de marca con su degradado.
- `email.button.bg` → `{brand.primary}` · `email.button.text` → `{text.onColor}`.

> [Pendiente: elegir la herramienta de envío oficial (p. ej. Mailchimp, Brevo,
> Acumbamail) y validar el texto legal de tratamiento de datos antes de pasar
> estas fichas de borrador a estable.]
