const contendor = document.querySelector('#contenedor');

document.querySelector('#boton-menu').addEventListener('click', () => {
    contendor.classList.toggle('active');
})