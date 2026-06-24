# Modelo de gobernanza — FUCAI

> Cómo se cuida y evoluciona el Sistema de Diseño FUCAI. Operacionaliza el
> principio rector: **los tokens y reglas explícitas mandan; los documentos son
> derivados.** Complementa `CONTRIBUTING.md` (flujo de PR y checklist de QA).

## Roles

| Rol | Responsabilidad | Poder de decisión |
|-----|-----------------|-------------------|
| **Dueño de marca (Guardián)** | Custodia `03_tokens/` y `01_fundamentos/`. Vela por la coherencia de marca. | Aprueba cambios de tokens, filosofía y todo cambio MAJOR. |
| **Mantenedor** | Revisa y fusiona PRs a `main`; cuida que el repo compile y que la taxonomía se respete. | Fusiona cambios menores y MINOR. |
| **Contribuyente** | Cualquier integrante de FUCAI que propone cambios vía PR. | Propone; no fusiona. |
| **Consumidor** | Persona o herramienta agéntica que lee los tokens para producir entregables. | Reporta inconsistencias como *issues*; no edita. |

## Cómo se propone un cambio

1. Abrir un *issue* describiendo el problema o la necesidad (qué valor/regla y por qué).
2. Crear una rama desde `main` (`tipo/descripcion`), hacer cambios atómicos.
3. Actualizar `CHANGELOG.md` y la versión semántica si aplica (ver `versionado.md`).
4. Abrir un Pull Request contra `main` con el *qué* y el *por qué*.

## Cómo se aprueba

- Cambios en **`03_tokens/` o `01_fundamentos/`** → revisión obligatoria del **Dueño
  de marca** + checklist de QA en verde.
- Otros cambios → revisión de un **Mantenedor** + checklist de QA.
- `main` está protegida: no hay *push* directo; todo entra por PR revisado.

## Matriz de decisión rápida

| Cambio | Quién aprueba | Versión |
|--------|---------------|---------|
| Valor de token / regla de scope | Dueño de marca | MAJOR o MINOR |
| Nuevo componente o ficha | Mantenedor | MINOR |
| Corrección de texto / typo / doc | Mantenedor | PATCH |
| Filosofía / plataforma de marca | Dueño de marca | MAJOR |

> [Pendiente: asignar las personas concretas a cada rol (Dueño de marca,
> Mantenedores) y el canal de issues/PR del repositorio.]
