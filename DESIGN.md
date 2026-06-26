# DESIGN.md — Sistema de Diseño FUCAI

> Fuente de verdad de identidad visual y voz para **Claude Design** (claude.ai/design)
> y cualquier agente que produzca piezas de la **Fundación Caminos de Identidad
> (FUCAI)** · NIT 800.173.574-1 · *Nuestro centro es la periferia* ·
> www.fucaicolombia.org · comunicaciones@fucaicolombia.org.
>
> Este archivo **deriva** de la fuente de verdad del repositorio
> (`03_tokens/tokens.json`, alineado al *Manual de Identidad Visual v1.1*) y del
> skill canónico `skill/fucai-branding/`. Si un valor cambia, mándalo desde los
> tokens y regenera (`scripts/build-skill.js`). Los datos marcados `[POR CONFIRMAR]`
> no existen aún en el repo: complétalos antes de usarlos.

## Índice

1. Contexto y personalidad de marca · 2. Voz y tono · 3. Color · 4. Tipografía ·
5. Logo · 6. Espaciado y layout · 7. Componentes · 8. Accesibilidad ·
9. Fotografía e ilustración · 10. Iconografía · 11. Temas (claro/oscuro) y submarcas ·
12. Cómo decidir en marca.

---

## 1. Contexto y personalidad de marca

FUCAI acompaña a comunidades y pueblos —en especial indígenas— en sus procesos
propios de desarrollo sostenible, organizativo y cultural, desde la **periferia**
hacia el centro. Visualmente la marca es **minimalista, sofisticada y cálida**: un
lienzo blanco con mucho aire, un solo acento de color que carga significado, y la
calidez puesta en el tono tierra (arena) y en la fotografía de las comunidades, no
en saturar de color. La marca habla "junto al fuego", con las comunidades como
**protagonistas**, nunca como receptoras.

**Misión (oficial):** promover capacidades en poblaciones excluidas, potenciando sus
procesos de desarrollo socioeconómico y ambiental sostenible, político-organizativo y
familiar-educativo, en el contexto de un Estado social de derechos y una Colombia
pluriétnica y multicultural.
**Visión (oficial):** ser reconocidos por un acompañamiento especializado y
diferencial, con metodologías participativas y alianzas estratégicas para el
desarrollo sostenible.

**Concepto estratégico (posicionamiento):** *La identidad es el camino hacia la
innovación, el bienestar y la sostenibilidad global.* **FUCAI es el puente entre
mundos**: transforma la diversidad y la riqueza ancestral en herramientas para un
mundo más justo, inclusivo y resiliente.

**Personalidad de marca:** una persona sencilla y comprometida que combina la
**sabiduría de alguien mayor con la frescura de alguien joven**; fuerte, valiente, con
vocación de servicio; curiosa y detallista; voz inspiradora, clara y cercana. Conecta
el mundo indígena y el occidental. (Detalle en `01_fundamentos/plataforma-de-marca.md`.)

**Cinco principios de diseño** (el lente de toda decisión):

1. **Minimalista** — un elemento focal por pieza, mucho aire, nada decorativo
   porque sí. *Por qué:* el espacio en blanco es el default; lo que aparece debe
   ganarse su lugar.
2. **Refuerza el posicionamiento** — lo que aparece carga marca (un pilar por
   apertura, el verde solo para territorio, el slogan como firma). *Por qué:* cada
   elemento debe decir algo de FUCAI o sobra.
3. **Sofisticada** — contención: un solo acento, no muros de color. *Por qué:* la
   elegancia viene de la disciplina, no de la abundancia.
4. **Clara** — jerarquía fuerte, una idea por sección, lenguaje sencillo. *Por qué:*
   ante el conflicto entre estética y claridad, gana la claridad.
5. **Cálida / cercana** — calidez vía arena y fotografía humana, no vía más naranja.
   *Por qué:* la cercanía es de tono y textura, no de intensidad cromática.

**Regla que reconcilia los cinco:** *color, ornamento y texto son escasos; todo lo
que queda está cargado de significado de marca; el espacio en blanco es el default y
la marca es la señal.*

**Proporción de color 60-25-10-5:** 60 % blanco/arena · 25 % naranja · 10 % verde
(solo territorio) · 5 % negro/grises.

