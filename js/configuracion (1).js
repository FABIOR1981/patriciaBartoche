// ============================================================
// CONFIGURACIÓN DEL SITIO
// Editá solo este archivo para cambiar textos, contacto y datos.
// ============================================================
const CONFIGURACION = {

  // Mostrar u ocultar los avisos "de ejemplo" (poné false al publicar)
  mostrarNotas: true,

  // Fotos desde Cloudinary (solo lectura: no se necesita upload preset)
  // El gestor de imágenes etiqueta cada foto como "<proyecto>_<carpeta>"
  cloudinary: {
    nombreNube: "p0qlmlor",
    proyecto: "patriciabertoche",
    carpetaGaleria: "galeria",    // etiqueta: patriciabertoche_galeria
    carpetaImagenes: "imagenes",  // etiqueta: patriciabertoche_imagenes
    palabraRetrato: "patricia"    // la foto de "Sobre mí" es la que tenga esta palabra en el nombre
  },

  negocio: {
    nombre: "Patricia Bertoche",
    lema: "Masajes y relajación",
    pie: "Patricia Bertoche · Masajes y relajación"
  },

  contacto: {
    whatsapp: "59800000000", // código de país + número, sin + ni espacios
    instagram: "https://www.instagram.com/patricia_bertoche/",
    usuarioInstagram: "@patricia_bertoche",
    saludo: "Hola Patricia"
  },

  inicio: {
    titulo: "Una hora para volver a vos",
    texto: "Masajes, tratamientos corporales y estética en un espacio pensado para bajar el ritmo.",
    botonReserva: "Reservar mi turno",
    botonServicios: "Ver servicios",
    textoInhalar: "Inhalá",
    textoExhalar: "Exhalá"
  },

  servicios: {
    titulo: "Servicios",
    intro: "Tocá un servicio para ver de qué se trata. Todos se adaptan a cómo llegás ese día.",
    nota: "Duraciones y precios de ejemplo: reemplazalos por los reales.",
    lista: [
      { nombre: "Masaje relajante", duracion: "60 min", precio: "$1.800", detalle: "Movimientos lentos y continuos con aceites tibios para soltar la tensión del día a día." },
      { nombre: "Descontracturante", duracion: "50 min", precio: "$1.800", detalle: "Trabajo profundo en cuello, espalda y hombros, para zonas cargadas por postura o estrés." },
      { nombre: "Drenaje linfático", duracion: "60 min", precio: "$1.900", detalle: "Técnica suave que ayuda a reducir la retención de líquidos y la sensación de pesadez." },
      { nombre: "Piedras calientes", duracion: "75 min", precio: "$2.400", detalle: "Calor mineral sobre puntos clave del cuerpo para una relajación muscular más profunda." },
      { nombre: "Limpieza facial", duracion: "60 min", precio: "$1.700", detalle: "Limpieza, exfoliación e hidratación según tu tipo de piel, con masaje facial incluido." },
      { nombre: "Tratamientos corporales", duracion: "Consultar", precio: "", detalle: "Exfoliaciones e hidratación corporal para renovar la piel. Escribinos y armamos el plan." }
    ]
  },

  galeria: {
    titulo: "Galería",
    intro: "Un vistazo al espacio y a los tratamientos. Más fotos en Instagram.",
    boton: "Ver más en Instagram",
    nota: "Las fotos vienen de Cloudinary (patriciabertoche/galeria). Mientras no haya, se muestran bloques de ejemplo.",
    fotos: ["Cabina de masajes", "Aceites y aromas", "Piedras calientes", "Sala de té", "Facial"]
  },

  sobreMi: {
    titulo: "Hola, soy Patricia",
    parrafos: [
      "Trabajo con las manos y con el tiempo: cada sesión empieza escuchando cómo estás y termina con un momento de silencio para que el cuerpo asiente.",
      "Mi centro es un lugar tranquilo, con luz baja, música suave y productos cuidados."
    ],
    botonInstagram: "Seguime en Instagram",
    textoFoto: "Foto de Patricia"
  },

  visita: {
    titulo: "Cómo es tu visita",
    pasos: [
      { titulo: "Llegás y te tomás un té.", detalle: "Unos minutos para dejar el celular y respirar." },
      { titulo: "Charlamos.", detalle: "Me contás dónde sentís tensión o qué querés lograr." },
      { titulo: "Sesión.", detalle: "Camilla tibia, aromas suaves y un ritmo a tu medida." },
      { titulo: "Cierre.", detalle: "Te dejo recomendaciones simples para cuidarte en casa." }
    ]
  },

  opiniones: {
    titulo: "Lo que dicen quienes vinieron",
    nota: "Opiniones de ejemplo: reemplazalas por testimonios reales con permiso de cada persona.",
    lista: [
      { texto: "Salí con el cuerpo liviano y la cabeza en calma. Volví al mes siguiente.", autor: "María L." },
      { texto: "Patricia escucha antes de empezar y se nota. El descontracturante me cambió la semana.", autor: "Andrés P." },
      { texto: "Un lugar tranquilo, prolijo y cálido. Ideal para desconectar.", autor: "Lucía R." }
    ]
  },

  reserva: {
    titulo: "Reservá tu turno",
    intro: "Completá el formulario y se abre WhatsApp con tu mensaje listo para enviar.",
    etiquetaNombre: "Nombre",
    etiquetaServicio: "Servicio",
    opcionVacia: "Elegí uno",
    etiquetaHorario: "Día y horario preferido",
    ejemploHorario: "Ej: jueves por la tarde",
    boton: "Enviar por WhatsApp",
    error: "Completá tu nombre y elegí un servicio para continuar."
  }
};
