class Producto {
  constructor(nombre, precio, stock) {
    (this.nombre = nombre),
      (this.precio = Number(precio)),
      (this.stock = stock);
  }
  actualizarStock(cantidad) {
    this.stock = this.stock - cantidad;
  }
}

const arrayProductos = [];

arrayProductos.push(new Producto("Teclado Kumara 552", 5500, 20));
arrayProductos.push(new Producto("Bicicleta Venzo", 18500, 10));
arrayProductos.push(new Producto("Mouse Logitech", 3500, 15));
arrayProductos.push(new Producto("Auriculares HyperX", 6500, 25));
arrayProductos.push(new Producto("Parlante JBL", 3000, 10));

// Ordenar Lista

const ordenarMenorMayor = () => {
  arrayProductos.sort((a, b) => a.precio - b.precio);
  mostrarListaOrdenada();
};

const ordenarMayorMenor = () => {
  arrayProductos.sort((a, b) => b.precio - a.precio);
  mostrarListaOrdenada();
};

const mostrarListaOrdenada = () => {
  const array = [];
  arrayProductos.forEach((Productos) =>
    array.push(Productos.nombre + " $" + Productos.precio)
  );
  alert("Lista de precios: " + "\n" + array.join("\n"));
};

// Proceso de Compra

let total = 0;

const agregarProductos = () => {
  let otroProducto;
  let Producto = "";
  let cantidad = 0;
  let precio = 0;

  do {
    Producto = prompt(
      "¿Que producto vas a llevar?\n1) Teclado Kumara 552\n2) Bicicleta Venzo\n3) Mouse Logitech\n4) Auriculares HyperX\n5) Parlante JBL",
      "Ej: Parlante JBL"
    );
    cantidad = parseInt(prompt("¿Cuantos vas llevar?"));

    switch (Producto) {
      case arrayProductos[0].nombre:
        arrayProductos[0].actualizarStock(cantidad);
        if (arrayProductos[0].stock < 0 || isNaN(cantidad)) {
          alert("Lo sentimos. En este momento no tenemos stock");
          precio = 0;
          cantidad = 0;
        } else {
          precio = arrayProductos[0].precio;
        }
        break;

      case arrayProductos[1].nombre:
        arrayProductos[1].actualizarStock(cantidad);
        if (arrayProductos[1].stock < 0 || isNaN(cantidad)) {
          alert("Lo sentimos. En este momento no tenemos stock");
          precio = 0;
          cantidad = 0;
        } else {
          precio = arrayProductos[1].precio;
        }
        break;

      case arrayProductos[2].nombre:
        arrayProductos[2].actualizarStock(cantidad);
        if (arrayProductos[2].stock < 0 || isNaN(cantidad)) {
          alert("Lo sentimos. En este momento no tenemos stock");
          precio = 0;
          cantidad = 0;
        } else {
          precio = arrayProductos[2].precio;
        }
        break;

      case arrayProductos[3].nombre:
        arrayProductos[3].actualizarStock(cantidad);
        if (arrayProductos[3].stock < 0 || isNaN(cantidad)) {
          alert("Lo sentimos. En este momento no tenemos stock");
          precio = 0;
          cantidad = 0;
        } else {
          precio = arrayProductos[3].precio;
        }
        break;

      case arrayProductos[4].nombre:
        arrayProductos[4].actualizarStock(cantidad);
        if (arrayProductos[4].stock < 0 || isNaN(cantidad)) {
          alert("Lo sentimos. En este momento no tenemos stock");
          precio = 0;
          cantidad = 0;
        } else {
          precio = arrayProductos[4].precio;
        }
        break;

      default:
        alert("Alguno de los ingresados no es correcto");
        precio = 0;
        cantidad = 0;
    }
    
    total = total + precio * cantidad;
    otroProducto = confirm("¿Desea agregar algo mas al carrito?");
  } while (otroProducto);
};

// Descuento

const descuento = (total) => {
    if( total >= 5000 ) {
        total = total * 0.80;
        alert("Tenes descuento del 20%")
    }

    return total;
};

// Envio

const calcularEnvio = (total) => {
  let confirmacion = confirm("¿Queres envio a domicilio?");
  if (confirmacion && total >= 3000) {
    alert("Tenes envio GRATIS!!!. El total de la compra es " +total)
  } else if (confirmacion && total < 3000 && total != 0) {
    total = total + 1200;
  } else {
    alert("El total de la compra es " +total);
  }
  return total;
};

// Cuotas

let cuotas = 0;

const cantidadDeCuotas = () => {
  let confirmacion = confirm("¿Queres pagar en cuotas?");
  if (confirmacion) {
    cuotas = parseInt(prompt("¿En cuantas cuotas deseas pagar?"));
    if (cuotas == 0) {
      cuotas = 1;
    } else if (isNaN(cuotas)) {
      cantidadDeCuotas();
    }
  } else {
    cuotas = 1;
  }
  return cuotas;
};

// Intereses

const intereses = (cuotas) => {
  if (cuotas == 1) {
    return 0;
  } else {
    let tasa = 12.3 + cuotas * 0.2;
    return tasa * cuotas;
  }
};

const obtenerTotal = (total, cuotas, intereses) => {
  total = total + intereses;
  let valorCuota = total / cuotas;
  alert(
    "El total a pagar es $ " +
      total +
      " en " +
      cuotas +
      " cuotas de $ " +
      Math.ceil(valorCuota)
  );
};

const comprarProductos = () => {
  if (
    confirm("¿Queres ordenar la lista de productos del mas barato al mas caro?")
  ) {
    ordenarMenorMayor();
  } else {
    ordenarMayorMenor();
  }
  agregarProductos();
  obtenerTotal(calcularEnvio(descuento(total)), cantidadDeCuotas(), intereses(cuotas));
};
comprarProductos();
