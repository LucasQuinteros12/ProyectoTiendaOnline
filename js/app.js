
let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonTerminar = document.getElementById('terminar');
const finCompra = document.getElementById('fin-compra');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const buscador = document.getElementById('search');

//buscador 

mostrarProductos();

contenedorProductos.innerHTML = '<img class= "loading"src="https://www.hermex.es/img/shopping.gif">'

setTimeout(() => {
    mostrarProductos(stockProductos)
}, 3000)


//Logica

function mostrarProductos(){
    stockProductos.forEach(el=> {

        let div = document.createElement('div')
        div.className = 'producto'
        div.innerHTML = `<div class="card">
                            <div class="card-image">
                                <img src="${el.img}">
                                <span class="card-title">${el.nombre}</span>
                                <a id="boton${el.id}" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
                            </div>
                            <div class="card-content">
                                <p>${el.desc}</p>
                                <p> $${el.precio}</p>
                            </div>
                        </div>`
        
        contenedorProductos.appendChild(div)
       
    })

    
}

function agregarAlCarrito(){


}

function mostrarCarrito(){


}

function actualizarCarrito(){


}

function recuperar(){


}