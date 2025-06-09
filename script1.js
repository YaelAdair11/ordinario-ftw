document.addEventListener("DOMContentLoaded", () => {
    const botonMasInfo = document.getElementById('boton-mas-info');
    const infoMas = document.getElementById('info-adicional');

    botonMasInfo.addEventListener('click', () => {
        const expanded = botonMasInfo.getAttribute('aria-expanded') === 'true';

        if (expanded) {
            // Ocultar contenido
            infoMas.setAttribute('hidden', '');
            botonMasInfo.setAttribute('aria-expanded', 'false');
            // Avisar que se ocultó
            botonMasInfo.setAttribute('aria-label', 'Mostrar más información');
        } else {
            // Mostrar contenido
            infoMas.removeAttribute('hidden');
            botonMasInfo.setAttribute('aria-expanded', 'true');
            botonMasInfo.setAttribute('aria-label', 'Ocultar más información');
            infoMas.setAttribute('tabindex', '-1');
            infoMas.focus();
        }
    });
});
