/**
 * fucai_docx.js — Reusable FUCAI Word (.docx) builders.
 *
 * Why this exists: building a FUCAI document by hand re-introduces bugs
 * (orange covers, the rId0 header-image crash, drifting spacing). These
 * builders are pre-tested and encode every hard rule, so Claude EXECUTES
 * them instead of reconstructing code each time.
 *
 * Usage:
 *   const F = require("<skill>/scripts/fucai_docx.js");
 *   const doc = F.assembleDoc({
 *     cover: F.buildCover({ title, subtitle, pillar, date, project }),
 *     body:  [ F.h1("...", "pilar"), F.body("..."), F.heroNumber("423","..."),
 *              F.voiceQuote("...", "— ..."), F.dataTable({headers, rows, numeric}) ],
 *     back:  F.buildBackCover({ slogan, contact })
 *   });
 *   await F.writeDoc(doc, "/mnt/user-data/outputs/FUCAI_Informe_Tema_2026-06.docx");
 *
 * Then ALWAYS run scripts/check_fucai.py on the output.
 */
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, ImageRun,
  Header, Footer, AlignmentType, BorderStyle, WidthType, ShadingType,
  VerticalAlign, PageNumber, HeightRule
} = require("docx");

// ---- Valores de marca: leidos de 03_tokens/tokens.json via lib (NO quemados) ----
// Adaptado del skill fucai-branding: misma logica; colores, familias y la escala
// principal (cover/h1/h2/body/caption/footer) provienen de tokens.json.
const { C, FONT, SZ } = require("../lib/tokens.js");

// Assets resolve relative to THIS file — no <SKILL_ASSETS_DIR> placeholder to forget.
const ASSETS = path.join(__dirname, "..", "..", "02_identidad-visual", "logo");
const logoNaranja = () => fs.readFileSync(path.join(ASSETS, "logo_naranja.png"));

const PAGE = { width: 12240, height: 15840 }; // US Letter (DXA)
const PROPS = { page: { size: { width: PAGE.width, height: PAGE.height },
  margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } };

const noB = { top:{style:BorderStyle.NONE}, bottom:{style:BorderStyle.NONE}, left:{style:BorderStyle.NONE},
  right:{style:BorderStyle.NONE}, insideHorizontal:{style:BorderStyle.NONE}, insideVertical:{style:BorderStyle.NONE} };

// ---- Small helpers ----
const sp = (pts) => new Paragraph({ spacing: { after: pts * 20 }, children: [ new TextRun({ text: "" }) ] });

function h1(text, pillar) {
  const out = [ new Paragraph({ spacing: { before: 120, after: pillar ? 40 : 160 },
    children: [ new TextRun({ text, font: FONT.heading, size: SZ.h1, bold: true, color: C.primary }) ] }) ];
  if (pillar) out.push(new Paragraph({ spacing: { after: 200 },
    children: [ new TextRun({ text: pillar, font: FONT.body, size: SZ.body, italics: true, color: C.grayMedium }) ] }));
  return out;
}
function h2(text) { return new Paragraph({ spacing: { before: 120, after: 100 },
  children: [ new TextRun({ text, font: FONT.heading, size: SZ.h2, bold: true, color: C.primary }) ] }); }
function body(text) { return new Paragraph({ alignment: AlignmentType.JUSTIFIED, spacing: { after: 160, line: 312 },
  children: [ new TextRun({ text, font: FONT.body, size: SZ.body, color: C.black }) ] }); }
