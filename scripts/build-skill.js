/**
 * build-skill.js — ESQUELETO DOCUMENTADO del compilador del Sistema de Diseño FUCAI.
 * =============================================================================
 * NO es todavía el compilador completo: es el CONTRATO y el andamiaje. Define con
 * precisión qué leerá, qué generará y con qué reglas, para que la automatización
 * plena (fase posterior) solo tenga que rellenar los TODO sin rediscutir el diseño.
 *
 * PRINCIPIO: 03_tokens/tokens.json es la fuente de verdad. Todo valor de marca
 * (color, familia, tamaño, espaciado) se DERIVA de ahí; nada se escribe a mano en
 * los consumidores. Este script es el mecanismo que hace de ese principio un hecho.
 *
 * DIAGRAMA DE COMPILACIÓN
 *   03_tokens/tokens.json  (+ temas/*.json)
 *            │  (cargar + resolver referencias  -> lib/tokens.js)
 *            ▼
 *   ┌─────────────────────────────────────────────────────────┐
 *   │ build-skill.js                                            │
 *   │   1. SALIDA A: constantes de marca del "skill" empaquetado│
 *   │      (los objetos C / FONT que consumen los generadores). │
 *   │   2. SALIDA B: tablas [GEN] de la capa 02_identidad-visual│
 *   │      (color.md, tipografia.md, espaciado-y-layout.md…).   │
 *   └─────────────────────────────────────────────────────────┘
 *            │
 *            ▼
 *   dist/  (artefactos generados; NO versionado — ver .gitignore)
 *
 * CÓMO EJECUTAR (hoy: modo dry-run informativo)
 *   node scripts/build-skill.js            # imprime el plan y los valores resueltos
 *   node scripts/build-skill.js --write     # [TODO] escribiría las salidas en dist/
 * =============================================================================
 */
const fs = require("fs");
const path = require("path");
const T = require("./lib/tokens.js"); // C, FONT, SZ, PT, raw, twips

const ROOT = path.join(__dirname, "..");
const WRITE = process.argv.includes("--write");

/* -----------------------------------------------------------------------------
 * SALIDA A — Constantes de marca del skill / generadores.
 * Contrato: emitir el objeto de colores (HEX) y familias que los generadores
 * (fucai_docx.js, fucai_pptx.js, fucai_xlsx.py) consumen. Hoy esos generadores ya
 * leen de lib/tokens.js en vivo; este paso existe para PODER también materializar
 * un snapshot embebible en un paquete .skill distribuible por Releases.
 * --------------------------------------------------------------------------- */
function buildBrandConstants() {
  return {
    color: T.C,                 // { primary, arena, green, ... } en HEX sin '#'
    font: T.FONT,               // { heading, body }
    sizePt: T.PT,               // tamaños en puntos (escala Word/PDF)
    ramp: T.RAMP,               // rampas data-viz { orange, green, neutral } desde dataviz.ramp.*
    // TODO: añadir tokens de forma/movimiento cuando existan en tokens.json
    //       (hoy [Pendiente] — ver 02_identidad-visual/forma-y-profundidad.md y movimiento.md).
  };
}

/* -----------------------------------------------------------------------------
 * SALIDA B — Regenerar las tablas marcadas <!-- [GEN] derivado de tokens.json -->
 * en la capa 02. Contrato del algoritmo (a implementar):
 *   1. Recorrer los .md objetivo (lista GEN_TARGETS).
 *   2. Por cada bloque que empiece con el marcador [GEN], localizar la tabla
 *      Markdown inmediatamente siguiente.
 *   3. Reconstruir las filas desde los tokens correspondientes (resueltos) y
 *      reemplazar SOLO el cuerpo de esa tabla, dejando intacta la narrativa.
 *   4. Idempotencia: re-ejecutar no debe producir diffs si los tokens no cambian.
 * --------------------------------------------------------------------------- */
const GEN_TARGETS = [
  "02_identidad-visual/color.md",
  "02_identidad-visual/tipografia.md",
  "02_identidad-visual/espaciado-y-layout.md",
  "02_identidad-visual/forma-y-profundidad.md",
  "02_identidad-visual/movimiento.md",
  "06_accesibilidad/estandar-accesibilidad.md",
];
const GEN_MARKER = "[GEN] derivado de tokens.json";

function findGenTables() {
  const report = [];
  for (const rel of GEN_TARGETS) {
    const p = path.join(ROOT, rel);
    if (!fs.existsSync(p)) { report.push({ file: rel, marcadores: "FALTA ARCHIVO" }); continue; }
    const n = (fs.readFileSync(p, "utf8").match(/\[GEN\][^\n]*tokens\.json/g) || []).length;
    report.push({ file: rel, marcadores: n });
  }
  return report;
}
function regenerateGenTables() {
  // TODO: implementar el reemplazo descrito arriba. Por ahora solo se inventaría.
  throw new Error("regenerateGenTables(): pendiente de implementar (esqueleto).");
}

function main() {
  const brand = buildBrandConstants();
  console.log("\n=== build-skill (dry-run) — Sistema de Diseño FUCAI ===");
  console.log("Fuente de verdad:", path.relative(ROOT, T.tokensPath));
  console.log("\n[A] Constantes de marca resueltas desde tokens.json:");
  console.log("    color :", JSON.stringify(brand.color));
  console.log("    font  :", JSON.stringify(brand.font));
  console.log("    sizePt:", JSON.stringify(brand.sizePt));
  console.log("    ramp  :", JSON.stringify(brand.ramp));
  console.log("\n[B] Tablas [GEN] detectadas (se regenerarían desde tokens):");
  for (const r of findGenTables()) console.log("    -", r.file, "->", r.marcadores, "marcador(es)");
  if (WRITE) {
    console.log("\n--write: [TODO] materializar dist/ (constantes + tablas [GEN]).");
    // fs.mkdirSync(path.join(ROOT, "dist"), { recursive: true }); ...
  } else {
    console.log("\n(usa --write cuando el compilador esté implementado para escribir dist/)");
  }
  console.log("=== fin dry-run ===\n");
}

if (require.main === module) main();
module.exports = { buildBrandConstants, findGenTables, regenerateGenTables, GEN_TARGETS, GEN_MARKER };
