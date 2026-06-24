# Fuentes — Space Grotesk

Tipografía de titulares de FUCAI (cuerpo: Calibri/Carlito, nativa de sistema, no
se distribuye). Familias y reglas de uso: `../tipografia.md`. Valores numéricos:
`03_tokens/tokens.json` (grupo `font`).

## Archivos en esta carpeta (versionados por Git LFS)

| Archivo | Uso | Peso |
|---------|-----|------|
| `SpaceGrotesk-Regular.ttf` | Escritorio (Office, Word, PowerPoint) | 400 |
| `SpaceGrotesk-Medium.ttf` | Escritorio | 500 |
| `SpaceGrotesk-Bold.ttf` | Escritorio — **titulares FUCAI** | 700 |
| `SpaceGrotesk-{Regular,Medium,Bold}-latin.woff2` | Web (latin) | 400/500/700 |
| `SpaceGrotesk-{Regular,Medium,Bold}-latin-ext.woff2` | Web (latin extendido) | 400/500/700 |

## Procedencia y licencia

- **Origen:** distribución oficial de Google Fonts vía `@fontsource/space-grotesk`
  (registro npm). Los `.woff2` son los archivos web auténticos; los `.ttf` se
  generaron a partir de ellos con `fonttools` (mismas curvas TrueType; el subset
  *latin* cubre el español por completo — ñ, á, é, í, ó, ú, ü, ¡, ¿ — y *latin-ext*
  amplía la cobertura para web).
- **Licencia:** SIL Open Font License 1.1 (Space Grotesk, Florian Karsten). Su uso,
  incrustación y redistribución están permitidos bajo la OFL.

> [Pendiente: los `.otf` originales de `floriankarsten/space-grotesk`
> (`fonts/otf/SpaceGrotesk-{Regular,Medium,Bold}.otf`) no se pudieron descargar
> aquí porque el entorno bloquea `raw.githubusercontent.com` (proxy con allowlist;
> `github.com` sí responde). Para añadirlos desde una máquina con acceso:
>
> ```bash
> base=https://raw.githubusercontent.com/floriankarsten/space-grotesk/master/fonts/otf
> for w in Regular Medium Bold; do curl -fLO "$base/SpaceGrotesk-$w.otf"; done
> ```
> Quedan cubiertos por la regla LFS `*.otf` de `.gitattributes`.]
