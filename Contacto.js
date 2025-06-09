document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contacto-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const datosDiv = document.createElement("div");
        datosDiv.classList.add("respuesta-contacto");
        datosDiv.innerHTML = `
            <h3>¡Gracias por tu mensaje!</h3>
            <p>Puedes contactarme directamente a través de los siguientes medios:</p>
            <ul>
                <li>📞 Teléfono: <strong><a href="tel:228-311-3759"> 228-311-3759</a></strong></li>
                <li>📘 Facebook: <strong><a href="https://www.facebook.com/profile.php?id=100012281794078&locale=es_LA" target="_blank">facebook.com/Yael.Contreras</a></strong></li>
                <li>📷 Instagram: <strong><a href="https://www.instagram.com/yaelgtz__/" target="_blank">@yaelgtz_</a></strong></li>
            </ul>
        `;

        form.style.display = "none";

        form.parentNode.appendChild(datosDiv);s
    });
});
