// Obtener elementos del DOM
const verDetallesButton = document.getElementById('verDetalles');
const volverButton = document.getElementById('volver');
const contenido = document.querySelector('.contenido');

// Evento para voltear la tarjeta al hacer clic en "Ver Detalles"
verDetallesButton.addEventListener('click', () => {
    contenido.classList.add('volteada');
});

// Evento para regresar a la cara frontal
volverButton.addEventListener('click', () => {
    contenido.classList.remove('volteada');
});
