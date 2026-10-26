import {COR, el, embrulho} from "./base.js";

function Cabecalho(d) {
  const nav = el("nav", "display:flex;gap:6px;flex-wrap:wrap;font-size:14px;font-weight:600",
    [["#valorizacoes", "Valorizações"], ["#pessoas", "Pessoas"], ["#eixos", "Eixos"]].map(([h, t]) => {
      const a = el("a", `padding:10px 16px;border-radius:999px;background:rgba(240,234,216,.08);color:${COR.lima}`, t);
      a.href = h;
      return a;
    }));
  nav.setAttribute("aria-label", "Seções");
  return el("header", "display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:14px;padding-bottom:18px;border-bottom:1px solid rgba(240,234,216,.14)",
    el("div", "display:flex;align-items:center;gap:14px;flex-wrap:wrap",
      el("div", "font-family:Unbounded,sans-serif;font-weight:800;font-size:18px", "Regenera", el("span", `color:${COR.lima}`, "RS")),
      el("span", `font-size:13px;color:${COR.salvia}`, `Painel de impacto · ciclo ${d.meta.ciclo}`)),
    nav);
}

export const cabecalho = (d) => embrulho(Cabecalho(d));

export function rodape(d) {
  return embrulho(el("p", `margin:0;font-size:12px;line-height:1.5;color:${COR.salvia}`, `Dados: monitoramento RegeneraRS, ciclo ${d.meta.ciclo}.`));
}
