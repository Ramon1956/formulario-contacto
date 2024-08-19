document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // validacion básica

    const name = document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject =document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && phone && subject && message) {
        // simulacion de envio de formulario

        document.getElementById('successMessage').style.display = 'block';
        // resetear el formulario
        document.getElementById('contactForm').reset();

    } else {
        alert ('Por favor, completar todos los campos obligatorios.');
    }
});