**Pilares de marca** (en *cursiva*, uno por apertura, nunca en mayúsculas):
*Nuestro camino es la identidad* · *Nuestro centro es la periferia* (firma) ·
*Trabajo local, impacto global* · *Un discurso que se come, se bebe y se respira*.

**Valores** (resumen): resiliencia, compromiso, empatía, identidad y diversidad
cultural, honestidad y justicia, diversidad del equipo, innovación social y
sostenibilidad, empoderamiento y autodeterminación comunitaria, conexión y
reconciliación, transparencia, conexión global-local, y honrar la vida.

---

## 2. Voz y tono

**Idioma por defecto: español.** Seis atributos de tono: **sencillo, concreto,
entusiasta, empoderador, realista, cercano**. Voz activa con las comunidades como
sujeto ("las comunidades Wayúu fortalecieron…", no "se fortaleció a…"). Oraciones
≤ 25 palabras; una idea por párrafo; datos de impacto siempre en cifra.

**Filtro antes de publicar:** *¿esta frase reconoce la agencia y dignidad de las
comunidades? ¿Habla desde la fuerza o desde la carencia?* Si es desde la carencia,
se reescribe.

**VJACel — estructura narrativa (Ver · Juzgar · Actuar · Celebrar):** *Ver* parte de
lo concreto (territorio, dato); *Juzgar* da significado desde los saberes, sin juzgar
a las personas; *Actuar* narra con las comunidades como sujeto; *Celebrar* cierra
reconociendo logros y abundancia, no carencias. Úsala como arco de cualquier relato.

### El tono se mueve según el contexto (la voz no)

| Contexto | Dónde pesa | Apertura de referencia |
|----------|-----------|------------------------|
| Email | Cercano | "Hola, [nombre]: te escribimos desde el equipo de FUCAI para…" (cierre: "Seguimos caminando juntos. Un abrazo desde la periferia, [nombre].") |
| Informe a financiador | Concreto + realista | "En [territorio], las comunidades [pueblo] vienen fortaleciendo…" |
| Redes sociales | Entusiasta + cercano | "Esto pasó en [territorio] y queremos contártelo…" |
| Web (la "casa de FUCAI") | Sencillo, accesible | Hero = un pilar de marca, máx. 8 palabras, sin "!" |

### Léxico obligatorio (usar)

- **acompañamiento / acompañar** — verificado en el skill (sustituye a "intervenir/ayudar").
- **comunidades protagonistas / comunidades participantes** — verificado en el skill.
- **familias acompañadas** — término solicitado por FUCAI; coherente con la voz.
  `[POR CONFIRMAR]`: no aparece **verbatim** en el skill ni en el repo (la fuente
  canónica usa "comunidades participantes/protagonistas"); confirmar si reemplaza o
  convive con esos términos.
- Vocabulario de marca: articular · potenciar · fortalecer · territorio · saberes ·
  ancestral · Buen Vivir · identidad · camino · periferia · autonomía · soberanía ·
  celebrar · sembrar · honrar · diálogo · raíces · abundancia.

### Léxico prohibido (no usar) — verificado en el skill

| ✕ Prohibido | ✓ En su lugar | Por qué |
|-------------|---------------|---------|
| **beneficiarios** | comunidades, participantes, aliados | No reciben pasivamente; son protagonistas. |
| **intervenir** | acompañar, articular, fortalecer | No "arreglamos"; caminamos junto a. |
| **ayudar** (paternalista) | potenciar, articular, caminar junto a | Desde la fuerza, no desde la lástima. |
| asistir · llegar (a la comunidad) | acompañar, ser convocados | Evita la jerarquía asistencialista. |
| víctimas | personas que enfrentan, comunidades resilientes | Reconoce agencia, no solo daño. |
| poblaciones vulnerables | nombra a las comunidades por su propio nombre | La precisión honra; la etiqueta borra. |
| tercer mundo · subdesarrollado · primitivo · atrasado · salvar · civilizar | reescribir; ancestral, con saberes propios | Marco colonial. Prohibido. |

### Reglas editoriales

- **Números:** del uno al diez en letra, desde 11 en cifra; **impacto siempre en cifra**.
- **Siglas:** nombre completo + sigla en la 1ª mención —"Fundación Caminos de Identidad
  (FUCAI)"— luego la sigla.
