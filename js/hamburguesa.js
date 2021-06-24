const opciones = document.querySelector('.opciones');
const lanzador = document.querySelector('#lanzador');
const inicio = document.querySelector('.inicio');
const nosotros = document.querySelector('.nosotros');
const menu = document.querySelector('.menu');
const contacto = document.querySelector('.contacto');
let bandera = 0;

lanzador.addEventListener('click', validarLanzador);
inicio.addEventListener('click', validarLanzador);
nosotros.addEventListener('click', validarLanzador);
menu.addEventListener('click', validarLanzador);
contacto.addEventListener('click', validarLanzador);

function validarLanzador(){
    if(bandera === 0){
        if(opciones.classList.contains('ocultar')){
            opciones.classList.remove('ocultar');
        }
        opciones.classList.add('mostrar');
        document.querySelector('html').style.overflowY = 'hidden';
        bandera++;
    } else{
        document.querySelector('html').style.overflowY = 'scroll';
        opciones.classList.remove('mostrar');
        opciones.classList.add('ocultar');
        bandera = 0;
        lanzador.checked = false;
    }
}