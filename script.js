// Cambia el color de fondo al hacer clic en el botón
document.getElementById("changeColorButton").onclick = function() {
    document.body.style.backgroundColor = "#f39c12";  // Color de fondo
};

// Mostrar el botón de scroll al principio cuando se desplaza hacia abajo
window.onscroll = function() {
    var button = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        button.style.display = "block";  // Mostrar el botón
    } else {
        button.style.display = "none";  // Ocultar el botón
    }
};
