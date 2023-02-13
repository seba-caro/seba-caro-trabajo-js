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

metodoDePago()

