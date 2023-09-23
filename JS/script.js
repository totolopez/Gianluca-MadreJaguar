// Evento de los enlaces
const enlaceGianluca = document.querySelector('.gianluca');
const enlaceQuienessomos = document.querySelector('.quienessomos');
const enlaceContacto = document.querySelector('.contacto'); 
const enlaceClases = document.querySelector('.clases'); 

enlaceGianluca = addEventListener('click', (event) => {
    event.preventDefault();
    const seccionQuiensoy = document.getElementById ('quiensoy');
    seccionQuiensoy.scrollIntoView({behavior: 'smooth'});
});


enlaceQuienessomos = addEventListener('click', (event) => {
    event.preventDefault();
    const seccionQuienessomos = document.getElementById ('quienessomos');
    seccionQuienessomos.scrollIntoView({behavior: 'smooth'});
});



