// Cambiá este número por el WhatsApp real (código de país + número, sin + ni espacios)
const NUMERO_WHATSAPP = "59800000000";

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
let inhalando = true;
setInterval(() => {
  inhalando = !inhalando;
  textoRespiro.textContent = inhalando ? "Inhalá" : "Exhalá";
}, 5000);

// Formulario -> WhatsApp
const formulario = document.getElementById("formulario");
const error = document.getElementById("error");
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

  let mensaje = `Hola Patricia, soy ${nombre}. Quiero reservar: ${servicio}.`;
  if (horario) mensaje += ` Me viene bien: ${horario}.`;
  window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`, "_blank", "noopener");
});
