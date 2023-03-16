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


let producto0 = {
    nombre: "Camiseta Seleccion argentina",
    precio: 12000,
    Disponible: true,
}
    console.log(producto0);


let producto1 = {
    nombre: "Camiseta blanca 3 estrellas",
    precio: 4000,
    Disponible: true,
}

    let producto2 = {
        nombre: "Camiseta Entrada en calor",
    precio: 6000,
    Disponible: true,
    }
    let producto3 = {
        nombre: "Camiseta Entrada en calor azul y negra",
    precio: 6000,
    Disponible: true,
    }

    let promo1 = {
        nombre: "2 remeras",
        precio: 3000,
        Disponible: true,
    }
    
    
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

const promociones = [ promo1, Promo2, Promo3, Promo4];

const productos = [producto0, producto1, producto2, producto3];

for(let i=0; i<4; i+=1){
    console.log(promociones[i])
}

for(let i=0; i<4; i+=1){
    console.log(productos[i])
}


productos.push(Producto4 = {
    nombre: "Chomba Seleccion Argentina",
    precio: 5000,
    Disponible: true,
});
console.log(productos)

productos.push(Producto5 = {
    nombre: "Camiseta campeones edicion limitada ",
    precio: 4000,
    Disponible: true,
});
console.log(productos)

productos.push(Producto6 = {
    nombre: "Buzo campeones edicion limitada",
    precio: 8000,
    Disponible: true,
});
console.log(productos)




//prompt(Descuento al por mayor ("minimo 5 unidades"). Elija su producto) 
//alert = function descuentopormayor (n){
  //  return function(m){
    //    return (n*m)*0.10
  //  }
//}


//const quintuplicador = descuentopormayor (5);
//console.log(quintuplicador(4000))



const precios = productos.map((item) => item.precio)
console.log(precios)

const Preciocontarjeta = productos.map ((item)=> item.nombre + " -- " + item.precio*1.20)
console.log (Preciocontarjeta)


productos.forEach ((producto, Disponible) => {
    if(producto ==="Camiseta Seleccion argentina"){
    console.log("Esta camiseta esta" + Disponible)}
    else{
        console.log("No existe ese articulo")
    }
})


let totaldetodo = 0;
productos.forEach((item)=> totaldetodo += item.precio)
console.log(totaldetodo)

let precioconenvio = productos.reduce((totaldetodo, producto)=> totaldetodo + producto.precio, 1800)
console.log (precioconenvio)

let Filtroproductosmayoracincomil = productos.filter( item => item.precio > 5000)
console.log(Filtroproductosmayoracincomil)
let Filtroproductosmenoresacincomil = productos.filter( item => item.precio < 5000)
console.log(Filtroproductosmenoresacincomil)

//console.log(document)


//let elemento;
//elemento = document;

//elemento = document.all;
//console.log(elemento)

//const header = document.getElementsByClassName('navbar')
//console.log (header)

//const encabezado = document.getElementsByTagName ('header')

//let h2 = document.getElementsByTagName ('h2')
//console.log(h2[0].innerText)
//h2[0].innerText = 'Veni a ver nuestros nuevos productos'
//console.log(h2[0].innerText)
//h2[0].textContent = 'Hay nuevas ofertas para ustedes'
//console.log(h2[0].textContent)

//console.log (document.querySelector("h2").textContent)
//console.log (document.querySelectorAll("li")[1].textContent="Mas Ofertas")

let h2 = document.querySelector('h2');
h2.innerHTML= "<em> Nuevas ofertas en el dia de hoy</em>"

h2.style.backgroundColor = "black"
h2.style.color = "red"

//h2.classList.add("rojo")
//hs.classList.add("fondonegro")

let main = document.querySelector("main")

let titulo = document.createElement('h3')
titulo.textContent = "Ante cualquier consulta contactenos"

main.appendChild(titulo)