- **Mayúsculas:** "FUCAI" siempre en mayúsculas; pueblos indígenas con mayúscula
  (Wayúu, Uitoto, Tikuna) y con su grafía propia; nunca más de 4 palabras seguidas en
  mayúsculas. Pilares en *cursiva*, nunca en mayúsculas.
- **Cursivas** solo para: citas, nombres científicos, lenguas indígenas (1ª mención),
  pilares y slogan. **Negritas** solo para datos clave o conceptos definidos por 1ª vez.
- **Inclusión** con sustantivos colectivos ("las comunidades", "la niñez", "el equipo").

### Microcopy

- **Botones / CTA:** verbo + objeto, directos: "Conoce nuestro trabajo", "Súmate",
  "Aliánzate", "Descarga el informe". **Nunca** "Haz clic aquí" ni "Más información".
- **Enlaces:** texto que describe el destino (no "aquí").
- **Formularios:** etiquetas cercanas ("¿Cómo te llamas?" antes que "Nombre*"); ayuda
  que acompaña ("Lo usamos solo para responderte."); consentimiento explícito de datos
  e imágenes, con opción de restricción cultural/espiritual en piezas comunitarias.
- **Mensajes de estado** (patrones, a validar): éxito → "¡Listo! Recibimos tu mensaje.
  Seguimos caminando juntos."; error de validación → "Parece que falta tu correo. ¿Lo
  agregas para poder responderte?"; error de sistema → "Algo no funcionó de nuestro
  lado. Intenta de nuevo en un momento."; vacío → "Aún no hay nada por aquí. Cuando lo
  haya, lo verás en este espacio."

---

## 3. Color

Valores reales de `03_tokens/tokens.json`. El verde es **narrativo**: aparece
**solo** en contextos de territorio, naturaleza o medio ambiente; nunca como
sinónimo del naranja. Los tintes derivan al 50 % de los colores de marca (nunca de
los neutros).

```css
:root {
  /* Marca */
  --color-primario:          #E94513; /* Naranja FUCAI (Pantone 1665 XGC) */
  --color-primario-oscuro:   #C13A10; /* hover / sombra / profundidad del naranja */
  --color-secundario:        #EDE8D3; /* Arena (Pantone 11-0105 TPG): calidez, bandas */
  --color-secundario-claro:  #F6F3E9; /* Arena claro: filas alternas, cajas, separadores */
  --color-acento:            #F4A28A; /* Durazno (naranja 50%): hover suave, llamadas */
  --color-territorio:        #2D6A4F; /* Verde Amazónico (Pantone 18-0135 TCX): SOLO territorio */
  --color-territorio-claro:  #74B597; /* Verde claro: badges/secciones ambientales */
  /* Neutros */
  --color-fondo:             #FFFFFF; /* Blanco: lienzo base, fondo principal */
  --color-texto:             #000000; /* Negro: cuerpo de texto sobre claro */
  --color-texto-sobre-color: #FFFFFF; /* Texto sobre fondos de marca (naranja/verde/negro) */
  /* Grises de soporte (no son color de marca) */
  --color-texto-secundario:  #333333; /* captions, footers, texto secundario */
  --color-borde:             #666666; /* bordes y separadores */
  --color-linea:             #CCCCCC; /* líneas sutiles, datos atenuados */
  --color-superficie-sutil:  #E8E8E8; /* rellenos muy suaves de tabla/celda */
  --color-eje:               #999999; /* etiquetas de eje en gráficas */
}
```

