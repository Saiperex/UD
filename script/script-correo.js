const btn = document.getElementById('enviar');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando';

   const serviceID = 'default_service';
   const templateID = 'template_i0mhvtt';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => 
    {
      btn.value = 'Enviar formulario';
      
    }, (err) => 
    {
      btn.value = 'Enviar formulario';
      alert(JSON.stringify(err));
    });
});