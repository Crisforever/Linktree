Linktree Crisforever
¡Bienvenido a mi proyecto de Linktree! Este repositorio contiene una página web al estilo de Linktree, creada con HTML, CSS y JavaScript. La página está diseñada para actuar como un punto central para tus enlaces más importantes.

![image](https://github.com/user-attachments/assets/ce1fcb7b-f578-450c-a1a3-8d02f2b1ae8e)


Características
Diseño Responsive: Adaptado para diferentes tamaños de pantalla.
Interactividad: Incluye partículas animadas de fondo para una experiencia visual atractiva.
Fácil de Personalizar: Ajusta fácilmente los enlaces y la apariencia según tus necesidades.
Tecnologías Utilizadas
HTML: Estructura de la página.
CSS: Estilos y diseño.
JavaScript: Funcionalidades interactivas.
Instalación y Uso
Clona el repositorio:

bash
git clone https://github.com/Crisforever/Linktree.git
Navega al directorio del proyecto:

bash
cd tu-repositorio
Abre index.html en tu navegador para ver la página en acción:

bash
open index.html
Tutorial: Cómo Modificar el Código
Cambiar los Enlaces de las Redes Sociales
Los enlaces de los botones se encuentran en el archivo index.html y son gestionados en el archivo main.js. Para modificar estos enlaces:

Modifica el archivo main.js:

Busca la sección que define los enlaces:

javascript
const urls = {
    instagram: "https://www.instagram.com/cris_x100pre",
    github: "https://github.com/Crisforever",
    gmail: "mailto:cristianrosas3003@gmail.com"
};
Cambia las URLs según tus necesidades.

Actualiza el archivo index.html:

Si quieres cambiar el texto o el icono de los botones, edita la sección:

html
<button type="button" class="btn" id="btn-ig">
    <strong><i class="fa-brands fa-instagram"></i></strong>
    <strong>Instagram</strong>
    ...
</button>
Reemplaza fa-instagram por el ícono deseado y cambia el texto Instagram por lo que prefieras.

Personalizar el Estilo
Para cambiar el estilo de la página, edita el archivo index.css. Puedes ajustar colores, tamaños y fuentes según tus preferencias.

Accede al archivo index.css y realiza los cambios necesarios:

css
body {
    font-family: 'Montserrat', sans-serif;
    background-color: #f0f0f0;
}
Guarda los cambios y actualiza la página en tu navegador para ver los efectos.

Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, por favor, abre un pull request o reporta cualquier problema en la sección de Issues.

Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