| Token semántico | Variable CSS | Hex | Cuándo y por qué |
|-----------------|--------------|-----|------------------|
| Primario | `--color-primario` | `#E94513` | Acento principal: encabezados, botones, barras, serie de datos. Es la marca; úsalo con mesura (≈25 %). |
| Primario oscuro | `--color-primario-oscuro` | `#C13A10` | Estados *hover*/activo y profundidad del naranja. |
| Secundario (arena) | `--color-secundario` | `#EDE8D3` | **Calidez** en bandas/secciones, no en el fondo general. |
| Secundario claro | `--color-secundario-claro` | `#F6F3E9` | Filas alternas, cajas informativas, separadores. |
| Acento (durazno) | `--color-acento` | `#F4A28A` | *Hover* web y llamadas suaves; acento de bajo peso. |
| Territorio (verde) | `--color-territorio` | `#2D6A4F` | **Solo** territorio/naturaleza/ambiente. Narra; no sustituye al naranja. |
| Territorio claro | `--color-territorio-claro` | `#74B597` | Badges y secciones ambientales sobre fondos cálidos. |
| Fondo | `--color-fondo` | `#FFFFFF` | Lienzo por defecto: el 60 % que da aire y sofisticación. |
| Texto | `--color-texto` | `#000000` | Cuerpo sobre fondo claro (21:1). |
| Texto sobre color | `--color-texto-sobre-color` | `#FFFFFF` | Texto sobre naranja/verde/negro (sobre naranja, solo títulos grandes). |
| Texto secundario | `--color-texto-secundario` | `#333333` | Captions, pies, notas. |
| Borde | `--color-borde` | `#666666` | Bordes y separadores funcionales. |
| Línea | `--color-linea` | `#CCCCCC` | Líneas muy sutiles; atenuar datos. |

### Combinaciones autorizadas fondo/texto

| Fondo | Texto | Contraste | Uso |
|-------|-------|-----------|-----|
| Blanco | Negro | 21:1 | Cuerpo |
| Arena | Negro | 10.5:1 | Infografías, banners |
| Arena claro | Gris texto | 8.5:1 | Filas alternas, cajas |
| Blanco | Verde | 5.9:1 | Títulos de secciones de territorio |
| Verde | Blanco | 5.9:1 | Secciones de impacto ambiental |
| Blanco | Naranja | 3.1:1 | **Solo** H1/H2 grandes — nunca cuerpo |
| Naranja | Blanco | 3.1:1 | **Solo** títulos grandes / portadas — nunca cuerpo |

### Reglas duras de superficie

El **fondo siempre es blanco** (la calidez va en banda arena, nunca en fondo naranja
a sangre); el **naranja como fondo completo** se reserva a portadas/secciones/cierres
de presentación, no a documentos ni a fondos generales de web.

### Estados semánticos (éxito/error/alerta)

`[POR CONFIRMAR]` — el sistema **no** define colores de estado y la paleta excluye
rojo/azul/morado/amarillo genéricos. Propuesta a validar: alerta = `--color-primario`;
confirmación con verde **solo** si el contexto es territorial; estados neutros con
grises. Acompañar siempre de ícono/etiqueta, nunca solo color.

### Rampas de visualización de datos

Una serie → rampa naranja; serie de territorio → rampa verde; ejes/líneas/etiquetas →
rampa neutral. Máx. 3 tonos por gráfico; resalta un dato clave en naranja y atenúa el
resto a `--color-linea`; los tonos claros nunca como serie principal; el negro nunca
como serie; sin degradados en barras/sectores. De oscuro a claro:

- **Naranja:** `#C13A10 #E94513 #F06A3E #F4A28A #F8C4AE #F6F3E9 #FBF9F3`
- **Verde (solo territorio):** `#1B4032 #2D6A4F #4E8A6F #74B597 #A0D0B8 #C8E4D5 #EDE8D3`
- **Neutral (ejes/etiquetas):** `#000000 #333333 #666666 #999999 #CCCCCC #E8E8E8 #FFFFFF`

---

## 4. Tipografía

Dos familias, una identidad. **Máximo dos fuentes por pieza.**

```css
:root {
  --fuente-titulos: 'Space Grotesk', 'Arial Black', sans-serif; /* títulos/encabezados */
  --fuente-cuerpo:  'Calibri', 'Carlito', 'Arial', sans-serif;  /* cuerpo */
  --peso-regular: 400;
  --peso-medium:  500;
  --peso-bold:    700;
  /* Escala (unidad fuente de verdad: pt — escala documento/PDF) */
  --tamano-portada: 28pt;
  --tamano-h1:      22pt;
  --tamano-h2:      16pt;
  --tamano-h3:      13pt;
  --tamano-cuerpo:  11pt;
  --tamano-caption:  9pt;
  --tamano-footer:   8pt;
  --interlineado-cuerpo: 1.3;  /* mínimo 1.15 */
  --tracking-titulos:  -0.02;  /* solo títulos > 40 pt */
}
```

