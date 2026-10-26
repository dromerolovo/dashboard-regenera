export const COR = {verde: "#00432C", creme: "#F0EAD8", lima: "#D2E484", salvia: "#A2C6BA", palido: "#DEEACC", laranja: "#F06636", tijolo: "#B13F14"};
export const PAL = ["#D2E484", "#F0EAD8", "#A2C6BA", "#FC9C0C", "#F06636", "#C9A48A", "#7FA596", "#FFB08F", "#E6EFB8"];
export const IC = {
  casa: "M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6", escola: "M3 21h18M5 21V9l7-5 7 5v12M9 21v-4h6v4",
  cap: "M2 9l10-5 10 5-10 5-10-5zM6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5", medal: "M12 14a5 5 0 100-10 5 5 0 000 10zM8.5 12.5L7 21l5-3 5 3-1.5-8.5",
  mala: "M3 7h18v13H3zM8 7V4h8v3M3 12h18", mulher: "M12 13a4 4 0 100-8 4 4 0 000 8zM12 13v8M9 18h6",
  coracao: "M12 21s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 11c0 5.5-7 10-7 10z", pessoa: "M12 11a4 4 0 100-8 4 4 0 000 8zM4 21v-1a6 6 0 0112 0v1",
  broto: "M12 21v-9M12 12c0-4 3-7 8-7 0 5-3 8-8 7zM12 14c0-3-2-5-6-5 0 4 2 6 6 5", grafico: "M3 17l6-6 4 4 8-8M15 7h6v6",
  sorriso: "M12 22a10 10 0 100-20 10 10 0 000 20zM8 14s1.5 2 4 2 4-2 4-2"
};
export const SVGNS = "http://www.w3.org/2000/svg";
export const EASE = "cubic-bezier(.2,.8,.2,1)";

export const nf = (n) => Math.round(n).toLocaleString("pt-BR");
export const mi = (v) => (v / 1e6).toLocaleString("pt-BR", {maximumFractionDigits: v < 1e8 ? 2 : 1});
export const rsmi = (v) => "R$ " + mi(v) + " mi";
export const x1 = (v) => v.toLocaleString("pt-BR", {maximumFractionDigits: 1});

export function el(tag, style, ...kids) {
  const e = document.createElement(tag);
  if (style) e.style.cssText = style;
  for (const k of kids.flat()) if (k != null && k !== false) e.append(k instanceof Node ? k : document.createTextNode(String(k)));
  return e;
}
export function svg(tag, attrs = {}) {
  const e = document.createElementNS(SVGNS, tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
}
export function iconSvg(path, size, stroke, sw = 1.9) {
  const s = svg("svg", {width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke, "stroke-width": sw, "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"});
  s.append(svg("path", {d: path}));
  return s;
}
export const SEG = (on) => "font:600 13px Manrope,sans-serif;border:0;border-radius:999px;padding:10px 16px;cursor:pointer;" +
  (on ? `background:${COR.lima};color:${COR.verde}` : `background:transparent;color:${COR.creme}`);
export const ROW = `display:flex;flex-direction:column;gap:6px;width:100%;text-align:left;font-family:Manrope,sans-serif;color:${COR.creme};border:0;border-radius:16px;padding:10px 12px;cursor:pointer;`;
export const CARD = "background:rgba(240,234,216,.05);border:1px solid rgba(210,228,132,.16);border-radius:28px;";
export const KICK = `font:600 11px Unbounded,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:${COR.laranja}`;
export const H2 = "margin:6px 0 0;font:800 clamp(30px,3.4vw,46px)/1.02 Unbounded,sans-serif;letter-spacing:-0.03em";
export const GROUP = (b) => `display:flex;gap:4px;padding:5px;background:rgba(0,30,20,.55);border:1px solid ${b};border-radius:999px`;

export function textoEstavel(style, textos) {
  const box = el("div", "display:grid");
  const ps = Object.fromEntries(Object.entries(textos).map(([k, t]) => {
    const p = el("p", style + ";grid-area:1/1", t);
    box.append(p);
    return [k, p];
  }));
  return {el: box, mostrar: (k) => { for (const [j, p] of Object.entries(ps)) { p.style.visibility = j === k ? "visible" : "hidden"; p.setAttribute("aria-hidden", j === k ? "false" : "true"); } }};
}

export function cabecalhoSecao(kicker, titulo, ...controles) {
  return el("div", "display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:16px",
    el("div", null, el("span", KICK, kicker), el("h2", H2, titulo)),
    el("div", "display:flex;gap:10px;flex-wrap:wrap", controles));
}

export const embrulho = (no) => { const w = el("div", `color:${COR.creme};font-family:Manrope,system-ui,sans-serif`, no); w.className = "painel"; return w; };
