// Botón para cambiar el color de fondo
document.getElementById("changeColorButton").onclick = function () {
    document.body.style.backgroundColor = "#f39c12"; // Color de fondo
};

// Botón para alternar el modo oscuro
document.getElementById("toggleDarkMode").onclick = function () {
    document.body.classList.toggle("dark-mode");
};

// Mostrar el botón de scroll al inicio
window.onscroll = function () {
    const scrollToTopButton = document.querySelector(".scroll-to-top");
    if (document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// Evento del botón de scroll al inicio
document.querySelector(".scroll-to-top").onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Barra de búsqueda: mensaje en consola
document.getElementById("searchButton").onclick = function () {
    const searchQuery = document.getElementById("searchInput").value;
    console.log("Buscando:", searchQuery);
    alert("Función de búsqueda activada. Buscando: " + searchQuery);
};

// Carrusel de imágenes: simulación de clic
const carouselItems = document.querySelectorAll(".carousel-item img");
carouselItems.forEach((item) => {
    item.onclick = function () {
        alert("Has hecho clic en una imagen del carrusel.");
    };
});

// Testimonios: simulación de botón de acción
const testimonialButtons = document.querySelectorAll(".testimonial button");
testimonialButtons.forEach((button) => {
    button.onclick = function () {
        alert("Gracias por tu feedback!");
    };
};

// Mensaje al cargar la página
window.onload = function () {
    console.log("Página cargada correctamente.");
};