function heroNumber(number, caption) {
  return [ new Paragraph({ spacing: { before: 80, after: 0 },
      children: [ new TextRun({ text: String(number), font: FONT.heading, size: 96, bold: true, color: C.primary }) ] }),
    new Paragraph({ spacing: { after: 220 },
      children: [ new TextRun({ text: caption, font: FONT.body, size: SZ.body, color: C.grayText }) ] }) ];
}
function voiceQuote(quote, attribution) {
  return new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, borders: noB,
    rows: [ new TableRow({ children: [ new TableCell({
      borders: { ...noB, left: { style: BorderStyle.SINGLE, size: 24, color: C.primary, space: 6 } },
      margins: { top: 80, bottom: 80, left: 240, right: 120 }, children: [
        new Paragraph({ spacing: { after: 60 }, children: [ new TextRun({ text: quote, font: FONT.body, size: 24, italics: true, color: C.black }) ] }),
        new Paragraph({ children: [ new TextRun({ text: attribution, font: FONT.body, size: SZ.caption, color: C.grayText }) ] }),
      ] }) ] }) ] });
}
/** dataTable({ headers:[...], rows:[[...]], numeric:true }) — orange header, alternate arena rows, horizontal rules only. */
function dataTable({ headers, rows, numeric = true }) {
  const align = (i) => (numeric && i > 0) ? AlignmentType.RIGHT : AlignmentType.LEFT;
  return new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, borders: { ...noB }, rows: [
    new TableRow({ tableHeader: true, children: headers.map((hd, i) => new TableCell({
      shading: { fill: C.primary, type: ShadingType.CLEAR, color: "auto" }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, borders: noB,
      children: [ new Paragraph({ alignment: align(i), children: [ new TextRun({ text: hd, font: FONT.body, size: SZ.body, bold: true, color: C.white }) ] }) ] })) }),
    ...rows.map((r, ri) => new TableRow({ children: r.map((v, ci) => new TableCell({
      shading: ri % 2 === 1 ? { fill: C.lightSand, type: ShadingType.CLEAR, color: "auto" } : { fill: C.white, type: ShadingType.CLEAR, color: "auto" },
      margins: { top: 70, bottom: 70, left: 120, right: 120 }, borders: { ...noB, bottom: { style: BorderStyle.SINGLE, size: 4, color: C.grayLight } },
      children: [ new Paragraph({ alignment: align(ci), children: [ new TextRun({ text: String(v), font: FONT.body, size: 20, color: C.black }) ] }) ] })) }))
  ] });
}

// ---- Headers / footers ----
const emptyHeader = () => new Header({ children: [ new Paragraph({ children: [ new TextRun({ text: "" }) ] }) ] });
const textHeader = () => new Header({ children: [ new Paragraph({ alignment: AlignmentType.RIGHT,
  border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: C.primary, space: 4 } },
  children: [ new TextRun({ text: "Fundación Caminos de Identidad — FUCAI", font: FONT.body, size: SZ.footer, color: C.grayMedium }) ] }) ] });
const standardFooter = () => new Footer({ children: [
  new Paragraph({ border: { top: { style: BorderStyle.SINGLE, size: 24, color: C.primary } }, spacing: { before: 100 }, alignment: AlignmentType.CENTER,
    children: [ new TextRun({ text: "Fundación Caminos de Identidad – FUCAI | www.fucaicolombia.org", font: FONT.body, size: SZ.footer, italics: true, color: C.grayText }) ] }),
  new Paragraph({ alignment: AlignmentType.RIGHT, children: [ new TextRun({ children: [ PageNumber.CURRENT ], font: FONT.body, size: SZ.footer, color: C.grayText }) ] })
] });

