const tablaUsuario = document.querySelector('#tablaUsuario');
const tablaconf = document.querySelector('#tablaconfirmados');
let usuariosaRegistrar = JSON.parse(localStorage.getItem('usuariosPacientes' ));
let usuariosaRegistrar2 = JSON.parse(localStorage.getItem('usuariosProfesionales' ));
let allUsers = usuariosaRegistrar.concat(usuariosaRegistrar2)
console.log(allUsers);

function cargarTablaUser() {
	//limpiamos el html antes de cargar todos los producto, para evitar repeticiones
	//tablaUsuario.innerHTML = '';

	usuariosaRegistrar.map(function (paciente) {
		let tr = document.createElement('tr');

		tr.innerHTML = `
            <td>${paciente.dniPaciente}</td>
            <td>${paciente.nombrePaciente} ${paciente.apellidoPaciente}</td>

            <td>${paciente.emailPaciente}</td>
			<td>${'paciente'}</td>
			<td>
				<button class="btn btn-warning" onclick="confirmarRegistroP(${paciente.dniPaciente})">confirmar</button>
				<button class="btn btn-danger" onclick="borrarp(${paciente.dniPaciente})"> eliminar </button>
			</td>
        `;

		tablaUsuario.appendChild(tr);
	});

    usuariosaRegistrar2.map(function (doctor) {
		let tr = document.createElement('tr');

		tr.innerHTML = `
            <td>${doctor.dni}</td>
            <td>${doctor.nombre} ${doctor.apellido}</td>
            
            <td>${doctor.email}</td>
			<td>${'doctor'}</td>
			<td>
				<button class="btn btn-warning" onclick="confirmarRegistroD(${doctor.dni})"> confirmar</button>
				<button class="btn btn-danger" onclick="borrard(${doctor.dni})">eliminar</button>
			</td>
        `;

		tablaUsuario.appendChild(tr);
	});
}

cargarTablaUser();
cargarTablaUserconf();
let usuariosConfDoc = [];
//evento que se ejecuta apenas carga la pagina
document.addEventListener('DOMContentLoaded', function () {
	usuariosConfDoc = JSON.parse(localStorage.getItem('usuariosConfirmadosDoc')) || [];
});


function confirmarRegistroD(D){
    const user  = usuariosaRegistrar2.find(function (product) {
		return product.dni == D;
	});

    usuariosConfDoc.push( user) ;

    localStorage.setItem('usuariosConfirmadosDoc', JSON.stringify(usuariosConfDoc));

     let nuevo = usuariosaRegistrar2.filter(function (producto) {
		return producto.dni != D;


	});
    localStorage.setItem('usuariosProfesionales', JSON.stringify(nuevo));

    location. reload()



    
}

let usuariosConfPac = [];
document.addEventListener('DOMContentLoaded', function () {
	usuariosConfPac = JSON.parse(localStorage.getItem('usuariosConfirmadosPac')) || [];
});

function confirmarRegistroP(D){
    const user = usuariosaRegistrar.find(function (product) {
		return product.dniPaciente == D;
	});

    usuariosConfPac.push(user);

     localStorage.setItem('usuariosConfirmadosPac', JSON.stringify(usuariosConfPac));

     let nuevo2 = usuariosaRegistrar.filter(function (producto) {
		return producto.dniPaciente != D;


	});
    localStorage.setItem('usuariosPacientes', JSON.stringify(nuevo2));

    location. reload()



    
}





console.log(usuariosConfDoc);

function cargarTablaUserconf() {
	//limpiamos el html antes de cargar todos los producto, para evitar repeticiones
	//tablaUsuario.innerHTML = '';
    let usersConfDoc = JSON.parse(localStorage.getItem('usuariosConfirmadosDoc'));
    let usersConfPac = JSON.parse(localStorage.getItem('usuariosConfirmadosPac'));


    if (usersConfPac != null) {
        
    
	usersConfPac.map(function (pac) {
		let tr = document.createElement('tr');

		tr.innerHTML = `
            <td>${pac.dniPaciente}</td>
            <td>${pac.nombrePaciente} ${pac.apellidoPaciente}</td>

            <td>${pac.emailPaciente}</td>
			<td>${'paciente'}</td>
			
        `;

		tablaconf.appendChild(tr);
	});
    }

    if (usersConfDoc != null) {
        
    

    usersConfDoc.map(function (doc) {
		let tr = document.createElement('tr');

		tr.innerHTML = `
            <td>${doc.dni}</td>
            <td>${doc.nombre} ${doc.apellido}</td>
            
            <td>${doc.email}</td>
			<td>${'doctor'}</td>
			
        `;

		tablaconf.appendChild(tr);
	});
    }
}



function borrarp(D){
    let nuevo = usuariosaRegistrar.filter(function (producto) {
		return producto.dniPaciente != D;


	});
    localStorage.setItem('usuariosPacientes', JSON.stringify(nuevo));

    location. reload()



}

function borrard(D){
    let nuevo = usuariosaRegistrar2.filter(function (producto) {
		return producto.dni != D;


	});
    localStorage.setItem('usuariosProfesionales', JSON.stringify(nuevo));

    location. reload()



}
