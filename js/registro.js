//Funcionalidad del Registro de Medicos

class Usuario {
    constructor(dni, nombre, apellido, especialidad, email, password, imagen){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.especialidad = especialidad;
        this.email = email;
        this.password = password;
        this.imagen = imagen;
        this.dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];
        this.horario = ["9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","16:00","16:30","17:00","17:30","18:00"];
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
    const inputImagen = document.querySelector("#imagen");
    const validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const resultadoValidacion = validarEmail.test(email);

    const validarUsuario = document.querySelector("#validarUsuario");

    // Buscar si el correo ya existe en el localStorage
    const usuarioExistente = usuariosProfesionales.find((usuario) => usuario.email === email);

    const usuarioExistenteDni = usuariosProfesionales.find((usuario) => usuario.dni === dni);

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
    }   else if (usuarioExistente){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ya existe un usuario registrado con ese email',
              })
            return; 
    }   else if (usuarioExistenteDni){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ya existe un usuario registrado con ese DNI',
          })
        return;
    }  
        else {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Usuario registrado correctamente',
            showConfirmButton: false,
            timer: 1500
          })
    };

    
    const imagenFile = inputImagen.files[0];

    if (!imagenFile) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes seleccionar una imagen',
        });
        return;
    }

    // Usa FileReader para leer la imagen como una cadena base64
    const reader = new FileReader();

    reader.onload = function (e) {
        const imagenBase64 = e.target.result;
        const newUser = new Usuario(dni, nombre, apellido, listaEspecialidad, email, password, imagenBase64);
        usuariosProfesionales.push(newUser);
        localStorage.setItem("usuariosProfesionales", JSON.stringify(usuariosProfesionales));
        validarUsuario.reset();
    };

    reader.readAsDataURL(imagenFile);
}

    // const newUser = new Usuario(dni, nombre, apellido, listaEspecialidad, email, password, imagen);

    // usuariosProfesionales.push(newUser);

    // localStorage.setItem("usuariosProfesionales", JSON.stringify(usuariosProfesionales));

    // validarUsuario.reset();








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
    
    // Buscar si el DNI ya existe en el localStorage
    const dniExistente = usuariosPacientes.find((usuario) => usuario.dniPaciente === dniPaciente);

    // Buscar si el correo ya existe en el localStorage
    const emailExistente = usuariosPacientes.find((usuario) => usuario.emailPaciente === emailPaciente);

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
    } else if (dniExistente) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ya existe un usuario registrado con ese DNI',
        });
    } else if (emailExistente) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ya existe un usuario registrado con ese correo',
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

function mostrarVistaPrevia() {
    var input = document.getElementById('imagen');
    var preview = document.getElementById('preview');
    
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }

        reader.readAsDataURL(input.files[0]);
    }
}