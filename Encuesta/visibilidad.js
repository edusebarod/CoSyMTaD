function mostrarSection() {
    const respuesta = document.getElementById('docente-si').checked;
    const extraSection = document.getElementById('extra-section');
    const oneSection = document.getElementById('one-section');
    const otrasRadio = document.getElementById('otras');
    const otrasTexto = document.getElementById('otras-texto');

    // Mostrar u ocultar 'extra-section' y 'one-section' dependiendo de la respuesta
    extraSection.style.display = respuesta ? 'block' : 'none';
    oneSection.style.display = respuesta ? 'block' : 'none';

    // Manejo de la visibilidad y obligatoriedad del campo 'otras'
    if (otrasRadio.checked) {
        otrasTexto.style.display = 'block';
        otrasTexto.setAttribute('required', true); // Hace el campo obligatorio
    } else {
        otrasTexto.style.display = 'none';
        otrasTexto.removeAttribute('required');
        otrasTexto.value = ''; // Limpia el campo si se oculta
    }

    // Agregar el evento para mostrar u ocultar el campo de texto 'Otras' al cambiar la selección
    otrasRadio.addEventListener('change', function() {
        if (otrasRadio.checked) {
            otrasTexto.style.display = 'block';
            otrasTexto.setAttribute('required', true); // Hace el campo obligatorio
        } else {
            otrasTexto.style.display = 'none';
            otrasTexto.removeAttribute('required');
            otrasTexto.value = ''; // Limpia el campo si se oculta
        }
    });

    // Cambiar el estado de 'required' de los checkboxes dependiendo de la respuesta
    const checkboxes = extraSection.querySelectorAll('input[type="checkbox"], select');
    checkboxes.forEach(checkbox => {
        if (respuesta) {
            checkbox.setAttribute('required', true);
        } else {
            checkbox.removeAttribute('required');
        }
    });

    // Validación al enviar el formulario
    const formulario = document.getElementById('form');
    formulario.addEventListener('submit', function(e) {
        if (respuesta) {
            let checked = false;
            const inputs = oneSection.querySelectorAll('input[type="checkbox"]');
            inputs.forEach(checkbox => {
                if (checkbox.checked) {
                    checked = true;
                }
            });

            // Si no se selecciona nada en los checkboxes de la pregunta 4 , evitar el envío y mostrar mensaje
            if (!checked) {
                e.preventDefault();
                document.getElementById('error-message').style.display = 'block';  
            } else {
                document.getElementById('error-message').style.display = 'none'; 
            }
        }});
}


