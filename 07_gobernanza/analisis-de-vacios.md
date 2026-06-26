# Análisis detallado de vacíos — Sistema de Diseño FUCAI

**Fecha:** 2026-06-25 · **Estado del repo:** `v1.7.0` + commit `672e9a3` (migración a Git LFS).
Búsqueda exhaustiva de huecos: no solo los marcadores `[Pendiente]`/`[POR CONFIRMAR]`
(38 en 24 archivos), sino inconsistencias, dependencias ausentes, deuda técnica y de
proceso. Severidad: **A** alto · **M** medio · **B** bajo. Tipo: **decisión** (humana
de FUCAI) · **deuda** (técnica, implementable).

> **Actualización 2026-06-25 (pendiente de commit).** Resueltos con información oficial
> de FUCAI y trabajo técnico: ✅ posicionamiento, arquetipo y personalidad de marca
> (`plataforma-de-marca.md`) · ✅ audiencias — 3 grupos oficiales (`audiencias.md`) ·
> ✅ narrativa, diferenciadores, lucha y pitch · ✅ dependencia `naane-branding`
> (copiada a `skill/naane-branding/`) · ✅ CI (`.github/workflows/ci.yml`) · ✅ tokens
> reservados documentados. **Siguen abiertos:** builders docx, QA pptx/xlsx, logo
> mono/SVG/tamaño mín., iconos, colores de estado, H4–H6/rem, grilla/breakpoints,
> alineación de léxico de textos oficiales, política de localización, LICENSE, URL del repo.

## 0. Git / LFS / versión (proceso)

- ✅ **Git LFS quedó activo:** los 16 binarios (logos, fuentes, plantillas) están como
  punteros LFS y todos los cubre `.gitattributes`. Cierra una deuda previa.
- **(B · deuda)** El commit `672e9a3` ("descripción del cambio") **no sigue** la
  convención de commits de `CONTRIBUTING.md`, **no subió versión** (sigue 1.7.0), **no
  tiene tag** ni entrada en `CHANGELOG.md`. → versionar/etiquetar y registrar el cambio.
- **(B · deuda)** Verificar que el **remoto/host soporte LFS** al hacer `push` (GitHub
  lo soporta; otros host pueden requerir configuración/cuota).

## 1. Capa estratégica (01_fundamentos)