- **Títulos: Space Grotesk Bold (700)** — solo títulos/encabezados; nunca cuerpo,
  tablas, captions ni footers. Archivos en el repo: `SpaceGrotesk-Regular.ttf` (400),
  `-Medium.ttf` (500), `-Bold.ttf` (700). Respaldo: Arial Black. En **AppSheet**, que
  no tiene Space Grotesk, se usa **Roboto** para titulares.
- **Cuerpo: Calibri** — respaldo métrico **Carlito**, luego Arial / sans del sistema.
- *Por qué dos familias:* el contraste geométrico de Space Grotesk en titulares frente
  a la neutralidad legible de Calibri crea jerarquía sin recurrir a más color.

| Rol | Variable | Tamaño | Fuente / peso | Uso |
|-----|----------|--------|---------------|-----|
| Título portada | `--tamano-portada` | 28 pt | Space Grotesk Bold, naranja sobre blanco | Portadas/héroes. |
| H1 | `--tamano-h1` | 22 pt | Space Grotesk Bold, naranja | Apertura de sección (+ un pilar en cursiva). |
| H2 | `--tamano-h2` | 16 pt | Space Grotesk Bold, naranja | Subtítulos. |
| H3 | `--tamano-h3` | 13 pt | Space Grotesk Bold, negro | Sub-subtítulos. |
| Cuerpo | `--tamano-cuerpo` | 11 pt | Calibri Regular, negro | Texto corrido. |
| Caption | `--tamano-caption` | 9 pt | Calibri Italic, gris texto | Pies de imagen, notas. |
| Footer | `--tamano-footer` | 8 pt | Calibri Italic, gris | Pies de página. |

En **presentaciones** la escala sube: portada 36–44 pt, contenido 26–32 pt, cuerpo
14–16 pt (máx. 6 líneas), cifras héroe 36–60 pt.

**Jerarquía y reglas:** un solo H1 por vista; interlineado 1.15–1.3; sin subrayado en
cuerpo (reservado a enlaces); ≥ 12 pt de espacio tras un título; tracking negativo
leve solo en títulos grandes.

> `[POR CONFIRMAR]` La escala es en **pt** (fuente de verdad, contexto documento/PDF).
> Para web, conviértela proporcionalmente a rem/px y define **H4–H6** (aún sin tokens).

---

## 5. Logo

Archivos en `02_identidad-visual/logo/`. El logo es una **unidad indivisible**; su
color es **solo naranja o blanco**, nunca otro.

| Variante | Archivo | Sobre qué fondo | Por qué |
|----------|---------|-----------------|---------|
| Naranja (primaria) | `logo_naranja.png` | Claro: blanco o arena | Máximo contraste y calidez sobre el lienzo por defecto. |
| Blanco (secundaria) | `logo_blanco.png` | Oscuro o de color: naranja, verde, negro, foto oscura | Legibilidad cuando el fondo es intenso. |
| Monocromática (negra) | `[POR CONFIRMAR]` | Una sola tinta (sellos/grabado) | No existe en el repo. |

- **Proporción fija 2:1**; se escala proporcionalmente, **nunca se deforma ni rota**.
- Tipografía del logotipo: **Futura PT Demi** (parte del archivo, no se sustituye).
- **Área de protección:** margen libre alrededor igual a la **altura de la "F"**.
- **Favicon / ícono de app:** la **"F"** en naranja sobre blanco (32×32 px). En
  cabeceras sobre fondo naranja, `logo_blanco.png`; sobre fondo claro, `logo_naranja.png`.
- **Tamaño mínimo:** `[POR CONFIRMAR]` (recomendación: ≥ ~25 mm impreso / ~96 px pantalla).
- **Formato:** en el repo solo hay **PNG**; versión vectorial (SVG) `[POR CONFIRMAR]`.

**Usos incorrectos:** no deformar ni cambiar la proporción · no rotar · no recolorear
(solo naranja o blanco) · no añadir sombras, contornos ni efectos · no encerrar en
cajas que invadan el área de protección · no poner la versión naranja sobre fondos de
bajo contraste · no reconstruir el logotipo con otra fuente.

**Cobranding:** en material del proyecto **Naane / CC217** (OIKOS–AICS) se aplica el
*lockup* del financiador (AICS + NAANE) según el skill `naane-branding`; la tipografía
y la voz siguen siendo FUCAI y el logo FUCAI no se altera. La submarca **Tienda FUCAI**
usa la paleta FUCAI y no recolorea el logo.

