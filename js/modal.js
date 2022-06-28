const carritoAbrir = document.getElementById('boton-carrito');
const carritoCerrar = document.getElementById('carritoCerrar');

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

carritoAbrir.addEventListener('click', ()=> {
    contenedorModal.classList.toggle('modal-active')
})
carritoCerrar.addEventListener('click', ()=> {
    contenedorModal.classList.toggle('modal-active')
})
modalCarrito.addEventListener('click',(e)=>{
    e.stopPropagation()
})
contenedorModal.addEventListener('click', ()=>{
    carritoCerrar.click()
})


const formCerrar = document.getElementById('form-cerrar');
const formAbrir = document.getElementById('btn-account');

const modal = document.querySelectorAll('.modal-close')[0];
const modalC = document.querySelectorAll('.modal-container')[0];


formAbrir.addEventListener('click', (e)=>{
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle('modal-close')
});

formCerrar.addEventListener('click', ()=>{
    modal.classList.toggle('modal-close')
   
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },200)
});

window.addEventListener('click', (e)=>{
    if(e.target == modalC){
        modal.classList.toggle('modal-close')
   
        setTimeout(function(){
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        },200)
    }
});