- **(A · decisión)** **Posicionamiento formal** (declaración "Para X, FUCAI es Y que
  Z"), **arquetipo de marca** y **enunciado de personalidad** de una frase: siguen como
  `[Pendiente]` en `plataforma-de-marca.md`. Misión/Visión/Valores ya están.
- **(M · decisión)** **Perfiles de audiencia detallados** (necesidades, canales,
  objeciones) en `audiencias.md`: hoy es síntesis, no investigación de públicos.

## 2. Lenguaje y voz (05_contenido-lenguaje)

- **(M · decisión)** **"familias acompañadas"**: término solicitado pero **no aparece
  verbatim** en el skill ni en el repo; confirmar si reemplaza o convive con
  "comunidades participantes/protagonistas". (En `DESIGN.md` y léxico.)
- **(M · decisión)** **Política de localización**: qué piezas se traducen y a qué
  lenguas (Wayuunaiki u otras), flujo y responsables (`localizacion.md`).
- **(B · decisión)** Convenciones de **puntuación** (comillas «» vs " ") en `guia-editorial.md`.
- **(B · decisión)** **Catálogos de microcopy** validados (formularios reales,
  mensajes de error definitivos) en `microcopy.md`.
- **(B · decisión)** Ampliación del **glosario** por términos de proyecto (`lexico-institucional.md`).

## 3. Identidad visual (02_identidad-visual)

- **(M · deuda)** **Logo:** falta la **versión monocromática (negra)**, el **tamaño
  mínimo** (mm/px) y el **formato vectorial (SVG)** — hoy solo hay PNG.
- **(M · deuda)** **Iconografía:** la carpeta `iconos/` está **vacía** (solo `.gitkeep`);
  faltan la **grilla de construcción**, los tamaños estándar y la **librería de `.svg`**.
- **(M · decisión)** **Colores de estado** (éxito/error/alerta): sin definir como tokens;
  la paleta excluye rojo/azul genéricos, así que requiere decisión + tokenización.
- **(M · deuda)** **Tipografía web:** faltan **H4–H6** y la conversión de la escala (pt)
  a **rem/px** para web.
- **(M · deuda)** **Grilla de columnas y breakpoints** responsive (web/AppSheet): no tokenizados.
- **(B · decisión)** **Ilustración:** sin set propio definido (`ilustracion.md`).
- **(B · decisión)** **Fotografía:** falta el **enlace al banco autorizado en Drive** y
  el formato de registro de consentimiento (`fotografia.md`).
- **(B · deuda)** **Modo oscuro:** las rampas de **visualización de datos** no se
  re-especifican para fondo negro (contraste/serie en oscuro).

## 4. Tokens (03_tokens)

- **(B · deuda)** **Tokens sin consumidor**: `accent.territorySoft`, `text.footer`,
  `docx.tableHeader.text`, `pptx.titleSlide.text`, `appsheet.accent` están definidos
  pero ningún generador ni documento los referencia. → conectarlos al motor o
  documentarlos como "reservados".
- **Aclaración (no es vacío):** las 21 entradas `dataviz.ramp.*` y los primitivos de
  paso de rampa (`naranja-medio`, `verde-oscuro`, etc.) **sí se consumen**
  programáticamente (vía `lib/tokens` → `RAMP_*` y `tokens.css`); no son huérfanos.

## 5. Motor y scripts (deuda técnica)

- **(M · deuda)** **Builders documentados pero no implementados** en `fucai_docx.js`:
  `actaHeader()`, `signatureTable()`, `chapterDivider()` (hoy se arman a mano).
- **(M · deuda)** **QA parcial:** `check_fucai.py` solo valida `.docx`; **no hay
  verificador** para `.pptx` ni `.xlsx`.
- **(B · deuda)** **Publicación del `.skill`** por Releases/CI desde `dist/skill/`:
  el empaquetado existe (`build-skill --package`), falta el disparador automático.

## 6. Co-branding (dependencia ausente)

- **(M · decisión/deuda)** El skill **`naane-branding`** se referencia en **8 archivos**
  (incl. `cobranding-naane.json`, `manual-de-logo.md`, `DESIGN.md`) pero **no está en el
  repo**. Quien use solo este repositorio no tiene las reglas de *lockup* AICS+NAANE ni
  los logos del consorcio. → **decidir:** copiar `naane-branding` al repo (como se hizo
  con `fucai-branding`) o declarar explícitamente la dependencia externa y dónde vive.

## 7. Infraestructura del repositorio (deuda)

- **(M · deuda)** **Sin CI** (`.github/workflows/` no existe): nada ejecuta
  automáticamente `build-skill` (verificación `[GEN]`) ni `check_fucai` en cada PR, pese
  a que `CONTRIBUTING.md` exige ese checklist de QA.
- **(M · deuda)** **Sin pruebas automatizadas** de los generadores (docx/pptx/xlsx) ni
  de la integridad de tokens/temas (hoy se valida a mano).
- **(B)** Falta un `LICENSE` explícito a nivel de repo (package.json dice `UNLICENSED`;
  las fuentes Space Grotesk son OFL, documentado en `FUENTES.md`).

## 8. Submarca Tienda (no es vacío)

`tienda-fucai.json` usa la paleta FUCAI por decisión del dueño de marca; la ausencia de
subpaleta propia es una **decisión registrada**, no un hueco.

---

## Resumen por prioridad

| Prioridad | Vacíos |
|-----------|--------|
| **Alta (decisión humana)** | Posicionamiento formal · arquetipo · personalidad. |
| **Media (decisión)** | "familias acompañadas" · política de localización · colores de estado · audiencias detalladas. |
| **Media (deuda técnica)** | Logo (mono/SVG/tamaño mín.) · librería de iconos · H4–H6 + escala web · grilla/breakpoints · builders docx · QA pptx/xlsx · dependencia `naane-branding` · CI · pruebas. |
| **Baja** | Tokens sin consumidor · convención de commit/tag del último cambio · puntuación · glosario · microcopy · ilustración · banco de fotos · data-viz en oscuro · LICENSE · LFS en remoto. |

**Nada de lo anterior es un error del sistema:** son extensiones previstas (decisiones
de marca de FUCAI) o deuda técnica acotada. La fuente de verdad (tokens), el motor y la
verificación `[GEN]` están sanos y en sincronía.
