

window.addEventListener("load", function(){
    this.document.getElementById("cargando").classList.toggle("cargando2")
})




$(document).ready(inicio);

function inicio(){
    $('#show').click(function(){
        $('#formulario').show(2000);
    });
    $('#hide').click(function(){
        $('#formulario').hide(2000);
    });
}
