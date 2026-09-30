// Selector de diseños para mostrarle varias opciones al cliente.
// Se configura en js/configuracion.js (disenos y mostrarSelectorDisenos).
(function () {
  const C = CONFIGURACION;
  if (!C.mostrarSelectorDisenos || !Array.isArray(C.disenos) || C.disenos.length < 2) return;

  const actual = location.pathname.split("/").pop() || "index.html";
  const estilo = document.createElement("style");
  estilo.textContent = `
    .selector-disenos{position:fixed;left:50%;bottom:calc(.8rem + env(safe-area-inset-bottom,0px));transform:translateX(-50%);z-index:999;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:.3rem;padding:.35rem;background:rgba(20,20,24,.92);border-radius:22px;width:max-content;box-shadow:0 6px 24px rgba(0,0,0,.3);font:500 .85rem system-ui,sans-serif;color:#fff;max-width:96vw}
    .selector-disenos span{padding:0 .6rem;opacity:.7}
    .selector-disenos a{color:#fff;text-decoration:none;padding:.45rem .9rem;border-radius:99px}
    .selector-disenos a:hover{background:rgba(255,255,255,.15)}
    .selector-disenos a[aria-current="page"]{background:#fff;color:#141418}`;
  document.head.append(estilo);

  const caja = document.createElement("nav");
  caja.className = "selector-disenos";
  caja.setAttribute("aria-label", "Elegir diseño");
  const etiqueta = document.createElement("span");
  etiqueta.textContent = "Diseño";
  caja.append(etiqueta);
  C.disenos.forEach((d, i) => {
    const a = document.createElement("a");
    a.href = d.archivo;
    a.textContent = `${i + 1} · ${d.nombre}`;
    if (d.archivo === actual) a.setAttribute("aria-current", "page");
    caja.append(a);
  });
  document.body.append(caja);
})();
