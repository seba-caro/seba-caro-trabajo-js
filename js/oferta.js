

window.addEventListener("load", function(){
  this.document.getElementById("cargando").classList.toggle("cargando2")
})



const productos = {
  producto1: {
    nombre: 'Combo 1 - Pantalon Adidas ',
    precio: '12000',
    descripcion: '',
    srcImg: 'https://sporting.vtexassets.com/arquivos/ids/431591-800-800?v=637746441732830000&width=800&height=800&aspect=true'
  },
  producto2: {
    nombre: 'Combo 2 -  ',
    precio: '14000',
    descripcion: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    srcImg: 'https://woker.vtexassets.com/arquivos/ids/286737/6GV7613-000-1.jpg?v=637926234617130000'
  },
  producto3: {
    nombre: 'Combo 3 - ',
    precio: '25000',
    descripcion: 'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv',
    srcImg: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/e3fd03c50b0a49509949ae860067ece6_9366/Zapatillas_Galaxy_6_Gris_GW4140_01_standard.jpg'
  },
  producto4: {
    nombre: 'Combo 4 -',
    precio: '35000',
    descripcion: 'ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
    srcImg: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/9326e8db8d8e4e509e42ad26010cf693_9366/Zapatillas_adidas_4DFWD_Pulse_Negro_Q46451_01_standard.jpg'
  },
  producto5: {
    nombre: 'Combo 5 -',
    precio: '15000',
    descripcion: 'ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
    srcImg: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/9326e8db8d8e4e509e42ad26010cf693_9366/Zapatillas_adidas_4DFWD_Pulse_Negro_Q46451_01_standard.jpg'
  },
  producto6: {
    nombre: 'Combo 6 -',
    precio: '50000',
    descripcion: 'ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
    srcImg: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/9326e8db8d8e4e509e42ad26010cf693_9366/Zapatillas_adidas_4DFWD_Pulse_Negro_Q46451_01_standard.jpg'
  },
}

const templateProd = document.getElementById('template-prod').content
const contenedorProd = document.querySelector('.contenedor-productos')
const fragment = document.createDocumentFragment()


// DOM
Object.values(productos).forEach( producto => {
  templateProd.querySelector('.div-info .nombre-prod').textContent = producto.nombre
  templateProd.querySelector('.div-precio-boton .precio').textContent = producto.precio
  templateProd.querySelector('.div-info .descripcion-prod').textContent = producto.descripcion
  templateProd.querySelector('.contenedor-img2 img').setAttribute('alt', producto.nombre)
  templateProd.querySelector('.contenedor-img2 img').setAttribute('src', producto.srcImg)
  const clone = templateProd.cloneNode(true)
  fragment.appendChild(clone)
})
contenedorProd.appendChild(fragment)

// CARRITO 
let carrito = {}
const templateTabla = document.getElementById('agregar-producto-al-carro').content
const tbodyCarrito = document.getElementById('carrito-body')
const fragmentTabla = document.createDocumentFragment()
const templateFoot = document.getElementById('tfooter').content
const tfootCarrito = document.getElementById('footer')

contenedorProd.addEventListener('click', e => {
  
  if(e.target.textContent === "Agregar") {
    setCarrito(e.target.parentElement.parentElement)
  }
  e.stopPropagation();
})
const setCarrito = e => {
  const pivoteCarrito = {
    nombre: e.querySelector('.div-info .nombre-prod').textContent,
    precio: e.querySelector('.div-precio-boton .precio').textContent,
    cantidad: 1
  }
  if(carrito.hasOwnProperty(pivoteCarrito.nombre)){
    carrito[pivoteCarrito.nombre].cantidad += 1
  } else {
    carrito[pivoteCarrito.nombre] = {...pivoteCarrito}
  }
  pintarTabla(carrito)
}

const pintarTabla = objetoCarrito => {
  Object.values(objetoCarrito).forEach( objeto => {
    const cloneTabla = templateTabla.cloneNode(true)
    cloneTabla.getElementById('producto').textContent = objeto.nombre
    cloneTabla.getElementById('cant').textContent = objeto.cantidad
    cloneTabla.getElementById('precio-uni').textContent = objeto.precio
    let precioTotal = parseFloat(objeto.precio) * objeto.cantidad
    cloneTabla.getElementById('precio-total-prod').textContent = precioTotal.toFixed(2)
    fragmentTabla.appendChild(cloneTabla)
  })
  tbodyCarrito.innerHTML = ''
  tbodyCarrito.appendChild(fragmentTabla)
  pintarFooter()
}
const pintarFooter = () => {
  tfootCarrito.innerHTML = ''
  if(Object.keys(carrito).length === 0) {
    tfootCarrito.innerHTML = '<tr><td colspan = 4>¡No hay ningun elemento en el carrito!</td></tr>'
  } else {
    const total = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + (cantidad * precio),0)
    templateFoot.getElementById('total-a-pagar').textContent = total.toFixed(2)
    const cloneFoot = templateFoot.cloneNode(true)
    fragment.appendChild(cloneFoot)
    tfootCarrito.appendChild(fragment)
    //Boton Vaciar carrito
    const botonVaciar = document.getElementById('vaciar-tabla')
botonVaciar.addEventListener('click', () => {
      carrito = {}
      pintarTabla(carrito)
      pintarFooter()
    })
    
    //Botones aumentar y disminuir cantidades
    
  }
}
tbodyCarrito.addEventListener('click', e => {
  
  if(e.target.classList.contains('button')) {
    aumentarDisminuir(e.target)
  }
})
const aumentarDisminuir = boton => {
  if(boton.textContent === '+'){
    const indicador = boton.parentElement.parentElement.firstElementChild.textContent
    Object.values(carrito).forEach( elemento => {
      if(elemento.nombre === indicador) {
      carrito[elemento.nombre].cantidad++  
      }
    })
  }
  if(boton.textContent === '-') {
    const indicador = boton.parentElement.parentElement.firstElementChild.textContent
    Object.values(carrito).forEach( elemento => {
      if(elemento.nombre === indicador) {
      carrito[elemento.nombre].cantidad--
        if(carrito[elemento.nombre].cantidad === 0) {
          delete carrito[elemento.nombre]
        }
      }
    })
  }
  pintarTabla(carrito)
  pintarFooter()
}