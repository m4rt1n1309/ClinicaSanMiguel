//para guardar en el local storage
class Turno{
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
class UsarTurno{
    constructor(){
        this.dni = dni;
        this.fecha = fecha;
        this.horarios = horarios;
    }
}

let paciente = [];
paciente = JSON.parse(localStorage.getItem("usuariosPacientes")) || [];

let medi = [];
medi = JSON.parse(localStorage.getItem("usuariosProfesionales"))  || [];

let turnosOcupados = [];
turnosOcupados = JSON.parse(localStorage.getItem("turnosOcupados")) || [];

let Turnos = [];
Turnos = JSON.parse(localStorage.getItem("Turnos")) || [];


console.log(medi);
console.log(paciente);
console.log(turnosOcupados);
console.log(Turnos);


//setear el nombre paciente logeado al titulo...
const especialidades = document.getElementById("especialidades");
const profesional = document.getElementById("medicos");
const fechaTurno = document.getElementById("fechaTurno");
const divHorarios = document.getElementById("divHorarios");
const horarioTurnos = document.getElementById("horarioTurnos");

const turnoSeleccionado = document.getElementById("turnoSeleccionado");

const motivo = document.getElementById("motivo");



document.getElementById("turnoSeleccionado").hidden = false;
document.getElementById("divTurno").hidden = false;

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
            opcion.text = medico.apellido +' '+  medico.nombre;

            profesional.appendChild(opcion);
        }
    });

}

/*FECHA ACTUAL */
var fechaActual = new Date();
// Obtiene los componentes de la fecha
var año = fechaActual.getFullYear();
var mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Suma 1 al mes porque los meses comienzan desde 0
var dia = fechaActual.getDate().toString().padStart(2, '0');

// Formatea la fecha como 'yyyy-mm-dd'
var fechaFormateada = `${año}-${mes}-${dia}`;

function cargarHorarios(){

    //console.log("prueba");
    const fechaSelec = document.getElementById("fechaTurno").value;
    console.log(fechaSelec);
    console.log(fechaFormateada);
    if(fechaSelec < fechaFormateada ){

        /*muestro mensaje y seteo la fecha actual en el caso de poner una fecha anteror */
        alert("no puede seleccionar una fecha anterior al día de hoy");
        document.getElementById("fechaTurno").value = fechaFormateada;
    }
    
    
    

    horarioTurnos.innerHTML = '';
    medi.forEach(function(med){
        let nombreComp = med.apellido +' '+  med.nombre;

        if(nombreComp == profesional.value ){
    
            med.horario.forEach(turnos => {
                const turno = document.createElement("button");
                turno.textContent  = turnos;
                turno.onclick = function() {
                    // Función que se ejecutará al hacer clic en el botón
                    //alert("Hiciste clic en el botón con horario: " + this.textContent);
                    // Cambia el color del botón al hacer clic
                    //this.style.backgroundColor = "#e74c3c";
                    turnoSeleccionado.textContent= this.textContent;
                };
                turno.className = "turnoHorario-btn"
                horarioTurnos.appendChild(turno);
            });
           // console.log(horarioSelect);
        }
    })   
}

function validarDatos(){

    console.log(especialidades.value);

    console.log(profesional.value);

    console.log(fechaTurno.value);

    console.log(turnoSeleccionado.textContent);

    console.log(motivo.value);

}



function grabar(){


}

//turnoSeleccionado

//Crea instancia para guardar newUser 
//const newTurno = new Turnos(id,paciente,especialidad,medico,fecha,horario,motivo);

// agrega newUser al array
//turnosAgendados.push(newUser);

//convierte a JSON y almacena en el localStorage el newUser
//localStorage.setItem("turnos",JSON.stringify(turnosAgendados) );






