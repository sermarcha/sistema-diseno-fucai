# Estándar de accesibilidad — FUCAI

> Cómo FUCAI garantiza que sus piezas sean usables por todas las personas. Los
> umbrales de contraste se cruzan con los tokens de color
> (`03_tokens/tokens.json`, `02_identidad-visual/color.md`). Tablas marcadas `[GEN]`.

## Nivel objetivo

**WCAG 2.2, nivel AA**, como mínimo, en web y AppSheet; el mismo criterio de
contraste y claridad guía documentos y presentaciones. (El nivel AA se deriva de
los umbrales documentados: 4.5:1 para cuerpo.)

## Contraste mínimo

- **Cuerpo de texto:** ≥ **4.5:1**.
- **Títulos grandes / texto en negrita ≥ 24 px (o ≥ 19 px bold):** ≥ **3:1**.
- **Componentes de interfaz y estados de foco:** ≥ **3:1** contra el fondo.

### Combinaciones de marca y su contraste

<!-- [GEN] derivado de tokens.json + tabla de contraste del Manual v1.1 -->

| Fondo | Texto | Contraste | Veredicto |
|-------|-------|-----------|-----------|
| Blanco (`color.blanco`) | Negro (`color.negro`) | 21:1 | ✓ cuerpo |
| Arena (`color.arena`) | Negro | 10.5:1 | ✓ cuerpo |
| Arena claro (`color.arena-claro`) | Gris texto (`color.gris-texto`) | 8.5:1 | ✓ cuerpo |
| Blanco | Verde (`color.verde`) | 5.9:1 | ✓ cuerpo (territorio) |
| Verde | Blanco | 5.9:1 | ✓ cuerpo |
| Blanco | Naranja (`color.naranja`) | 3.1:1 | ✕ cuerpo · ✓ solo título grande |
| Naranja | Blanco | 3.1:1 | ✕ cuerpo · ✓ solo título grande / portada |

**Regla dura:** naranja↔blanco (3.1:1) **solo** en texto grande en negrita; nunca
cuerpo. Texto sobre foto: degradado oscuro hasta lograr ≥ 4.5:1.

## No solo color

Nunca transmitir información, estado o categoría **únicamente** con color: añadir
siempre etiqueta, ícono o forma (aplica a datos, formularios y estados de UI).

## Foco y teclado (web/AppSheet)

- **Foco visible** en toda la navegación por teclado (indicador con contraste ≥ 3:1).
- Todo lo accionable con mouse debe serlo con teclado; orden de tabulación lógico.
- Objetivos táctiles cómodos; no depender del *hover* para información esencial.

## Lectores de pantalla y ARIA (web/AppSheet)

- Texto **alternativo** descriptivo en imágenes informativas; decorativas con alt
  vacío. Pies de foto con contexto (ver `02_identidad-visual/fotografia.md`).
- Estructura semántica: encabezados jerárquicos (un H1 por página), listas y
  regiones; el orden visual coincide con el orden del DOM.
- Formularios con etiquetas asociadas y mensajes de error programáticamente
  vinculados (texto, no solo color). Microcopy en `05_contenido-lenguaje/microcopy.md`.

> [Pendiente: catálogo de patrones ARIA por componente (menús, diálogos, tabs,
> tablas) y criterios de prueba con lectores de pantalla. El skill fija contraste
> y "no solo color"; el detalle ARIA debe definirse para la implementación web/AppSheet.]

## Documentos accesibles (Word/PDF)

- Estilos de encabezado reales (no texto agrandado), idioma del documento,
  tablas con fila de encabezado y texto alternativo en imágenes.
- PDF con fuentes incrustadas y estructura etiquetada cuando sea posible.

## Movimiento

Honrar `prefers-reduced-motion`: reducir o eliminar animaciones cuando el sistema
lo pida (ver `02_identidad-visual/movimiento.md`).
