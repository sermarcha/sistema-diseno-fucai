# Catálogo de componentes — FUCAI

> Inventario de los componentes del sistema. Para FUCAI un "componente" es, sobre
> todo, una **pieza de documento** (no un botón web). Cada ficha vive en su
> subcarpeta. Los valores son autoridad de `03_tokens/tokens.json`; los
> generadores que producen las piezas viven en `scripts/`.

## Estados de madurez

- **Estable** — probado y producido por un generador en `scripts/`. Úsese.
- **Borrador** — definido, pero sin generador propio (se arma con primitivas o a
  mano). Úsese con cuidado.
- **Deprecado** — no usar; se conserva por historia.

## Inventario

| Componente | Carpeta | Estado | Generador / origen |
|------------|---------|--------|--------------------|
| Portada de documento | `documento/portada.md` | Estable | `fucai_docx.js → buildCover` |
| Banda arena (portada) | `documento/banda-arena.md` | Estable | `fucai_docx.js → coverFooterBand` |
| Pie naranja (contraportada) | `documento/pie-naranja.md` | Estable | `fucai_docx.js → backFooterBar` |
| Encabezado de acta | `documento/encabezado-acta.md` | Borrador | `fucai_docx.js → textHeader` + bloque de título |
| Tabla de firmas | `documento/tabla-firmas.md` | Borrador | primitivas de tabla (sin builder propio) |
| Divisor de capítulo | `documento/divisor-capitulo.md` | Borrador | tabla de ancho completo en el cuerpo |
| Portada de presentación | `presentacion/portada-titulo.md` | Estable | `fucai_pptx.js → titleSlide / sectionSlide` |
| Slide de contenido | `presentacion/slide-contenido.md` | Estable | `fucai_pptx.js → contentSlide` |
| Patrones de vista AppSheet | `appsheet/patrones.md` | Borrador | tokens `appsheet.*` (sin builder) |
| Post de redes | `social/post.md` | Borrador | Canva (brand kit) |
| Story de redes | `social/story.md` | Borrador | Canva (brand kit) |
| Carrusel de redes | `social/carrusel.md` | Borrador | Canva (brand kit) |
| Guías por canal social | `social/canales/` | Borrador | estrategia por red (LinkedIn, Instagram, Facebook, X, TikTok) |
| Community management y gobernanza | `social/canales/community-management.md` | Borrador | marco de interacción, escalamiento y crisis |
| Inventario de canales y métricas | `social/canales/inventario.md` | Plantilla | a llenar por comunicaciones |
| Plantilla de email | `email/plantilla.md` | Borrador | HTML email / herramienta de envío |
| Boletín | `email/boletin.md` | Borrador | sobre `email/plantilla.md` |
| Campaña de mailing | `email/campana-mailing.md` | Borrador | guía de campaña (estrategia) |
| Botón web | `web/boton.md` | Borrador | HTML/React (tokens) |
| Card web | `web/card.md` | Borrador | HTML/React (tokens) |

## Cómo leer una ficha

Cada ficha de `documento/` incluye: **anatomía · variantes · estados · reglas
técnicas críticas · cuándo usar / cuándo no · token + script** que la produce.
