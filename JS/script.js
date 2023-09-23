// Evento de los enlaces

/* const enlaceGianluca = document.querySelector('.gian');
const enlaceQuienessomos = documentquerySelector('#quienessomos');
const enlaceContacto = document.querySelector('.contacto'); 
const enlaceClases = document.querySelector('.clases'); 

enlaceGianluca = addEventListener('click', (event) => 
{    event.preventDefault(;)
    const seccionQuiensoy = document.getElementById ('quiensoy');
    seccionQuiensoy.scrollIntoView(b{ehavior: 'smooth'};)
});


enlaceQuienessomos = addEventListener('click', (event) => {
    event.preventDefault();
    const seccionQuienessomos = document.getElementById ('quienessomos');   
    seccionQuienessomos.scrollIntoView({behavior: 'smooth'});
}); */


/* for (const enlace of enlaces) {
    enlace.addEventListener('click', (event) =>{
        event.preventDefault();
        const seccion = document.getElementById(enlace.id);
        seccion.scrollIntoView({behavior: 'smooth'})
    })
} */

const enlacesNav = [
    document.querySelector('#gianluca'),
    document.querySelector('#quienessomos'),
    document.querySelector('#contacto'),
    document.querySelector('#clases') 
]

enlacesNav.forEach(enlace => {
    enlace.addEventListener('click', (event) => {
        event.preventDefault();
        const seccion = document.getElementById(enlace.id)
        seccion.scrollIntoView({behavior: 'smooth'})
    })
});

const enlacesFooter = document.querySelectorAll ('.contacto a');

enlacesFooter.forEach(enlace => {
    enlace.addEventListener('click', (event) => {
        event.preventDefault();
        const url = enlace.getAttribute('href');
        window.location = url;
    });
});