---

## 6. Espaciado y layout

Escala única base **8**, motor del minimalismo. Los números son la fuente de verdad
(definidos en pt para documento; en web se usan como px directamente).

```css
:root {
  --espacio-xs:  4px;
  --espacio-sm:  8px;  /* unidad base */
  --espacio-md:  12px;
  --espacio-lg:  16px;
  --espacio-xl:  24px;
  --espacio-2xl: 32px;
  --espacio-3xl: 48px;
}
```

**Principios de composición:** un **elemento focal** por página/vista (si compite, se
divide); se agrupa con espacio en blanco, **no con cajas ni bordes**; aperturas
generosas (un H1 naranja + un pilar en cursiva + aire). Márgenes de documento
consistentes: 2.5 cm (A4) / 1 in (Carta).

> `[POR CONFIRMAR]` Grilla de columnas, anchos de contenedor y **breakpoints**
> responsive (móvil/tablet/escritorio): aún no tokenizados.

---

## 7. Componentes

```css
:root {
  --radio-none: 0px;
  --radio-sm:   4px;  /* radio de marca: botones y tarjetas */
  --radio-md:   8px;  /* contenedores grandes */
  --sombra-sm:  0px 1px 3px 0px #CCCCCC; /* única elevación sutil; default = sin sombra */
  --duracion-rapida: 150ms; /* hover, foco */
  --duracion-base:   250ms; /* contenido / cambio de estado */
  --easing-standard: cubic-bezier(0.2, 0, 0, 1);
  --easing-in:       cubic-bezier(0.4, 0, 1, 1);
  --easing-out:      cubic-bezier(0, 0, 0.2, 1);
}
```

### Web / artefactos

- **Botón primario:** fondo `--color-primario`, texto `--color-texto-sobre-color`,
  radio `--radio-sm`; *hover* `--color-acento`; transición `--duracion-rapida`
  `--easing-standard`. Texto con verbo directo. *Por qué:* una acción clara por botón.
- **Botón secundario:** borde naranja, fondo transparente, texto naranja.
- **Enlaces:** naranja, sin subrayado en normal, subrayado en *hover*.
- **Tarjeta (card):** fondo `--color-fondo`, redondeo `--radio-sm`/`--radio-md`, un
  foco por tarjeta, profundidad mínima (usar `--sombra-sm` solo si es imprescindible;
  default sin sombra). Agrupar con aire, no con bordes pesados.
- **Foco (teclado):** indicador visible, contraste ≥ 3:1.

### Documento (Word/PDF) — el contexto principal de FUCAI

- **Portada (blanca):** logo naranja (≈4 cm) arriba a la izquierda · filete naranja ·
  ~⅓ de página en blanco · título 28 pt naranja · subtítulo · un pilar en cursiva · al
  pie, **banda arena** con fecha/proyecto/slogan. **Sin fondo naranja a sangre.**
- **Cuerpo:** encabezado de **solo texto** (nunca imagen en el header) + filete naranja;
  pie con filete, firma y número de página. Fondo blanco.
- **Contraportada (blanca):** logo naranja centrado · slogan en cursiva · contacto ·
  **barra naranja delgada al pie** con la URL en blanco.
- **Tablas:** encabezado naranja con texto blanco; filas alternas en arena claro;
  **solo filetes horizontales**; números a la derecha, unidades en el encabezado.

### Presentación (patrón "sándwich")

Portada (fondo naranja/verde/negro + logo blanco) → contenido (blanco, barra naranja
arriba, barra arena al pie, **máx. 6 líneas**) → dato héroe → cita → divisoria de
sección → cierre.

### Redes sociales (Canva) — tres estructuras y tamaños

- **A · Dato impactante:** fondo blanco/arena, una cifra grande Space Grotesk naranja,
  caption corto, logo pequeño, barra naranja con URL.
- **B · Historia de territorio:** foto de comunidad (80 %), degradado oscuro, ≤ 2
  líneas blancas, logo blanco arriba a la izquierda.
- **C · Mensaje institucional:** fondo naranja (o verde para territorio), logo blanco
  centrado, ≤ 3 líneas, slogan en cursiva.
