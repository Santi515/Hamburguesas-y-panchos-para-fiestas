let nombreProductoA = "Hamburguesas";
let precioProductoA = 180;
let stockProductoA = 64;

let nombreProductoB = "Panchos";
let precioProductoB = 120;
let stockProductoB = 79;

let nombreProductoC = "gaseosa";
let precioProductoC = 150;
let stockProductoC = 42;

let productoCompra = prompt("Ingrese que producto quisiera comprar: \n1 - Hamburguesas \n2 - Panchos");
let precioTotal = 0;

if(productoCompra.toLowerCase() == 'hamburguesas'){
    let cantidadProductoHamburguesas = prompt("Ingrese que cantidad de " + nombreProductoA + " desea comprar por favor.")

    if(cantidadProductoHamburguesas <= stockProductoA && cantidadProductoHamburguesas >= 0){
        precioTotalA = cantidadProductoHamburguesas * precioProductoA;
        alert("Seria un total de " + precioTotalA + " pesos.")
    }
    else{
        alert("Disculpe, pero actualmente tenemos " + stockProductoA + " unidades de este producto.")
    }
}
else if(productoCompra.toLowerCase() == 'panchos'){
    let cantidadProductoPanchos = prompt("Ingrese que cantidad de " + nombreProductoB + " desea comprar por favor.")

    if(cantidadProductoPanchos <= stockProductoB && cantidadProductoPanchos >= 0){
        precioTotalB = cantidadProductoPanchos * precioProductoB;
        alert("Seria un total de " + precioTotalB + " pesos.")
    }
    else{
        alert("Disculpe, pero actualmente tenemos " + stockProductoB + " unidades de este producto.")
    }
}
else if(productoCompra.toLowerCase() == 'gaseosa'){
    let cantidadProductoGaseosas = prompt("Ingrese que cantidad de " + nombreProductoC + " desea comprar por favor.")

    if(cantidadProductoGaseosas <= stockProductoC && cantidadProductoGaseosas >= 0){
    precioTotalC = cantidadProductoGaseosas * precioProductoC;
    alert("Seria un total de " + precioTotalC + " pesos.")
    }
    else{
        alert("Disculpe, pero actualmente tenemos " + stockProductoC + " unidades de este producto.")
    }
}
else{
    alert("Disculpe, pero no tenemos ese producto a la venta.")
}

if(precioTotal != 0){
    precioTotal = precioTotalA + precioTotalB + precioTotalC;

    alert("El precio total de su compra serian " + precioTotal + " pesos.")
}