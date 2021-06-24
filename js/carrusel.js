const carrusel = document.querySelector('.carrusel');
let movimiento = 0;
let tiempo = 2500;

document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        movimiento += 100;
        if(movimiento > 400){
            movimiento = 0;
            carrusel.style.transition = 'none';
            carrusel.style.transform = `translateX(-${movimiento}%)`;
            return;
        } else{
            carrusel.style.transition = 'all ease .8s';
        }
        carrusel.style.transform = `translateX(-${movimiento}%)`;
    }, tiempo);
});