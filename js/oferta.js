

window.addEventListener("load", function(){
  this.document.getElementById("cargando").classList.toggle("cargando2")
})



const productos = {
  producto1: {
    nombre: 'Combo 1 - Pantalon Adidas ',
    precio: '2x12000',
    descripcion: 'Oferta de pantalon Adidas retro.Llevate uno por $7000 pesos y 2 por $6000. Si llevas mas de 5 te cobramos 4000 c/u. Las compras al por mayor se realizan a traves de nuestro whatsapp',  
    srcImg: 'https://sporting.vtexassets.com/arquivos/ids/431591-800-800?v=637746441732830000&width=800&height=800&aspect=true'
  },
  producto2: {
    nombre: 'Combo 2 - Zapatillas Adidas ',
    precio: '2x24000',
    descripcion: 'Oferta de zapatillas adidas. Ideales para vestir y andar. Unico color disponible en blanco. Llevate un par por $13000 pesos y 2 por $24000. Si llevas mas de 5 te cobramos 10000 c/u. Las compras al por mayor se realizan a traves de nuestro whatsapp',
    srcImg: 'https://woker.vtexassets.com/arquivos/ids/286737/6GV7613-000-1.jpg?v=637926234617130000'
  },
  producto3: {
    nombre: 'Combo 3 - Zapatillas Nike ',
    precio: '2x25000',
    descripcion: 'Oferta de zapatillas Nike. Ideales para andar, correr y entrenar. La suela se adapta perfectamente al pie del usuario. Unico color disponible en negro. Llevate un par por $15000 pesos y 2 por $25000. Si llevas mas de 5 te cobramos 11000 c/u. Las compras al por mayor se realizan a traves de nuestro whatsapp',
    srcImg: 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb6cb36e5/products/NI_DC8992-003/NI_DC8992-003-1.JPG'
  },
  producto4: {
    nombre: 'Combo 4 - Buzo Adidas',
    precio: '2x25000',
    descripcion: 'Oferta de Buzo Adidas con capucha. Ideales para cualquier ocacion. Unico color disponible en Negro. Llevate uno por $13000 pesos y 2 por $25000. Si llevas mas de 5 te cobramos 10000 c/u. Las compras al por mayor se realizan a traves de nuestro whatsapp',
    srcImg: 'https://ferreira.vtexassets.com/arquivos/ids/387803-800-auto?v=637756895012370000&width=800&height=auto&aspect=true'
  },
  producto5: {
    nombre: 'Combo 5 - Ojotas Adidas',
    precio: '2x15000',
    descripcion: 'Oferta de Ojotas adidas. Ideales para andas y el dia a dia. Unico color disponible en negro. Llevate un par por $9000 pesos y 2 por $15000. Si llevas mas de 5 te cobramos 6000 c/u. Las compras al por mayor se realizan a traves de nuestro whatsapp',
    srcImg: 'https://essential.vtexassets.com/arquivos/ids/310842-800-auto?v=637124624147200000&width=800&height=auto&aspect=true'
  },
  producto6: {
    nombre: 'Combo 6 - Buzo Nike Retro',
    precio: '2x20000',
    descripcion: 'Oferta de Buzo Nike version retro. Unico color disponible en Gris. Llevate uno por $13000 pesos y 2 por $20000. Si llevas mas de 5 te cobramos 80000 c/u. Las compras al por mayor se realizan a traves de nuestro whatsapp',
    srcImg: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/150/503/products/913a57d7-bdb5-47a3-9192-ccad0406a15b1-12dc2c0165f191f56e16793499501734-640-0.webp'
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
  addLocalStorage()
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



function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}


  window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito=storage;
    renderCarrito()
  }
  }
  