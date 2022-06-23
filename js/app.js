
let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonTerminar = document.getElementById('terminar');
const finCompra = document.getElementById('fin-compra');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const buscador = document.getElementById('search');

//buscador 

buscador.addEventListener('input', (e)=>{
    console.log(e.target.value)
    let busca = stockProductos.filter(el => el.nombre.toLowerCase().includes(e.target.value))
    mostrarProductos(busca)
})


//loading

contenedorProductos.innerHTML = '<img class= "loading"src="https://i.gifer.com/T04A.gif">'

setTimeout(() => {
    mostrarProductos(stockProductos)
}, 3000)


//Logica

function mostrarProductos(){
    contenedorProductos.innerHTML= ""
    stockProductos.forEach(el=> {

        let div = document.createElement('div')
        div.className = 'producto'
        div.innerHTML = `<div class="card">
                            <div class="card-image">
                                <img src="${el.img}">
                                <span class="card-title">${el.nombre}</span>
                                <a id="boton${el.id}" class="btn-floating halfway-fab waves-effect waves-light red"><i class="fa-solid fa-cart-arrow-down material-icons"></i></a>
                            </div>
                            <div class="card-content">
                                <p>${el.desc}</p>
                                <p> $${el.precio}</p>
                            </div>
                        </div>`
        
        contenedorProductos.appendChild(div)
        let btnAgregar = document.getElementById(`boton${el.id}`)
        btnAgregar.addEventListener('click', ()=>{
            agregarAlCarrito(el.id)
        })
    })

    
}

function agregarAlCarrito(id){
    let productoAgregar = stockProductos.find(item => item.id === id)
    carritoDeCompras.push(productoAgregar)
    mostrarCarrito(productoAgregar)
    actualizarCarrito()
    
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
}

function mostrarCarrito(productoAgregar){

    let div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML= `<p>${productoAgregar.nombre}</p>
                    <p>Precio: $${productoAgregar.precio}</p>
                    <button id=eliminar${productoAgregar.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`
    contenedorCarrito.appendChild(div)

    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
    btnEliminar.addEventListener('click', ()=>{
        btnEliminar.parentElement.remove()
        carritoDeCompras = carritoDeCompras.filter(ele => ele.id !== productoAgregar.id)
        actualizarCarrito()
        localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
    })
}

function actualizarCarrito(){
    contadorCarrito.innerText = carritoDeCompras.length
    precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)
}

function recuperar(){
    
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
    
    if(recuperarLS){
        for (const elemento of recuperarLS) {
            mostrarCarrito(elemento)
            carritoDeCompras.push(elemento)
            actualizarCarrito()
        }
    }
}

recuperar();