// Cover footer = warm arena band (anchored at the page bottom regardless of body height).
function coverFooterBand({ date = "", project = "", slogan = "Nuestro centro es la periferia" }) {
  const lines = [];
  if (date) lines.push(new Paragraph({ spacing: { after: 50 }, children: [ new TextRun({ text: date, font: FONT.body, size: SZ.body, color: C.grayText }) ] }));
  if (project) lines.push(new Paragraph({ spacing: { after: 50 }, children: [ new TextRun({ text: project, font: FONT.body, size: SZ.body, color: C.grayText }) ] }));
  lines.push(new Paragraph({ children: [ new TextRun({ text: slogan, font: FONT.body, size: SZ.body, italics: true, color: C.primary }) ] }));
  return new Footer({ children: [ new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, borders: noB,
    rows: [ new TableRow({ height: { value: 1700, rule: HeightRule.ATLEAST }, children: [ new TableCell({
      shading: { fill: C.arena, type: ShadingType.CLEAR, color: "auto" }, verticalAlign: VerticalAlign.CENTER,
      margins: { top: 180, bottom: 180, left: 300, right: 300 }, borders: noB, children: lines }) ] }) ] }) ] });
}
// Back-cover footer = thin orange bottom bar (anchored).
function backFooterBar(url = "www.fucaicolombia.org") {
  return new Footer({ children: [ new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, borders: noB,
    rows: [ new TableRow({ height: { value: 440, rule: HeightRule.ATLEAST }, children: [ new TableCell({
      shading: { fill: C.primary, type: ShadingType.CLEAR, color: "auto" }, verticalAlign: VerticalAlign.CENTER, borders: noB,
      children: [ new Paragraph({ alignment: AlignmentType.CENTER, children: [ new TextRun({ text: url, font: FONT.body, size: SZ.caption, color: C.white }) ] }) ] }) ] }) ] }) ] });
}

// ---- Cover & back cover (WHITE; warmth via arena band; one orange hairline) ----
function buildCover({ title, subtitle = "", pillar = "Nuestro centro es la periferia" }) {
  const c = [
    sp(16),
    new Paragraph({ alignment: AlignmentType.LEFT, spacing: { after: 90 },
      children: [ new ImageRun({ data: logoNaranja(), transformation: { width: 151, height: 76 }, type: "png" }) ] }),
    new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: C.primary, space: 1 } }, spacing: { after: 0 }, children: [ new TextRun({ text: "" }) ] }),
    sp(250),
    new Paragraph({ spacing: { after: subtitle ? 120 : 0 },
      children: [ new TextRun({ text: title, font: FONT.heading, size: SZ.coverTitle, bold: true, color: C.primary, characterSpacing: -12 }) ] }),
  ];
  if (subtitle) c.push(new Paragraph({ spacing: { after: 70 }, children: [ new TextRun({ text: subtitle, font: FONT.body, size: 28, color: C.grayText }) ] }));
  if (pillar) c.push(new Paragraph({ children: [ new TextRun({ text: pillar, font: FONT.body, size: 24, italics: true, color: C.grayMedium }) ] }));
  return c;
}
function buildBackCover({ slogan = "Nuestro centro es la periferia", contact = [
  "Fundación Caminos de Identidad — FUCAI",
  "www.fucaicolombia.org · comunicaciones@fucaicolombia.org",
  "NIT 800.173.574-1" ] }) {
  const c = [ sp(230),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 240 },
      children: [ new ImageRun({ data: logoNaranja(), transformation: { width: 180, height: 90 }, type: "png" }) ] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 },
      children: [ new TextRun({ text: slogan, font: FONT.heading, size: SZ.h2, italics: true, bold: true, color: C.primary }) ] }),
  ];
  contact.forEach((line, i) => c.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: i < contact.length - 1 ? 30 : 0 },
    children: [ new TextRun({ text: line, font: FONT.body, size: 20, color: C.grayText }) ] })));
  return c;
}

// ---- Assemble: 3 sections (cover / body / back), explicit white page background ----
function assembleDoc({ cover, body, back, coverBand = {} }) {
  const sections = [
    { properties: PROPS, headers: { default: emptyHeader() }, footers: { default: coverFooterBand(coverBand) }, children: cover },
    { properties: PROPS, headers: { default: textHeader() }, footers: { default: standardFooter() }, children: body },
  ];
  if (back) sections.push({ properties: PROPS, headers: { default: emptyHeader() }, footers: { default: backFooterBar() }, children: back });
  return new Document({ background: { color: C.white }, sections });
}
async function writeDoc(doc, outPath) {
  const buf = await Packer.toBuffer(doc);
  fs.writeFileSync(outPath, buf);
  return outPath;
}

module.exports = { C, FONT, PROPS, sp, h1, h2, body, heroNumber, voiceQuote, dataTable,
  emptyHeader, textHeader, standardFooter, coverFooterBand, backFooterBar,
  buildCover, buildBackCover, assembleDoc, writeDoc };
