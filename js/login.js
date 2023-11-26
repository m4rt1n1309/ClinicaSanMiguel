
let usuariosPro = JSON.parse(localStorage.getItem('usuariosProfesionales'));

validarUsuario.addEventListener ("submit", validarLogin);



document.getElementById("validarLoginPro").addEventListener("click", validarLogin);








function validarLogin(e) {
	e.preventDefault();

	const DNI = document.querySelector('#dni').value;
    console.log(DNI);
	const password = document.querySelector('#password').value;



	if (!DNI || !password) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar todos los campos',
          })
	
 	}

	
	const existeDNI = usuariosPro.find(function (usuario) {
		return usuario.dni === DNI;
	});

	if (existeDNI !== undefined) {
		if (existeDNI.password === password) {
			

            location.href = 'turnoDoc.html';
		} else {
			Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Dni o contraseña incorectos',
              })
		}
	} else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Dni o contraseña incorectos',
          })
	}
}

let usuariosPac = JSON.parse(localStorage.getItem('usuariosPacientes'));

validarUsuario.addEventListener ("submit", validarLogin);



document.getElementById("validarLoginPaciente").addEventListener("click", validarLogin);








function validarLogin(e) {
	e.preventDefault();

	const DNI = document.querySelector('#dniPaciente').value;
    console.log(DNI);
	const password = document.querySelector('#passwordPaciente').value;



	if (!DNI || !password) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes completar todos los campos',
          })
	
 	}

	
	const existeDNI = usuariosPac.find(function (usuario) {
		return usuario.dniPaciente === DNI;
	});

	if (existeDNI !== undefined) {
		if (existeDNI.passwordPaciente === password) {
			

            window.location.replace("index.html");
		} else {
			Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Dni o contraseña incorectos',
              })
		}
	} else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Dni o contraseña incorectos',
          })
	}
}