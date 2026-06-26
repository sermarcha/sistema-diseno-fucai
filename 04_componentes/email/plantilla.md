# Componente — Plantilla de email

> Estructura base de un correo FUCAI (HTML responsivo o herramienta de envío).
> Sirve de esqueleto para el boletín y para cualquier campaña. Estado:
> **borrador**.

## Anatomía (de arriba abajo)

1. **Preheader** — texto oculto que se ve junto al asunto en la bandeja: resume el
   correo en ≤ 90 caracteres. No desperdiciarlo en "Ver en el navegador".
2. **Cabecera** — `02_identidad-visual/logo/` (logo naranja sobre fondo claro, o
   `logo_blanco.png` sobre barra de color). Altura sobria; mucho aire.
3. **Cuerpo** — un solo foco por correo: título Space Grotesk, texto Calibri,
   imagen con consentimiento si la hay. Ancho máximo ~600 px (`email.maxWidth`).
4. **CTA** — **un** botón primario, color `brand.primary`, texto `text.onColor`,
   verbo directo ("Conoce el informe", "Súmate"). Como mucho un secundario.
5. **Pie / firma** — firma recurrente, bloque de contacto (FUCAI · NIT
   800.173.574-1 · www.fucaicolombia.org · comunicaciones@fucaicolombia.org),
   slogan *Nuestro centro es la periferia* en cursiva, y **barra naranja delgada**
   con la URL (nunca fondo naranja completo, igual que en documento —ver
   `documento/pie-naranja.md`).
6. **Legal** — motivo del envío, dirección de la organización y enlace de **baja
   (unsubscribe)** visible. Obligatorio.

## Variantes

- **Transaccional / 1 a 1** (respuesta, confirmación): más texto, sin grandes
  imágenes; tono cercano.
- **Difusión** (campaña o aviso): cabecera con imagen, un CTA claro.
- **Boletín**: varios bloques → ver `boletin.md`.

## Reglas técnicas críticas (email ≠ web)

- **Layout con tablas**, no con `flex`/`grid`: muchos clientes no los soportan.
- **CSS en línea** (inline) en cada etiqueta; evita `<style>` en `<head>` como
  única fuente.
- **Fuentes seguras**: declara la familia de marca con *fallback* (Space Grotesk
  → Arial; Calibri → Carlito/Arial). Asume que el cliente no tiene la fuente.
- **Ancho ~600 px**, diseño de una columna, legible en móvil (la mayoría abre ahí).
- **Imágenes con `alt`** siempre; el correo debe entenderse con imágenes
  bloqueadas. Peso total contenido para no caer en spam.
- **No incrustar el mensaje solo en una imagen**: texto real, seleccionable.
- Contraste ≥ 4.5:1 (`06_accesibilidad/`); no transmitir datos solo con color.

## Cuándo usar / cuándo no

- **Usar:** cualquier correo institucional o de difusión de FUCAI.
- **No usar:** no llenar de imágenes pesadas; no varios CTA que compitan; no
  enviar sin enlace de baja ni motivo de envío; nunca léxico de la carencia.

## Tokens

`brand.primary`, `brand.secondary`, `text.onColor`, `font.family.heading`,
`font.family.body`, y el grupo propuesto `email.*` (ver `README.md`).
