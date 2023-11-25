//para guardar en el local storage
class turno{
    constructor(id,paciente,especialidad,medico,fecha,horario,motivo){
        this.id = id;
        this.paciente = paciente;
        this.especialidad = especialidad;
        this.medico = medico;
        this.fecha = fecha;
        this.horario = horario;
        this.motivo = motivo;
        
    }
}

//aqui guardariamos 
//dni del profesional
//fecha de turnos
//horarios por fecha
//
//de esta forma tenemos un registro por mnedicos, que puede tener N días...
//y para cada uno de los días, se guardarían los horarios reservados
class turnosOcupadosLS{
    constructor(){
        this.dni = dni;
        this.fecha = fecha;
        this.horarios = horarios;
    }
}


//cargo pacientes
let paciente = [];
let medi =[];
let turnosOcupados = [];
///document.addEventListener("DOMContentLoaded", function(){
paciente = JSON.parse(localStorage.getItem("usuariosPacientes")) || [];

medi = JSON.parse(localStorage.getItem("usuariosProfesionales"))  || [];

turnosOcupados = JSON.parse(localStorage.getItem("turnosOcupados")) || [];
//});


console.log(medi);
console.log(paciente);
console.log(turnosOcupados);

//cargo medicos

/*
document.addEventListener("DOMContentLoaded", function(){
});

*/
//cargo todos los turnos ocupados 
/*
document.addEventListener("DOMContentLoaded", function(){
});*/



//setear el nombre paciente logeado al titulo...
const especialidades = document.getElementById("especialidades");
const profesional = document.getElementById("medicos");
const fechaTurno = document.getElementById("fechaTurno");
const divHorarios = document.getElementById("divHorarios");




document.getElementById("divTurno").hidden = true;

function nuevoTurno(){
    console.log("ESTAMOS A TODA VELOCIDAD ;) ")
    document.getElementById("divTurno").hidden = false;


}


function cargarMedicos(){
    const especialidadSelec = document.getElementById("especialidades").value;

    medicos.innerHTML = '';

    console.log(especialidadSelec);

    medi.forEach(function(medico){
        if(medico.especialidad === especialidadSelec){
            const opcion = document.createElement("option");
           // console.log(medico.apellido);
            //console.log(opcion);
            opcion.text = medico.apellido +', '+  medico.nombre;
            profesional.appendChild(opcion);
        }
    });


}
/*
cargarHorarios(){
    console.log("prueba")
}
*/





//document.getElementById("pruebaM").hidden = true;
//document.getElementById("pruebaM").hidden = false;