- **Tamaños:** IG post 1080×1080 · IG Stories/Reels 1080×1920 · LinkedIn post 1200×627
  · LinkedIn banner 1584×396 · Facebook post 1200×630 · FB cover 820×312 · YouTube
  thumb 1280×720 · YouTube banner 2560×1440.

### AppSheet

Primario naranja (barra superior, acciones, encabezados); superficies blanco/arena
(nunca naranja como fondo general); verde solo en módulos de territorio/ambiente;
titulares en **Roboto**; encabezados de tarjeta/tabla naranja con texto blanco, filas
alternas en arena claro; nunca transmitir estado solo por color.

---

## 8. Accesibilidad

Objetivo: **WCAG 2.2 nivel AA**. Contraste mínimo **4.5:1 en cuerpo**, **3:1 en
títulos grandes** y en componentes/foco.

| Fondo | Texto | Contraste | Veredicto |
|-------|-------|-----------|-----------|
| Blanco | Negro | 21:1 | ✓ cuerpo |
| Arena `#EDE8D3` | Negro | 10.5:1 | ✓ cuerpo |
| Arena claro `#F6F3E9` | Gris texto `#333333` | 8.5:1 | ✓ cuerpo |
| Blanco | Verde `#2D6A4F` | 5.9:1 | ✓ cuerpo (territorio) |
| Verde | Blanco | 5.9:1 | ✓ cuerpo |
| Blanco | Naranja `#E94513` | 3.1:1 | ✕ cuerpo · ✓ solo título grande/negrita |
| Naranja | Blanco | 3.1:1 | ✕ cuerpo · ✓ solo título grande / portada |

**Reglas duras:** naranja↔blanco (3.1:1) **solo** en texto grande en negrita; texto
sobre foto requiere degradado oscuro hasta ≥ 4.5:1; **nunca** transmitir estado o
categoría **solo con color** (añade etiqueta, ícono o forma).

**Interacción y lectura:** foco visible en navegación por teclado; todo lo accionable
con mouse debe serlo con teclado, en orden lógico; texto alternativo descriptivo en
imágenes informativas (alt vacío en decorativas); estructura semántica con un H1 por
página; formularios con etiquetas asociadas y errores vinculados (texto, no solo
color); honrar `prefers-reduced-motion` reduciendo o eliminando animaciones.

*Por qué:* la inclusión es eje ético de FUCAI, no un checklist: una pieza que no se
puede leer o usar, excluye.

---

## 9. Fotografía e ilustración

La fotografía es protagonista de la calidez de marca (no el color). Dirección de arte:

- **Desde adentro, no desde afuera:** la cámara acompaña a las comunidades, nunca
  observa desde arriba.
- **Personas protagonistas:** rostros, manos y miradas son el mensaje, no decorado.
- **Territorio como personaje** (Amazonía, Guajira, Orinoquía, Cauca): abundancia y
  vida, **nunca** precariedad ni exotismo.
- **Luz natural, color auténtico:** sin filtros que distorsionen; tonos tierra, verdes
  y ocres que complementan la paleta.
- **Composición minimalista:** una imagen fuerte con espacio en blanco antes que
  collages; una imagen por sección.
- **Pies con contexto y crédito:** "Líderes Wayúu durante la Escuela de Gobernanza, La
  Guajira, 2024", no "foto del taller".
- **Texto sobre foto:** solo con degradado oscuro y contraste ≥ 4.5:1; logo blanco.

**Consentimiento (obligatorio):** toda imagen con personas identificables —en especial
**niñez**— requiere autorización; consultar a las comunidades antes de fotografiar
rituales o prácticas sagradas y respetar sus restricciones; en piezas institucionales,
usar solo el banco autorizado de FUCAI. *El banco de fotos no vive en el repo: se
referencia en Drive con el consentimiento registrado* `[POR CONFIRMAR: enlace a Drive]`.

| ✓ Correcto | ✕ Incorrecto |
|------------|--------------|
| Comunidad como sujeto activo, mirada digna | Personas como "necesitadas" o anónimas de espaldas |
| Territorio con abundancia y vida | Territorio como precariedad o "exótico" |
| Luz natural, color real | Filtros que dramatizan o distorsionan |
| Pie con nombre, pueblo, lugar, año y crédito | "Foto del taller" sin contexto |

**Ilustración:** líneas geométricas limpias, compatibles con el logo; minimalista (una
idea, con aire); solo colores de la paleta y proporción 60-25-10-5; verde solo en
territorio/ambiente; sin degradados en infografía; nunca mezclar estilos de ilustración.

