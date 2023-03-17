const formulario = document.querySelectorAll('.formulario');

formulario.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log("enviando informacion")
    let busqueda = document.querySelectorAll('.busqueda')
    if (busqueda.value != "") {
        console.log("mostrar" + busqueda.data)
        //formulario.submit()
    } else {
            console.log("no mostrar")
        }
    }
)
