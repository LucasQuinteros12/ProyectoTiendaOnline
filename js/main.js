const productos = [
  {id:1, nombre: "Auricular Marvo", precio: 4000},
  {id:2, nombre: "Bicicleta Venzo", precio: 40000},
  {id:3, nombre: "Teclado Kumara", precio: 52000},
  {id:4, nombre: "Monitor 32' ", precio: 18000},
  {id:5, nombre: "Mouse Invader", precio: 2500},
  {id:6, nombre: "Silla Gamer", precio: 50000}

];

for (const producto of productos) {
  let contenedor = document.createElement("div");

  contenedor.innerHTML = `<div class="container">
                            <img src="/img/">
                            <h3>ID: ${producto.id}</h3>
                            <p> Producto: ${producto.nombre}</p>
                            <b> $${producto.precio}</b>
                          </div>`;
  document.body.appendChild(contenedor);
}