---

## 10. Iconografía

- **Estilo outline (trazo), no relleno;** líneas geométricas limpias, compatibles con
  la geometría del logo.
- **Grosor de trazo: 2 px.**
- **Color:** naranja o negro; **verde solo** en íconos de territorio/naturaleza/ambiente.
  Solo colores de la paleta. Nunca mezclar estilos de ícono/ilustración en una pieza.
- **Criterio de librería:** un set mínimo y coherente, un ícono por concepto; preferir
  íconos que refuercen significado de marca; nunca transmitir estado solo con color (el
  ícono acompaña a una etiqueta).

> `[POR CONFIRMAR]` Grilla de construcción (p. ej. lienzo 24×24), tamaños estándar y la
> librería base de `.svg`: aún no definidos en el repo (`02_identidad-visual/iconos/`).

---

## 11. Temas (claro/oscuro) y submarcas

Las mismas variables semánticas cambian de valor por tema; la estructura no cambia.

**Modo claro** es el default (sección 3). **Modo oscuro** (Manual v1.1: fondo negro,
texto arena) — pensado para pantalla/web/portadas de presentación; en Word el fondo
sigue siendo blanco por regla dura:

```css
[data-theme="oscuro"] {
  --color-fondo:             #000000; /* fondo negro */
  --color-texto:             #EDE8D3; /* texto arena sobre negro */
  --color-texto-sobre-color: #FFFFFF;
  --color-primario:          #E94513; /* el naranja se mantiene como acento */
  --color-titulo:            #F4A28A; /* títulos en naranja claro: mejor lectura sobre negro */
  --color-secundario:        #EDE8D3;
  --color-acento:            #F4A28A;
  --color-territorio:        #74B597; /* verde claro lee mejor sobre negro */
  --color-texto-secundario:  #CCCCCC;
  --color-borde:             #999999;
}
```

**Submarcas y co-branding:**

- **Tienda FUCAI** (productos artesanales): por decisión del dueño de marca usa la
  **misma paleta que FUCAI**; no introduce subpaleta propia. Mantiene intacto el logo.
- **Naane / CC217** (OIKOS–AICS, Buen Vivir Amazonas): **hereda la paleta FUCAI**; la
  diferencia es el *lockup* de financiador (AICS + NAANE) y los logos del consorcio
  (skill `naane-branding`). La voz y la tipografía siguen siendo FUCAI; en páginas de
  cara al financiador, sus requisitos de logo tienen prioridad sin alterar el logo FUCAI.

---

## 12. Cómo decidir en marca (casos no previstos)

Procedimiento de arbitraje cuando varios principios compiten:

1. **¿Carga marca?** Si un elemento no refuerza el posicionamiento, elimínalo.
2. **¿Se entiende?** La claridad nunca se sacrifica por estética.
3. **¿Respira?** Si compite por atención, divídelo o quítalo.
4. **¿Da calidez correctamente?** El calor entra por arena y fotografía humana, no por
   más naranja.

Reglas rápidas para mantenerse en marca:

- Ante la duda "¿agrego algo?" → **no** (minimalismo).
- ¿Necesitas un color de fondo? → blanco; calidez con arena; naranja a sangre solo en
  portadas de presentación.
- ¿Verde? → solo si hablas de territorio, naturaleza o ambiente.
- ¿Texto sobre naranja? → solo títulos grandes en negrita; nunca cuerpo.
- ¿Una pieza pide "más impacto"? → una cifra héroe o una foto fuerte, no más color.
- ¿Cómo nombrar a las personas? → comunidades **protagonistas**; nunca "beneficiarios".
- ¿Un dato? → en cifra, y resalta uno solo (atenúa el resto a `--color-linea`).

---

### Procedencia y mantenimiento

Valores extraídos de `03_tokens/tokens.json` (fuente de verdad), el skill
`skill/fucai-branding/` y las capas `01_fundamentos/`, `02_identidad-visual/`,
`05_contenido-lenguaje/` y `06_accesibilidad/`. Para mantener este archivo en
sincronía, edita los **tokens** y regenera con `node scripts/build-skill.js` (verifica
las tablas derivadas y emite el paquete en `dist/skill/`).
