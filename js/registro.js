class Usuario {
    constructor(dni, nombre, apellido, especialidad, email, password){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.especialidad = especialidad;
        this.email = email;
        this.password = password;
    }
}

validarUsuario.addEventListener ("submit", validarRegistro);

let usuarios = [];

document.addEventListener("DOMContentLoaded", function(){
    usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
});

document.getElementById("validarRegistro").addEventListener("click", validarRegistro);

//Validaciones

function validarRegistro(e){
    e.preventDefault();

    const dni = document.querySelector("#dni").value;
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const especialidad = document.querySelector("#especialidad").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmarPassword = document.querySelector("#confirmarPassword").value;
    const validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const resultadoValidacion = validarEmail.test(email);

    const validarUsuario = document.querySelector("#validarUsuario");

    if (dni === "" || nombre === "" || apellido === "" || especialidad === "" ||  email === "" || password === "" || confirmarPassword === ""){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar todos los campos',
          })
    } else if (!resultadoValidacion){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El correo ingresado no existe',
          })
    } else if(password.length < 6){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La contraseña debe ser mayor a 6 caracteres',
          })
    } else if (password !== confirmarPassword){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Las contraseñas deben ser iguales',
          })
    } else {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Usuario registrado correctamente',
            showConfirmButton: false,
            timer: 1500
          })
    }

    const newUser = new Usuario(dni, nombre, apellido, especialidad, email, password);

    usuarios.push(newUser);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}