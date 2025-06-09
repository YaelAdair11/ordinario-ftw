const botonInfoPersonal = document.getElementById('boton-info-personal');
const divInfoPersonal = document.getElementById('info-personal');

botonInfoPersonal.addEventListener('click', () => {
    const expanded = botonInfoPersonal.getAttribute('aria-expanded') === 'true';

    if (expanded) {
        divInfoPersonal.setAttribute('hidden', '');
        botonInfoPersonal.setAttribute('aria-expanded', 'false');
    } else {
        fetch('info.xml')
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo cargar el archivo XML');
                }
                return response.text();
            })
            .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
            .then(data => {
                const nombre = data.querySelector('nombre')?.textContent.trim() || 'N/A';
                const edad = data.querySelector('edad')?.textContent.trim() || 'N/A';
                const carrera = data.querySelector('carrera')?.textContent.trim() || 'N/A';
                const hobbies = data.querySelector('hobbies')?.textContent.trim() || 'N/A';
                const deporte = data.querySelector('Deporte')?.textContent.trim() || 'N/A';

                divInfoPersonal.innerHTML = `
                    <h3>Información Personal</h3>
                    <ul>
                        <li><strong>Nombre:</strong> ${nombre}</li>
                        <li><strong>Edad:</strong> ${edad}</li>
                        <li><strong>Carrera:</strong> ${carrera}</li>
                        <li><strong>Hobbies:</strong> ${hobbies}</li>
                        <li><strong>Deporte:</strong> <pre style="white-space: pre-wrap; font-family: inherit;">${deporte}</pre></li>
                    </ul>
                `;
                divInfoPersonal.removeAttribute('hidden');
                botonInfoPersonal.setAttribute('aria-expanded', 'true');
            })
            .catch(error => {
                divInfoPersonal.innerHTML = `<p style="color: red;">Error cargando información: ${error.message}</p>`;
                divInfoPersonal.removeAttribute('hidden');
                botonInfoPersonal.setAttribute('aria-expanded', 'true');
            });
    }
});
