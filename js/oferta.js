alert("Ingrese el producto de oferta que desea llevar, para salir ingrese 0")
let seleccionarProductos = Number(prompt("1-remeras 2x $3000 2- pantalon 2x $5500 3-zapatillas 2 pares $16000 4- shorts 4x $8000 "))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
    return cant * precio
}


while (seleccionarProductos != 0) {
    switch (seleccionarProductos) {
        case 1:
            seleccionarCantidad = Number(prompt("Cuantas promos de remeras desea llevar"))
            total += cantidad(seleccionarCantidad, 3000)
            break;
        case 2:
            seleccionarCantidad = Number(prompt("cuantos promos de pantalones desea llevar"))
            total += cantidad(seleccionarCantidad, 5500)
            break;
        case 3:
            seleccionarCantidad = Number(prompt("Cuantas promos de zapatillas desea llevar"))
            total += cantidad(seleccionarCantidad, 16000)
            break;
        case 4:
            seleccionarCantidad = Number(prompt("Cuantos promos de shores desea llevar"))
            total += cantidad(seleccionarCantidad, 8000)
            break;
        case 5:

        default:
            break;
    }
    seleccionarProductos = Number(prompt("1-remeras 2x $3000 2- pantalon 2x $5500 3-zapatillas 2 pares $16000 4- shorts 4x $8000 - 5 No deseo ninguna de estas ofertas"))
}

alert("el total de la compra es de: " + total)


const envio = () => {
    if (total >= 20000) {
        alert("El envio es gratuito")
    } else {
        total += 1000
        alert("el costo de envio es de 1000, el total es: " + total)
    }
}


const metodoDePago = () => {
    let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo")
    if (metodo == "tarjeta") {
        total *= 1.1
        console.log(total);
    } else if (metodo == "efectivo") {
        total -= 1000
        alert("tenes un descuento de 1000, el total es:" + total)
    }


}

metodoDePago();


let producto1 = {
    nombre: "Camiseta Seleccion argentina",
    precio: 12000,
    Disponible: true,
}
    console.log(producto1);


let producto2 = {
    nombre: "Camiseta blanca 3 estrellas",
    precio: 4000,
    Disponible: true,
}

    let producto3 = {
        nombre: "Camiseta Entrada en calor",
    precio: 6000,
    Disponible: true,
    }
    let producto4 = {
        nombre: "Camiseta Entrada en calor azul y negra",
    precio: 6000,
    Disponible: true,
    }

    let promo1 = {
        nombre: "2 remeras",
        precio: 3000,
        Disponible: true,
    }
        console.log(producto1);
    
    
    let Promo2 = {
        nombre: "2 pantalones",
        precio: 5500,
        Disponible: true,
    }
    
        let Promo3 = {
            nombre: "2 pares de zapatillas",
        precio: 16000,
        Disponible: true,
        }
        let Promo4 = {
            nombre: "4 shorts",
        precio: 8000,
        Disponible: true,
        }

