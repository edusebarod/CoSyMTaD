function mostrarSection() {
    // Obtiene los valores de los botones de radio
    const respuesta = document.getElementById('docente-si').checked;
    const extraSection = document.getElementById('extra-section');
    const oneSection = document.getElementById('one-section');
    const otrasRadio = document.getElementById('otras');
    const otrasTexto = document.getElementById('otras-texto');
    //Todos los elementos en extraSection y cambia el estado de 'required'

    extraSection.style.display = respuesta ? 'block' : 'none'; // Mostrar u ocultar 'extra-section'
    oneSection.style.display = respuesta ? 'block' : 'none'; // Mostrar u ocultar 'wan-section'

    if (otrasRadio.checked) {
        otrasTexto.style.display = 'block';
        otrasTexto.setAttribute('required', true); // Hace el campo obligatorio
    } else {
        otrasTexto.style.display = 'none';
        otrasTexto.removeAttribute('required'); // Remueve la obligación si no está visible
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


    const checkboxes = extraSection.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (respuesta) {
            checkbox.setAttribute('required', true);
        } else {
            checkbox.removeAttribute('required');
        }
    });

    const formulario = document.getElementById('form');  // Asegúrate de darle un ID a tu formulario
    formulario.onsubmit = function(e) {
        let checked = false;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                checked = true;
            }
        });

        // Si no hay ninguna casilla marcada, mostrar un mensaje y evitar el envío del formulario
        if (!checked && respuesta) {
            e.preventDefault();  // Evita el envío del formulario
            alert("Por favor, selecciona al menos una opción.");
        }
    };
}

