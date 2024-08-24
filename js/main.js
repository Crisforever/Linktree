// URLs de las redes sociales
const urls = {
    instagram: "https://www.instagram.com/cris_x100pre",
    github: "https://github.com/Crisforever",
    gmail: "mailto:cristianrosas3003@gmail.com" // Enlace a Gmail
};

// Función para abrir una nueva pestaña
const newTab = (buttonId) => {
    switch (buttonId) {
        case "btn-ig":
            window.open(urls.instagram, "_blank");
            break;
        case "btn-gh":
            window.open(urls.github, "_blank");
            break;
        case "btn-gm":
            window.location.href = urls.gmail; // Para abrir el cliente de correo con un nuevo mensaje
            break;
        default:
            console.log("Botón no reconocido");
            break;
    }
};

// Asignar la función a los botones después de que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-ig").addEventListener("click", () => newTab("btn-ig"));
    document.getElementById("btn-gh").addEventListener("click", () => newTab("btn-gh"));
    document.getElementById("btn-gm").addEventListener("click", () => newTab("btn-gm"));
});

