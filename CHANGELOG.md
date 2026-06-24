# Changelog

Todas las modificaciones notables de este repositorio se documentan aquí.
El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y el versionado es [Semántico](https://semver.org/lang/es/) (MAJOR.MINOR.PATCH):

- **MAJOR** — cambios que rompen la compatibilidad de los tokens o la taxonomía.
- **MINOR** — nuevos tokens, temas, componentes o capas, compatibles hacia atrás.
- **PATCH** — correcciones de valores, documentación o andamiaje.

## [No publicado]

### Por hacer
- Poblar las capas 04 (componentes) y 07 (gobernanza) (fases 4–5).
- Poblar `02_identidad-visual/iconos/` con los `.svg` y añadir el `.otf` de Space Grotesk.
- Implementar los generadores en `scripts/generators/` y el comando `npm run build`.
- Confirmar contra el Manual de Identidad los valores provisionales de la
  submarca Tienda FUCAI (terracota y ocre) en `03_tokens/temas/tienda-fucai.json`.
- Resolver los marcadores `> [Pendiente: …]` de la capa estratégica (misión,
  visión, valores, arquetipo, posicionamiento formal) con dirección.

## [0.3.0] — 2026-06-24

### Añadido
- **Identidad visual (`02_identidad-visual/`)**: `logo/manual-de-logo.md`,
  `color.md`, `tipografia.md`, `espaciado-y-layout.md`, `iconografia.md`,
  `fotografia.md`, `ilustracion.md`, `forma-y-profundidad.md`, `movimiento.md`.
  Las tablas de valores se marcan `<!-- [GEN] derivado de tokens.json -->` y se
  rellenan con los tokens vigentes (no se quemaron HEX/tamaños a mano fuera de ellas).
- **Fuentes Space Grotesk** en `02_identidad-visual/tipografia/` (Git LFS):
  `SpaceGrotesk-{Regular,Medium,Bold}.ttf` (escritorio) + `.woff2` latin y
  latin-ext (web), con `FUENTES.md` de procedencia y licencia OFL.
- **Accesibilidad (`06_accesibilidad/`)**: `estandar-accesibilidad.md`
  (WCAG 2.2 AA, contraste cruzado con tokens) y `lenguaje-inclusivo.md`
  (eje ético: comunidades protagonistas).
- `*.ttf` añadido a las reglas de Git LFS en `.gitattributes`.

### Nota
- Los `.otf` originales de Space Grotesk no se descargaron: el entorno bloquea
  `raw.githubusercontent.com`. Se entregan `.ttf`/`.woff2` auténticos desde la
  distribución de Google Fonts; el `.otf` queda como `[Pendiente]` con instrucciones.

## [0.2.0] — 2026-06-24

### Añadido
- **Capa estratégica (`01_fundamentos/`)**: `plataforma-de-marca.md`,
  `principios-de-diseno.md`, `voz-y-tono.md`, `audiencias.md`.
- **Capa de contenido y lenguaje (`05_contenido-lenguaje/`)**: `guia-editorial.md`,
  `microcopy.md`, `lexico-institucional.md`, `localizacion.md`.
- Cada archivo es una plantilla estructurada con datos reales de FUCAI donde
  existen y marcadores `> [Pendiente: …]` donde el skill no aporta contenido
  oficial (no se inventó misión, visión, valores ni arquetipo).

### Cambiado
- Eliminados los `.gitkeep` de `01_fundamentos/` y `05_contenido-lenguaje/` al
  quedar pobladas.

## [0.1.0] — 2026-06-24

### Añadido
- **Scaffolding inicial** del sistema de diseño FUCAI.
- Repositorio git inicializado con rama `main`.
- Archivos de raíz: `README.md`, `CHANGELOG.md`, `CONTRIBUTING.md`,
  `.gitattributes` (Git LFS), `.gitignore`, `package.json`, `requirements.txt`.
- Árbol completo de las 7 capas con `.gitkeep` en las carpetas vacías.
- **Fuente de verdad poblada:** `03_tokens/tokens.json` en formato W3C Design
  Tokens con tres niveles (primitivos, semánticos por superficie, de componente),
  más tokens tipográficos y de espaciado.
- `03_tokens/taxonomia.md` con la nomenclatura, los alias y la regla de scope
  por plataforma.
- Cuatro temas con claves idénticas: `claro.json`, `oscuro.json`,
  `tienda-fucai.json` y `cobranding-naane.json`.
- Copia viva del skill institucional en `skill/fucai-branding/`.
- Logos `logo_naranja.png` y `logo_blanco.png` en `02_identidad-visual/logo/`.
