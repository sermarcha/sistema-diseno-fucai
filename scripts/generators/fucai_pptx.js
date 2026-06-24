/**
 * fucai_pptx.js — Reusable FUCAI PowerPoint (.pptx) builders (PptxGenJS).
 *
 *   const pptxgen = require("pptxgenjs");
 *   const P = require("<skill>/scripts/fucai_pptx.js");
 *   const pres = new pptxgen();
 *   P.titleSlide(pres, { title, subtitle });
 *   P.contentSlide(pres, { title, addBody: (slide) => { ...slide.addText(...) } });
 *   P.closingSlide(pres);
 *   await pres.writeFile({ fileName: "/mnt/user-data/outputs/FUCAI_Presentacion_2026-06.pptx" });
 *
 * Unlike Word, slides MAY use full orange/green/black backgrounds for
 * title/section/closing. Content slides stay white and minimal (max 6 lines).
 */
const path = require("path");
const ASSETS = path.join(__dirname, "..", "..", "02_identidad-visual", "logo");
const LOGO_WHITE = path.join(ASSETS, "logo_blanco.png");
const LOGO_ORANGE = path.join(ASSETS, "logo_naranja.png");

// ---- Valores de marca leidos de tokens.json via lib (NO quemados) ----
const { C, FONT } = require("../lib/tokens.js");

function titleSlide(pres, { title, subtitle = "", bg = C.primary }) {
  const s = pres.addSlide();
  s.background = { fill: bg };
  s.addImage({ path: LOGO_WHITE, x: 0.5, y: 0.3, w: 2.5, h: 1.25 });
  s.addText(title, { x: 0.5, y: 2.2, w: 9, h: 1.2, fontSize: 36, fontFace: FONT.heading, color: C.white, bold: true });
  if (subtitle) s.addText(subtitle, { x: 0.5, y: 3.4, w: 9, h: 0.6, fontSize: 18, fontFace: FONT.body, color: C.white });
  s.addText("Nuestro centro es la periferia | www.fucaicolombia.org",
    { x: 0.5, y: 4.8, w: 9, h: 0.4, fontSize: 12, fontFace: FONT.body, color: C.white, italic: true });
  return s;
}

function contentSlide(pres, { title, addBody }) {
  const s = pres.addSlide();
  s.background = { fill: C.white };
  s.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.primary } });
  s.addImage({ path: LOGO_ORANGE, x: 8.0, y: 0.2, w: 1.6, h: 0.8 });
  s.addText(title, { x: 0.5, y: 0.3, w: 7, h: 0.7, fontSize: 26, fontFace: FONT.heading, color: C.primary, bold: true });
  if (typeof addBody === "function") addBody(s); // place content starting at y ~1.2, max 6 lines
  s.addShape(pres.ShapeType.rect, { x: 0, y: 5.25, w: 10, h: 0.375, fill: { color: C.arena } });
  s.addText("Fundación Caminos de Identidad – FUCAI | www.fucaicolombia.org",
    { x: 0.5, y: 5.25, w: 7, h: 0.375, fontSize: 8, fontFace: FONT.body, color: C.grayText, valign: "middle" });
  return s;
}

function sectionSlide(pres, { title, pillar = "", bg = C.primary }) {
  const s = pres.addSlide();
  s.background = { fill: bg };
  s.addText(title, { x: 0.6, y: 2.2, w: 8.8, h: 1.4, fontSize: 40, fontFace: FONT.heading, color: C.white, bold: true });
  if (pillar) s.addText(pillar, { x: 0.6, y: 3.7, w: 8.8, h: 0.6, fontSize: 18, fontFace: FONT.body, color: C.white, italic: true });
  return s;
}

function closingSlide(pres, { bg = C.primary } = {}) {
  const s = pres.addSlide();
  s.background = { fill: bg };
  s.addImage({ path: LOGO_WHITE, x: 3.75, y: 1.6, w: 2.5, h: 1.25 });
  s.addText("Nuestro centro es la periferia", { x: 0.5, y: 3.1, w: 9, h: 0.6, align: "center", fontSize: 22, fontFace: FONT.heading, color: C.white, italic: true, bold: true });
  s.addText("www.fucaicolombia.org · comunicaciones@fucaicolombia.org",
    { x: 0.5, y: 3.9, w: 9, h: 0.4, align: "center", fontSize: 12, fontFace: FONT.body, color: C.white });
  return s;
}

module.exports = { C, FONT, titleSlide, contentSlide, sectionSlide, closingSlide };
