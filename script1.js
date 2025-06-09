const botonMasInfo = document.getElementById('boton-mas-info');
const infoMas = document.getElementById('info-adicional');

botonMasInfo.addEventListener('click', () => {
    const expanded = botonMasInfo.getAttribute('aria-expanded') === 'true';
    if (expanded) {
        infoMas.setAttribute('hidden', '');
        botonMasInfo.setAttribute('aria-expanded', 'false');
    } else {
        infoMas.removeAttribute('hidden');
        botonMasInfo.setAttribute('aria-expanded', 'true');
    }
});

