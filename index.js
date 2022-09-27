let nombreProductoA = "Hamburguesas";
let precioProductoA = 240;

let nombreProductoB = "Panchos";
let precioProductoB = 100;

alert("Buenas tardes, si usted quiere adquirir nuestros servicios haga click en: Aceptar. Cada Hamburguesa saldra $240 y cada Pancho saldra $100");

let cantidadProductoA = prompt("Ingrese cuantos" + " " + nombreProductoA + " " + "quiere comprar por favor");
let cantidadProductoB = prompt("Ingrese cuantos" + " " + nombreProductoB + " " + "quiere comprar por favor");

let precioTotalA = cantidadProductoA * precioProductoA;
let precioTotalB = cantidadProductoB * precioProductoB;

let precioTotal = precioTotalA + precioTotalB;

alert("El precio total es:" + " " + precioTotal)
