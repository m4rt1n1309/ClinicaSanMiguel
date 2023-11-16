//Funcionalidad del Registro de Medicos

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

let usuariosProfesionales = [];

document.addEventListener("DOMContentLoaded", function(){
    usuariosProfesionales = JSON.parse(localStorage.getItem("usuariosProfesionales")) || [];
});

document.getElementById("validarRegistro").addEventListener("click", validarRegistro);

//Validaciones

function validarRegistro(e){
    e.preventDefault();

    const dni = document.querySelector("#dni").value;
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const listaEspecialidad = document.querySelector("#listaEspecialidad").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmarPassword = document.querySelector("#confirmarPassword").value;
    const validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const resultadoValidacion = validarEmail.test(email);

    const validarUsuario = document.querySelector("#validarUsuario");

    if (dni === "" || nombre === "" || apellido === "" || listaEspecialidad === "" ||  email === "" || password === "" || confirmarPassword === ""){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar todos los campos',
          })
        return;
    } else if (!resultadoValidacion){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El correo ingresado no existe',
          })
        return;
    } else if(password.length < 7){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La contraseña debe ser mayor a 6 caracteres',
          })
        return;
    } else if (password !== confirmarPassword){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Las contraseñas deben ser iguales',
          })
        return; 
    } else {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Usuario registrado correctamente',
            showConfirmButton: false,
            timer: 1500
          })
    };

    

    const newUser = new Usuario(dni, nombre, apellido, listaEspecialidad, email, password);

    usuariosProfesionales.push(newUser);

    localStorage.setItem("usuariosProfesionales", JSON.stringify(usuariosProfesionales));

    validarUsuario.reset();
}



//Funcionalidad del Registro de Pacientes

class UsuarioPaciente {
    constructor(dniPaciente, nombrePaciente, apellidoPaciente, obraSocial, emailPaciente, passwordPaciente){
        this.dniPaciente = dniPaciente;
        this.nombrePaciente = nombrePaciente;
        this.apellidoPaciente = apellidoPaciente;
        this.obraSocial = obraSocial;
        this.emailPaciente = emailPaciente;
        this.passwordPaciente = passwordPaciente;
    }
}

validarPaciente.addEventListener ("submit", validarRegistroPaciente);

let usuariosPacientes = [];

document.addEventListener("DOMContentLoaded", function(){
    usuariosPacientes = JSON.parse(localStorage.getItem("usuariosPacientes")) || [];
});

document.getElementById("validarRegistroPaciente").addEventListener("click", validarRegistroPaciente);

function validarRegistroPaciente(e) {
    e.preventDefault();

    const dniPaciente = document.querySelector("#dniPaciente").value;
    const nombrePaciente = document.querySelector("#nombrePaciente").value;
    const apellidoPaciente = document.querySelector("#apellidoPaciente").value;
    const obraSocial = document.querySelector("#obraSocial").value;
    const emailPaciente = document.querySelector("#emailPaciente").value;
    const passwordPaciente = document.querySelector("#passwordPaciente").value;
    const confirmarPasswordPaciente = document.querySelector("#confirmarPasswordPaciente").value;
    const validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const resultadoValidacion = validarEmail.test(emailPaciente);

    const validarPaciente = document.getElementById("validarPaciente");

    if (dniPaciente === "" || nombrePaciente === "" || apellidoPaciente === "" || obraSocial === "" ||  emailPaciente === "" || passwordPaciente === "" || confirmarPasswordPaciente === ""){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar todos los campos',
        });
    } else if (!resultadoValidacion){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El correo ingresado no es válido',
        });
    } else if(passwordPaciente.length < 7){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La contraseña debe ser mayor a 6 caracteres',
        });
    } else if (passwordPaciente !== confirmarPasswordPaciente){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Las contraseñas deben ser iguales',
        });
    } else {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Usuario registrado correctamente',
            showConfirmButton: false,
            timer: 1500
        });
        const newUserPaciente = new UsuarioPaciente(dniPaciente, nombrePaciente, apellidoPaciente, obraSocial, emailPaciente, passwordPaciente);
        usuariosPacientes.push(newUserPaciente);
        localStorage.setItem("usuariosPacientes", JSON.stringify(usuariosPacientes));
        validarPaciente.reset();
    }
}