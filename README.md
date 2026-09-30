# Patricia Bertoche · Centro de masajes y relajación

Sitio estático (HTML, CSS y JS, sin dependencias) con 6 diseños intercambiables. Todo el contenido se edita en un solo archivo y las fotos se leen desde Cloudinary.

## Estructura

```
centro-relax/
├── index.html      Diseño 1 · Serenidad
├── atelier.html    Diseño 2 · Atelier
├── luz.html        Diseño 3 · Luz
├── bosque.html     Diseño 4 · Bosque
├── aurora.html     Diseño 5 · Aurora
├── mineral.html    Diseño 6 · Mineral
├── css/            Un archivo de estilos por diseño (estilos.css es el de Serenidad)
│                   + instalaciones.css (compartido por los 6)
└── js/
    ├── configuracion.js   Todos los datos editables
    ├── principal.js       Arma la página y conecta Cloudinary y WhatsApp
    └── selector.js        Barra para cambiar de diseño
```

Los 6 diseños usan el mismo contenido y los mismos scripts. Solo cambian el HTML (orden de secciones) y el CSS.

## Cómo editar el contenido

Todo se cambia en `js/configuracion.js`:

- **Contacto:** `contacto.whatsapp` (código de país + número, sin `+` ni espacios), `contacto.instagram` y `contacto.usuarioInstagram`.
- **Textos:** nombre del negocio, inicio, "Sobre mí", pasos de la visita, opiniones y formulario.
- **Servicios:** nombre, duración, precio y detalle. Al agregar o quitar uno, se actualiza también el formulario de reserva.
- **Avisos de ejemplo:** `mostrarNotas: false` oculta las notas "de ejemplo".

Los precios, testimonios y nombres actuales son de ejemplo: hay que reemplazarlos por los reales.

## Fotos (Cloudinary)

El sitio solo lee: no necesita `UPLOAD_PRESET`. Usa la cuenta `p0qlmlor` y busca las fotos **por etiqueta**, con el formato `proyecto_carpeta`:

| Carpeta en Cloudinary | Etiqueta | Se muestra en |
|---|---|---|
| `patriciabertoche/galeria` | `patriciabertoche_galeria` | Sección Galería |
| `patriciabertoche/imagenes` | `patriciabertoche_imagenes` | Foto de "Sobre mí" |
| `patriciabertoche/instalaciones` | `patriciabertoche_instalaciones` | Sección Instalaciones |

- La foto de "Sobre mí" es la que tenga `patricia` en el nombre (`cloudinary.palabraRetrato`); si no hay, se usa la primera.
- Alternativa directa: completar `cloudinary.fotoRetrato` con el ID público de la imagen.
- El título de cada foto de la galería sale del campo `caption` de Cloudinary.
- Mientras una carpeta no tenga fotos, la vista previa muestra en qué carpeta y con qué etiqueta subirlas (`vistasPreviasConCarpeta: false` lo desactiva).

Requisitos en Cloudinary:

1. Cada foto debe tener su etiqueta, escrita exactamente igual (ojo: `bertoche`, no `bartoche`).
2. Tiene que estar activada la opción **Resource list** en Settings > Security.
3. Cloudinary guarda la lista en caché unos minutos: si acabás de subir o etiquetar, esperá y recargá con Ctrl+F5.

Para comprobar una etiqueta, abrir en el navegador `https://res.cloudinary.com/p0qlmlor/image/list/<etiqueta>.json`. Si da 404, esa etiqueta no tiene fotos. El error rojo en la consola es normal mientras eso pase.

## Mostrar varios diseños a la clienta

Con `mostrarSelectorDisenos: true` aparece una barra flotante abajo para cambiar entre los diseños. La lista está en `disenos` (nombre y archivo).

Cuando la clienta elija:

1. Poner `mostrarSelectorDisenos: false`.
2. Renombrar el archivo elegido como `index.html` (y borrar los diseños que no se usen, con sus CSS).

## Publicar

Es un sitio estático: subir la carpeta completa a Netlify, GitHub Pages o cualquier hosting. Para probarlo en local, abrir `index.html` en el navegador.