// Toda la información editable está en js/configuracion.js
const C = CONFIGURACION;

// Lee un valor de la configuración con ruta tipo "inicio.titulo"
const leer = (ruta) => ruta.split(".").reduce((o, k) => (o ? o[k] : undefined), C);

// Crea un elemento con clase y texto (textContent: seguro ante HTML)
function crear(etiqueta, clase, texto) {
  const el = document.createElement(etiqueta);
  if (clase) el.className = clase;
  if (texto !== undefined) el.textContent = texto;
  return el;
}

// Textos y enlaces simples
document.querySelectorAll("[data-texto]").forEach((el) => {
  el.textContent = leer(el.dataset.texto) ?? "";
});
document.querySelectorAll("[data-enlace]").forEach((el) => {
  el.href = leer(el.dataset.enlace);
});
document.title = `${C.negocio.nombre} | ${C.negocio.lema}`;
document.querySelectorAll(".nota").forEach((n) => (n.hidden = !C.mostrarNotas));

// Servicios (acordeón) y opciones del formulario
const listaServicios = document.getElementById("lista-servicios");
const campoServicio = document.getElementById("campo-servicio");
campoServicio.append(new Option(C.reserva.opcionVacia, ""));
C.servicios.lista.forEach((s, i) => {
  const d = crear("details");
  d.name = "servicio";
  d.open = i === 0;
  const resumen = crear("summary");
  resumen.append(crear("span", "", s.nombre));
  resumen.append(crear("small", "", [s.duracion, s.precio].filter(Boolean).join(" · ")));
  d.append(resumen, crear("p", "", s.detalle));
  listaServicios.append(d);
  campoServicio.append(new Option(s.nombre, s.nombre));
});
document.getElementById("campo-horario").placeholder = C.reserva.ejemploHorario;

// Galería
const listaGaleria = document.getElementById("lista-galeria");
C.galeria.fotos.forEach((titulo, i) => {
  const foto = crear("div", `foto f${i + 1}`);
  foto.append(crear("span", "", titulo));
  listaGaleria.append(foto);
});

// Sobre mí
const parrafos = document.getElementById("parrafos-sobre-mi");
C.sobreMi.parrafos.forEach((t) => parrafos.append(crear("p", "", t)));
document.querySelector(".retrato").setAttribute("aria-label", C.sobreMi.textoFoto);

// Pasos de la visita
const listaPasos = document.getElementById("lista-pasos");
C.visita.pasos.forEach((p) => {
  const li = crear("li");
  li.append(crear("strong", "", p.titulo), document.createTextNode(p.detalle));
  listaPasos.append(li);
});

// Opiniones
const listaOpiniones = document.getElementById("lista-opiniones");
C.opiniones.lista.forEach((o) => {
  const b = crear("blockquote");
  b.append(crear("p", "", o.texto), crear("cite", "", o.autor));
  listaOpiniones.append(b);
});

// Menú móvil
const botonMenu = document.querySelector(".menu-boton");
const menu = document.getElementById("menu");
botonMenu.addEventListener("click", () => {
  const abierto = menu.classList.toggle("abierto");
  botonMenu.setAttribute("aria-expanded", abierto);
});
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("abierto");
    botonMenu.setAttribute("aria-expanded", "false");
  }
});

// Texto del círculo sincronizado con la animación (10 s: 5 inhalar, 5 exhalar)
const textoRespiro = document.getElementById("respiro-texto");
let inhalando = false;
function alternar() {
  inhalando = !inhalando;
  textoRespiro.textContent = inhalando ? C.inicio.textoInhalar : C.inicio.textoExhalar;
}
alternar();
setInterval(alternar, 5000);

// Formulario -> WhatsApp
const formulario = document.getElementById("formulario");
const error = document.getElementById("error");
error.textContent = C.reserva.error;
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const datos = new FormData(formulario);
  const nombre = datos.get("nombre").trim();
  const servicio = datos.get("servicio");
  const horario = datos.get("horario").trim();

  if (!nombre || !servicio) {
    error.hidden = false;
    return;
  }
  error.hidden = true;

  let mensaje = `${C.contacto.saludo}, soy ${nombre}. Quiero reservar: ${servicio}.`;
  if (horario) mensaje += ` Me viene bien: ${horario}.`;
  window.open(`https://wa.me/${C.contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`, "_blank", "noopener");
});
