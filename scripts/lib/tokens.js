/**
 * lib/tokens.js — Cargador y resolutor de la fuente de verdad (Node).
 *
 * Lee 03_tokens/tokens.json, resuelve las referencias entre llaves
 * (p. ej. "{color.naranja}") hasta su valor primitivo y expone los valores de
 * marca que los generadores NECESITAN, para que NINGÚN generador tenga colores
 * ni familias tipográficas quemados. Si un valor de marca cambia, se edita
 * tokens.json y todos los generadores lo heredan.
 *
 *   const { C, FONT, SZ, PT, twips, raw } = require("../lib/tokens.js");
 *
 * - C: colores en formato docx/openpyxl (HEX sin '#'), con las mismas claves
 *      que usaban los generadores del skill (primary, arena, green, …).
 * - FONT: familias { heading, body } (primer nombre de cada fontFamily token).
 * - SZ: tamaños tipográficos en MEDIOS PUNTOS (pt × 2), como los espera docx.
 * - PT: tamaños tipográficos en puntos.
 * - twips(pt): convierte puntos a veinteavos (docx spacing).
 * - raw(path): valor resuelto de cualquier token por su ruta.
 */
const fs = require("fs");
const path = require("path");

const TOKENS_PATH = path.join(__dirname, "..", "..", "03_tokens", "tokens.json");
const tokens = JSON.parse(fs.readFileSync(TOKENS_PATH, "utf8"));

// --- aplanar a { "color.naranja": "#E94513", ... } ---
const leaves = {};
(function walk(node, prefix) {
  if (node && typeof node === "object") {
    if ("$value" in node) { leaves[prefix.join(".")] = node.$value; return; }
    for (const k of Object.keys(node)) {
      if (k.startsWith("$")) continue;
      walk(node[k], prefix.concat(k));
    }
  }
})(tokens, []);

// --- resolver referencias {a.b.c} de forma recursiva ---
const REF = /^\{([^}]+)\}$/;
function resolve(value, seen = []) {
  if (typeof value === "string") {
    const m = value.trim().match(REF);
    if (m) {
      const target = m[1];
      if (seen.includes(target)) throw new Error("ciclo de referencia: " + seen.concat(target).join(" -> "));
      if (!(target in leaves)) throw new Error("referencia rota: {" + target + "}");
      return resolve(leaves[target], seen.concat(target));
    }
  }
  return value;
}
const raw = (p) => resolve(leaves[p]);
const hex = (p) => String(raw(p)).replace(/^#/, ""); // docx/openpyxl no usan '#'

// --- C: mismas claves que los generadores del skill, ahora desde tokens ---
const C = {
  primary:     hex("color.naranja"),
  arena:       hex("color.arena"),
  green:       hex("color.verde"),
  black:       hex("color.negro"),
  white:       hex("color.blanco"),
  grayText:    hex("color.gris-texto"),
  grayMedium:  hex("color.gris-borde"),
  grayLight:   hex("color.gris-linea"),
  lightOrange: hex("color.durazno"),
  lightSand:   hex("color.arena-claro"),
  lightGreen:  hex("color.verde-claro"),
};

const FONT = {
  heading: raw("font.family.heading")[0], // "Space Grotesk"
  body:    raw("font.family.body")[0],    // "Calibri"
};

// tamaños en puntos desde font.size.* (objeto {value, unit})
const ptOf = (p) => raw(p).value;
const PT = {
  coverTitle: ptOf("font.size.coverTitle"), h1: ptOf("font.size.h1"), h2: ptOf("font.size.h2"),
  h3: ptOf("font.size.h3"), body: ptOf("font.size.body"), caption: ptOf("font.size.caption"),
  footer: ptOf("font.size.footer"),
};
const SZ = Object.fromEntries(Object.entries(PT).map(([k, v]) => [k, v * 2])); // docx: medios puntos
const twips = (pt) => Math.round(pt * 20);

module.exports = { C, FONT, SZ, PT, twips, raw, hex, tokensPath: TOKENS_PATH };
