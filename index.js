let nombreProductoA = "Hamburguesas";
let precioProductoA = 180;
let stockProductoA = 64;

let nombreProductoB = "Panchos";
let precioProductoB = 120;
let stockProductoB = 79;

let nombreProductoC = "gaseosa";
let precioProductoC = 150;
let stockProductoC = 42;

let productoCompra = prompt("Ingrese que producto quisiera comprar: \n1 - Hamburguesas $180 c/u \n2 - Panchos $120 c/u \n3 - Gaseosa $150 c/u \n4 - esc");
let precioTotal = 0;

//Todavia me falta conseguir que la consola te vuelva a pedir que ingreses la cantidad de productos que queres por 2da o 3era vez

while(productoCompra != "esc"){

    if(productoCompra.toLowerCase() == 'hamburguesas'){
        let cantidadProductoHamburguesas = prompt("Ingrese que cantidad de " + nombreProductoA + " desea comprar por favor.")

        if(cantidadProductoHamburguesas <= stockProductoA && cantidadProductoHamburguesas >= 0){
            precioTotal = precioTotal + (cantidadProductoHamburguesas * precioProductoA)
            alert("Seria un total de " + precioTotal + " pesos.")
        }
        else{
            alert("Disculpe, pero actualmente tenemos " + stockProductoA + " unidades de este producto.")
        }
    }
    else if(productoCompra.toLowerCase() == 'panchos'){
        let cantidadProductoPanchos = prompt("Ingrese que cantidad de " + nombreProductoB + " desea comprar por favor.")

        if(cantidadProductoPanchos <= stockProductoB && cantidadProductoPanchos >= 0){
            precioTotal = precioTotal + (cantidadProductoPanchos * precioProductoB)
            alert("Seria un total de " + precioTotal + " pesos.")
        }
        else{
            alert("Disculpe, pero actualmente tenemos " + stockProductoB + " unidades de este producto.")
        }
    }
    else if(productoCompra.toLowerCase() == 'gaseosa'){
        let cantidadProductoGaseosas = prompt("Ingrese que cantidad de " + nombreProductoC + " desea comprar por favor.")

        if(cantidadProductoGaseosas <= stockProductoC && cantidadProductoGaseosas >= 0){
            precioTotal = precioTotal + (cantidadProductoGaseosas * precioProductoC)
        alert("Seria un total de " + precioTotal + " pesos.")
        }
        else{
            alert("Disculpe, pero actualmente tenemos " + stockProductoC + " unidades de este producto.")
        }
    }
    else{
        alert("Disculpe, pero no tenemos ese producto a la venta.")
    }

    productoCompra = prompt("Ingrese que producto quisiera comprar: \n1 - Hamburguesas $180 c/u \n2 - Panchos $120 c/u \n3 - Gaseosa $150 c/u \n4 - esc");
}

if(precioTotal != 0){
    alert("El precio total de su compra serian " + precioTotal + " pesos.")
}
