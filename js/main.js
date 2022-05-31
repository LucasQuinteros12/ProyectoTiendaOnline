alert("Bienvenido a Tienda Online")

const productos = ['Teclado Kumara K552', 'Bicicleta Venzo', 'Mouse Razer', 'MousePad XXL'];

let producto = "";

do {
    if(producto != ""){
        alert("El producto que esta buscando no esta en stock!!")
    }
    producto = prompt("Ingrese el producto que desea comprar")
} while (productos.includes(producto));

alert("Si tenemos stock de "+producto+"\n"+"Si desea continuar presione OK y sera redirigido al producto seleccionado")


