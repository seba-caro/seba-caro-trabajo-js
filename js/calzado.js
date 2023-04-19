window.addEventListener("load", function(){
  this.document.getElementById("cargando").classList.toggle("cargando2")
})


const productos = {
    producto1: {
      nombre: 'Zapatillas NIKE Pro 1 ',
      precio: '60000',
      descripcion: 'Ideales para andar y caminar. Color Unico',
      srcImg: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    producto2: {
      nombre: 'Zapatillas Nike Max ',
      precio: '70000',
      descripcion: 'Ideales para andar y caminar. Color marron con suela blanca.',
      srcImg: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80'
    },
    producto3: {
      nombre: 'Zapatillas Nike Run ',
      precio: '35000',
      descripcion: 'Ideales para andar, caminar y correr. Poseen una suela antideslizante y de goma que se adapta perfectamente al pie del usuario. Color Verde oscuro con suela blanca',
      srcImg: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
    },
    producto4: {
      nombre: 'Zapatillas Nike Run "R"',
      precio: '50000',
      descripcion: 'Ideales para andar, caminar y correr. Poseen una suela antideslizante y de goma que se adapta perfectamente al pie del usuario. Color rojo con suela blanca',
      srcImg: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    producto5: {
      nombre: 'Zapatillas Nike "B"',
      precio: '65000',
      descripcion: 'Ideales para el entrenamiento del dia a dia. Estas son las zapatillas tipo botita son ideales para deporte como el basquet, handball, voley y otros donde la superfecie de la cancha son identicas. Color negro con suela blanca',
      srcImg: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    producto6: {
      nombre: 'Zapatillas Nike Pro 2 ',
      precio: '50000',
      descripcion: 'Ideales para andar, caminar, correr y entrenar. Poseen una suela antideslizante y de goma que se adapta perfectamente al pie del usuario. Ademas esta hecha de material mas resistente por lo cual su duracion aumenta. Color negra',
      srcImg: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    },
    producto7: {
      nombre: 'Zapatillas Nike Edicion "Superreo" ',
      precio: '91000',
      descripcion: 'Ideales para andar, caminar y correr. Poseen una suela antideslizante y de goma que se adapta perfectamente al pie del usuario. Color verde con suela blanca',
      srcImg: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
    },
    producto8: {
      nombre: 'Zapatillas Nike Fast 1 ',
      precio: '48000',
      descripcion: 'Ideales para andar, caminar y correr. Poseen una suela antideslizante y de goma que se adapta perfectamente al pie del usuario.',
      srcImg: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80'
    },
    producto9: {
      nombre: 'Zapatillas Nike Max 3',
      precio: '37000',
      descripcion: 'Ideales para andar y caminar. Color blanca.',
      srcImg: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
    },
    producto10: {
      nombre: 'Zapatillas Nike Edicion "Colours"',
      precio: '76000',
      descripcion: 'Ideales para andar y caminar. Posee una gran gama de colores que hacen que esta zapatilla sea genial para quien la lleve.',
      srcImg: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    producto11: {
      nombre: 'Zapatillas Nike Run 5',
      precio: '38000',
      descripcion: 'Ideales para andar, caminar, correr y entrenar. Poseen una suela antideslizante y de goma que se adapta perfectamente al pie del usuario. Ademas esta hecha de material mas resistente por lo cual su duracion aumenta. Color negra, suela blanca con algunos detalles.',
      srcImg: 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    producto12: {
      nombre: 'Zapatillas Adidas Run',
      precio: '45000',
      descripcion: 'Ideales para andar, caminar y correr. Poseen una suela antideslizante y de goma que se adapta perfectamente al pie del usuario.',
      srcImg: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    producto13: {
      nombre: 'Zapatillas Adidas Run Edicion "Mamba Black"',
      precio: '90000',
      descripcion: 'Ideales para andar, caminar y correr. Poseen una suela antideslizante y de goma que se adapta perfectamente al pie del usuario.',
      srcImg: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1059&q=80'
    },
    producto14: {
      nombre: 'Zapatillas Adidas "Ou"',
      precio: '40000',
      descripcion: 'Ideales para andar y caminar. Color blanca y marron con logo naranja y suela balnca con marron.',
      srcImg: 'https://images.unsplash.com/photo-1580980379292-082d6126499c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1133&q=80'
    },
    producto15: {
      nombre: 'Zapatillas Adidas Run 6',
      precio: '62000',
      descripcion: 'Ideales para andar, caminar y correr. Poseen una suela antideslizante y de goma que se adapta perfectamente al pie del usuario.',
      srcImg: 'https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    producto15: {
      nombre: 'Zapatillas Adidas Run Black',
      precio: '80000',
      descripcion: 'Ideales para andar, caminar y correr. Poseen una suela antideslizante y de goma que se adapta perfectamente al pie del usuario.',
      srcImg: 'https://images.unsplash.com/photo-1544327415-cfb77383dabc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=854&q=80'
    },
    producto16: {
      nombre: 'Zapatillas Adidas Run 9',
      precio: '50000',
      descripcion: 'Ideales para andar, caminar y correr. Poseen una suela antideslizante y de goma que se adapta perfectamente al pie del usuario. Color gris',
      srcImg: 'https://images.unsplash.com/photo-1556278777-a2a98c0d56da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    producto17: {
      nombre: 'Zapatillas Adidas Blue',
      precio: '70000',
      descripcion: 'Ideales para andar, caminar y correr. Poseen una suela antideslizante y de goma que se adapta perfectamente al pie del usuario.',
      srcImg: 'https://images.unsplash.com/photo-1532735180885-700d50fafbaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    producto18: {
      nombre: 'Zapatillas Adidas Edicion "Pro"',
      precio: '85000',
      descripcion: 'Ideales para andar, caminar y correr. Poseen una suela antideslizante y de goma que se adapta perfectamente al pie del usuario.',
      srcImg: 'https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    },
    producto19: {
      nombre: 'Zapatillas Adidas 7',
      precio: '53000',
      descripcion: 'Ideales para andar, caminar y correr. Poseen una suela antideslizante y de goma que se adapta perfectamente al pie del usuario.',
      srcImg: 'https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    producto20: {
      nombre: 'Zapatillas Adidas Run 8',
      precio: '40000',
      descripcion: 'Ideales para andar, caminar y correr. Poseen una suela antideslizante y de goma que se adapta perfectamente al pie del usuario.',
      srcImg: 'https://images.unsplash.com/photo-1613972798457-45fc5237ae32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    producto21: {
      nombre: 'Zapatillas Adidas Run 12',
      precio: '65000',
      descripcion: 'Ideales para andar, caminar y correr. Poseen una suela antideslizante y de goma que se adapta perfectamente al pie del usuario.',
      srcImg: 'https://images.unsplash.com/photo-1606297255627-c58c609140e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    producto22: {
      nombre: 'Botines Adidas Pro',
      precio: '75000',
      descripcion: 'Ideales para el entrenamiento del dia a dia. Color Verde, Consulta por sus dos versiones, con o sin tapones.',
      srcImg: 'https://images.unsplash.com/photo-1604727260027-e35db6bffb08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    producto23: {
      nombre: 'Zapatillas Adidas "OU" 2',
      precio: '30000',
      descripcion: 'Ideales para andar y caminar. Color blanca con logo negro.',
      srcImg: 'https://images.unsplash.com/photo-1620844595703-c47c4ad2cc2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    producto24: {
      nombre: 'Zapatillas Run 10',
      precio: '65000',
      descripcion: 'Ideales para andar, caminar y correr. Poseen una suela antideslizante y de goma que se adapta perfectamente al pie del usuario.',
      srcImg: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
    },
    producto25: {
      nombre: 'Zapatillas Nike Pro 8',
      precio: '55000',
      descripcion: 'Ideales para andar, caminar y correr. Poseen una suela antideslizante y de goma que se adapta perfectamente al pie del usuario.',
      srcImg: 'https://images.unsplash.com/photo-1611080028152-8f14b0078f9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80'
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
    templateProd.querySelector('.contenedor-img img').setAttribute('alt', producto.nombre)
    templateProd.querySelector('.contenedor-img img').setAttribute('src', producto.srcImg)
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