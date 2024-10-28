function mostrarSection() {
    // Obtiene los valores de los botones de radio
    const respuesta = document.getElementById('docente-si').checked;
    const extraSection = document.getElementById('extra-section');
    extraSection.style.display = respuesta ? 'block' : 'none'; //dependiendo si es tru o false  devuelve la respuesta

    //Todos los elementos en extraSection y cambia el estado de 'required'
    const checkboxes = extraSection.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (respuesta) {
            checkbox.setAttribute('required', true);
        } else {
            checkbox.removeAttribute('required');
        }
    });
}