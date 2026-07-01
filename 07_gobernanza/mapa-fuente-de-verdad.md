# Mapa de fuente de verdad — FUCAI

> Convierte "fuente única de verdad" en un **hecho mecánico**: qué archivo manda
> sobre qué valor, y cómo fluye la compilación de tokens a consumidores.

## Qué manda sobre qué

| Valor / decisión | Archivo que manda |
|------------------|-------------------|
| Colores (primitivos, semánticos, de componente) | `03_tokens/tokens.json` |
| Variantes de paleta (claro/oscuro/submarcas/co-branding) | `03_tokens/temas/*.json` |
| Nomenclatura, alias y regla de scope por plataforma | `03_tokens/taxonomia.md` |
| Tipografía (familias, escala, pesos, interlineado, tracking) | `03_tokens/tokens.json` (`font.*`) |
| Espaciado y márgenes | `03_tokens/tokens.json` (`space.*`, `layout.*`) |
| Logo y reglas de uso | `02_identidad-visual/logo/` |
| Archivos de fuente | `02_identidad-visual/tipografia/` |
| Filosofía, atributos y pilares | `01_fundamentos/` |
| Voz, tono, léxico ético | `05_contenido-lenguaje/`, `01_fundamentos/voz-y-tono.md` |
| Reglas de contraste y accesibilidad | `06_accesibilidad/` |
| Piezas reutilizables y reglas técnicas | `04_componentes/` |
| Reglas de marca para mapas (cartografía) | `04_componentes/cartografia/` |
| Implementación cartográfica (estilos, gradientes, plantillas, KML) | repo externo **`fucai-geo`** → `qgis/sistema-diseno-mapas.md` |
| Lógica de generación | `scripts/` |
| Autoridad de marca de referencia (espejo) | `skill/fucai-branding/` |

Regla: los `.md` **narran y referencian** tokens; **no redefinen** valores. Las
tablas de valores se marcan `<!-- [GEN] derivado de tokens.json -->` y las
regenera el build.

## Diagrama de compilación (tokens → skill)

```
03_tokens/tokens.json  (+ temas/*.json)        ← FUENTE DE VERDAD (se edita aquí)
        │
        │  lib/tokens.js / lib/tokens.py  (cargan + resuelven referencias {a.b.c})
        ▼
   scripts/build-skill.js
        ├─ [A] EMITE dist/skill/  ──► tokens.flat.json, tokens.css (web/AppSheet),
        │                              brand-constants.json (para los generadores) y
        │                              brand-platform.md (Misión/Visión/Valores).
        └─ [B] VERIFICA las tablas [GEN] de 02_/06_ contra los tokens (PASS/FAIL).
        ▼
   dist/  (artefactos; NO versionado — .gitignore)
        ▼
   Release de GitHub  ──► paquete .skill distribuible (ver versionado.md)
```

`lib/` resuelve los tokens en vivo y los generadores ya los consumen.
`scripts/build-skill.js` está **implementado**: `--write` emite el paquete
`dist/skill/` (que INCLUYE todo el sistema de diseño: tokens resueltos, CSS,
constantes de marca y la plataforma con Misión/Visión/Valores), y por defecto
**verifica** que las tablas `[GEN]` sigan coincidiendo con los tokens.

> [Pendiente: automatizar la publicación del `.skill` por Releases (CI). El
> compilador ya produce el paquete; falta solo el flujo de publicación.]
