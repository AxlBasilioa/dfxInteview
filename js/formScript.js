document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (!validateForm()) {
        alert('Por favor, revise los campos del formulario.');
        return;
    }
    const sectionForm = document.getElementById('section-form');
    const videoSection = document.getElementById('section-video');
    const iframe = document.getElementById('video-frame');
    sectionForm.classList.add('fade-out');
    setTimeout(() => {
        sectionForm.style.display = 'none';
        videoSection.style.display = 'flex';
        videoSection.classList.add('fade-in');
        const currentSrc = iframe.src;
        const newSrc = currentSrc.replace('mute=1', 'mute=0');
        iframe.src = newSrc;
        sendEmail();
    }, 1000);
});

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const city = document.getElementById('city').value.trim();
    const nameCityRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; 
    const phoneRegex = /^\d+$/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!name || !phone || !email || !city) {
        return false;
    }
    if (!nameCityRegex.test(name) || !nameCityRegex.test(city)) {
        return false;
    }
    if (!phoneRegex.test(phone)) {
        return false;
    }
    if (!emailRegex.test(email)) {
        return false;
    }
    return true;
}
function sendEmail() {
    const form = document.getElementById('form');
    const formData = new FormData(form);
    const data = {
        name: formData.get('name').trim(),
        email: formData.get('email').trim(),
        city: formData.get('city').trim(),
        phone: formData.get('phone').trim()
    };
    emailjs.send('service_pwsv749', 'template_vpqlxsp', data)
        .then(function(response) {
            //esta impresion es unicamente de depuracion
            console.log('Email enviado exitosamente', response.status, response.text);
        }, function(error) {
            // esta impresion es unicamente para depuracion
            console.error('Error al enviar el email', error);
        });
}
