# Changelog

Todas las modificaciones notables de este repositorio se documentan aquí.
El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y el versionado es [Semántico](https://semver.org/lang/es/) (MAJOR.MINOR.PATCH):

- **MAJOR** — cambios que rompen la compatibilidad de los tokens o la taxonomía.
- **MINOR** — nuevos tokens, temas, componentes o capas, compatibles hacia atrás.
- **PATCH** — correcciones de valores, documentación o andamiaje.

## [No publicado]

### Por hacer
- Poblar `02_identidad-visual/iconos/` con los `.svg` y añadir el `.otf` de Space Grotesk.
- Completar `scripts/build-skill.js` (compilador pleno: regenerar tablas [GEN] y empaquetar el `.skill`).
- Tokenizar la grilla de columnas y los breakpoints responsive (web/AppSheet).
- Resolver las decisiones de marca pendientes: posicionamiento formal, arquetipo,
  personalidad (opcional) y la URL del repositorio. Color, forma y movimiento ya
  están tokenizados (v1.2.0–v1.3.0).
- Definir el posicionamiento formal y el arquetipo de marca (misión, visión y
  valores ya cargados en v1.1.0).

## [1.3.0] — 2026-06-24

Tokeniza **forma y movimiento** (web/AppSheet), resolviendo los `[Pendiente]` de
`forma-y-profundidad.md`, `movimiento.md`, `web/boton.md` y `web/card.md`.

### Añadido
- Grupos en `03_tokens/tokens.json`:
  - `radius.*` — `none` (0), `sm` (4 px, **radio de marca** del Manual §6.4),
    `md` (8 px, contenedores).
  - `elevation.sm` — única sombra sutil (gris `color.gris-linea`, sin color);
    el default es **sin sombra**.
  - `motion.duration.*` — `fast` (150 ms), `base` (250 ms); `motion.easing.*` —
    `standard`/`in`/`out` (cubic-bezier).
- Tablas `[GEN]` de radius, elevation, duration y easing en
  `forma-y-profundidad.md` y `movimiento.md`; `build-skill.js` las detecta.

### Cambiado
- `web/boton.md` y `web/card.md` referencian `radius.*`, `elevation.sm` y `motion.*`
  (antes `[Pendiente]`).
- `espaciado-y-layout.md`: el radio deja de figurar como pendiente (ya tokenizado).

### Nota
- `radius.sm` (4 px) proviene del Manual §6.4; elevación y movimiento son defaults
  minimalistas del sistema (el Manual no los define), coherentes con la filosofía
  plana de FUCAI.

### Verificado
- Todas las referencias resuelven; los 4 temas conservan claves idénticas; las
  tablas `[GEN]` coinciden con los tokens; los generadores corren y `check_fucai.py`
  da PASS.

## [1.2.0] — 2026-06-24

Completa la cobertura de color del Manual: tokeniza las rampas de visualización de
datos —incluida la **rampa verde** de territorio— que antes solo vivían en el skill.

### Añadido
- **9 primitivos de color faltantes** en `03_tokens/tokens.json` (pasos de rampa
  naranja: `naranja-medio`, `durazno-claro`, `naranja-niebla`; pasos de rampa verde:
  `verde-oscuro`, `verde-medio`, `verde-palido`, `verde-niebla`; grises `gris-medio`
  #999999 y `gris-relleno` #E8E8E8). La paleta del Manual v1.1 queda **completa**.
- Grupo **`dataviz.ramp.*`**: rampas naranja (serie general), verde (**solo
  territorio/naturaleza**) y neutral (ejes/etiquetas), 7 pasos cada una, que
  referencian primitivos (ningún hex repetido a mano).
- `lib/tokens.js` y `lib/tokens.py` exponen `RAMP_ORANGE`/`RAMP_GREEN`/`RAMP_NEUTRAL`;
  `scripts/build-skill.js` las incluye en las constantes de marca.
- `02_identidad-visual/color.md`: tabla `[GEN]` de las tres rampas; grises
  `gris-medio` y `gris-relleno` añadidos.

### Cambiado
- `scripts/generators/fucai_xlsx.py`: las rampas se **leen de tokens.json** (antes
  literales) — resuelto el `[Pendiente]` de tokenización de data-viz.
- `03_tokens/taxonomia.md`: documenta el grupo `dataviz`.

### Verificado
- 0 colores del skill faltan en tokens; todas las referencias resuelven; los 4 temas
  conservan claves idénticas (19); la tabla `[GEN]` de rampas coincide con los tokens;
  los generadores corren y `check_fucai.py` da PASS.

## [1.1.0] — 2026-06-24

Incorpora las respuestas del dueño de marca a los puntos de revisión humana del
informe v1.0.0 (`07_gobernanza/informe-revision.md`, adenda).

### Añadido
- **Misión, Visión y 12 Valores oficiales** de FUCAI en
  `01_fundamentos/plataforma-de-marca.md`.
- **Asignación de roles** en `07_gobernanza/modelo-de-gobernanza.md`:
  Dueño de marca = Fundación Caminos de Identidad (FUCAI, institucional);
  Mantenedor = Sergio Martínez.
- Adenda de respuestas de revisión humana en `07_gobernanza/informe-revision.md`.

### Cambiado
- **Submarca Tienda** (`03_tokens/temas/tienda-fucai.json`): por decisión del dueño de
  marca usa la **paleta FUCAI**; se descartan los provisionales terracota/ocre
  (`03_tokens/taxonomia.md` actualizado). Los 4 temas siguen con claves idénticas.
- **Referencias a archivos normalizadas** a rutas repo-relativas en fichas de
  componente, identidad visual y gobernanza.

### Pendiente (permanece, requiere decisión humana)
- Posicionamiento formal y arquetipo de marca; enunciado de personalidad (opcional).
- Canal de issues/PR (URL del remoto en GitHub).
- Hoja de ruta técnica aprobada: `build-skill.js` pleno y tokens diferidos.

## [1.0.0] — 2026-06-24

Primera versión estable. Auditoría completa (Fase 5) del sistema construido en las
Fases 1–4. Informe íntegro en `07_gobernanza/informe-revision.md`.

### Revisado
- Lista de verificación de 12 puntos: integridad de tokens, coherencia de valores,
  reglas duras, léxico ético, referencias/rutas, Git LFS, estructura, skill,
  configuración, compatibilidad técnica, pendientes y versionado.
- Resultado: 0 hallazgos críticos; 2 medios y 3 menores; ~35 `[Pendiente]`, todos
  esperados; 0 omisiones. Generadores corren y `check_fucai.py` da PASS.

### Corregido
- `.gitattributes`: las reglas de LFS para `*.docx/*.xlsx/*.pptx` ahora cubren las
  plantillas del skill (antes quedaban fuera de LFS).
- Coherencia de la regla de secciones de Word: armonizado a **2–3
  (portada/cuerpo/contraportada)** en `encabezado-acta.md`, `divisor-capitulo.md` y
  este CHANGELOG (antes algunas fichas decían "2"), alineado con el generador real.
- `color.md`: marcador `[GEN]` aclarado (HEX desde tokens; RGB/CMYK/Pantone desde
  Manual) y detector de `build-skill.js` hecho robusto a marcadores con sufijos.

### Añadido
- `07_gobernanza/informe-revision.md` — informe de revisión por severidad, con
  correcciones aplicadas y puntos para revisión humana.

## [0.4.0] — 2026-06-24

### Añadido
- **Componentes (`04_componentes/`)**: `catalogo.md` + fichas de `documento/`
  (portada, banda-arena, pie-naranja, encabezado-acta, tabla-firmas,
  divisor-capitulo), `presentacion/` (portada-titulo, slide-contenido),
  `appsheet/patrones.md`, `social/` (post, story, carrusel) y `web/` (boton, card).
  Las fichas de documento codifican las reglas técnicas críticas (fondo blanco,
  bug `rId0`, 2–3 secciones (portada/cuerpo/contraportada), bandas en `Footer`, `lineRule:"atLeast"`, campos abiertos).
- **Motor (`scripts/`)**: `lib/tokens.js` y `lib/tokens.py` (cargan y resuelven
  `tokens.json`); generadores **reutilizados del skill y adaptados** para leer la
  marca desde tokens (`fucai_docx.js`, `fucai_pptx.js`, `fucai_xlsx.py`,
  `check_fucai.py`); `build-skill.js` (esqueleto documentado del compilador);
  `scripts/README.md`.
- **Gobernanza (`07_gobernanza/`)**: `modelo-de-gobernanza.md`, `versionado.md`,
  `onboarding.md`, `mapa-fuente-de-verdad.md`.

### Cambiado
- `package.json`: CommonJS (se quitó `type: module`) para los generadores
  reutilizados; nuevos scripts `build:skill` y `qa:docx`.
- Eliminados los `.gitkeep` de `04_componentes/*`, `07_gobernanza/` y `scripts/*`.

### Verificado
- Los cuatro generadores corren tras la adaptación; `check_fucai.py` da PASS en
  todas las reglas duras sobre un `.docx` de prueba (fondo blanco, sin `rId0`,
  3 secciones, paleta y tipografías correctas). Ningún color/familia quedó quemado.

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
