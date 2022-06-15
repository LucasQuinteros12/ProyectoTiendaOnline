const productos = [
  {id:1, nombre: "Auricular Marvo", precio: 4000},
  {id:2, nombre: "Bicicleta Venzo", precio: 40000},
  {id:3, nombre: "Teclado Kumara", precio: 5200},
  {id:4, nombre: "Monitor 32' ", precio: 18000},
  {id:5, nombre: "Mouse Invader", precio: 2500},
  {id:6, nombre: "Silla Gamer", precio: 50000}

];

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

const filtrar = () => {
  
  resultado.innerHTML = '';

  const texto = formulario.value.toLowerCase();

  for(let producto of productos){

    let nombre = producto.nombre.toLowerCase();

    if(nombre.indexOf(texto) !== -1){
      resultado.innerHTML += 
      
      `<li>${producto.nombre} - $${producto.precio}</li>`
      
    }
  }

  if(resultado.innerHTML === ''){
    resultado.innerHTML += `
      <h5>Producto no encontrado...</h5>
    `
  }

};

boton.addEventListener('click', filtrar)
formulario.addEventListener('keyup', filtrar)

