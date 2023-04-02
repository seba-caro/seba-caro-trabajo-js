//const formulario = document.querySelector('.formulario');

//formulario.addEventListener('submit', (evt) => {
  //  evt.preventDefault();
    //console.log("enviando informacion")
    //let busqueda = document.querySelector('.busqueda')
    //if (busqueda.value != "") {
      //  console.log("mostrar" + busqueda.data)
        //formulario.submit()
    //} else {
      //      console.log("no mostrar")
        //}
    //}
//)


function mostrarFormularioDeCuenta(){
document.getElementById('crearcuenta').style.display = 'block';
}


/*ingresar cuenta*/

const ingresar = document.querySelector('.login');
ingresar.onclick = (e) => {
    e.preventDefault();

    const ponercorreo = document.getElementById("Email").value;
    const passWord = document.getElementById("password").value;



    const Email = localStorage.getItem("Email");
    const Password = localStorage.getItem("Password");

    if( ponercorreo == "" && passWord == ""){
        Swal.fire(
            'Opps..!',
            'input field has no value!',
            'error'
        );
    }
    else
    {
        if(ponercorreo == Email && passWord == Password){
            Swal.fire(
                'Good job!',
                'login successful!',
                'success');
        }else{
            Swal.fire(
                'Opps..!',
                'Something is wrong!',
                'error');
        }
    };
};




/*hacer cuenta*/




const submit_button = document.querySelector(".botonsregister");
submit_button.onclick = (e) => {
    e.preventDefault();
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const correo = document.getElementById("correo").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;

    localStorage.setItem('Nombres', nombres);
    localStorage.setItem('Apellidos', apellidos);
    localStorage.setItem('Email', correo);
    localStorage.setItem('Password', pass);
    localStorage.setItem('Cpassword', cpass);
    if(nombres == "" && apellidos == "" && correo == "" && pass == "" && cpass == ""){
        Swal.fire(
            'Opps..!',
            'input field has no value!',
            'error'
        );
    }
    else
    {
        if(pass.length >= 6 && pass.length <= 20)
    {
        if( pass !== cpass){
            Swal.fire(
                'Opps..!',
                'Password not matching!',
                'error'
            );
        }
        else
        {
            Swal.fire(
                'Good job!',
                'Register successful!',
                'success'
            );
            setTimeout(()=>{
                    location.href='LoginBox.html';
                    },5000)
        }
    }
    else
    {
        Swal.fire(
            'Opps..!',
            'Input mim six digit password!',
            'error'
        );
    }
    }


}
 