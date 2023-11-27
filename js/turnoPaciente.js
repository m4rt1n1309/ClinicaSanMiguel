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
//nombre del profesional
//fecha de turnos
//horarios por fecha
//
//de esta forma tenemos un registro por mnedicos, que puede tener N días...
//y para cada uno de los días, se guardarían los horarios reservados
class UsarTurno{
    constructor(nombre,fecha,horarios){
        this.nombre = nombre; 
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
Turnos = JSON.parse(localStorage.getItem("turnos")) || [];


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



//document.getElementById("turnoSeleccionado").hidden = false;
document.getElementById("divTurno").hidden = true;

function nuevoTurno(){
    document.getElementById("divTurno").hidden = false;
}

const listaPaciente = document.getElementById("listaPaciente");

function cargarPaciente(){
    paciente.forEach(function(pacienteC){
        const opcion = document.createElement("option");
        opcion.text = pacienteC.apellidoPaciente +' '+  pacienteC.nombrePaciente;

        listaPaciente.appendChild(opcion);
    })
}
//cargo lista de pacientes
cargarPaciente();

function cargarMedicos(){
    const especialidadSelec = document.getElementById("especialidades").value;

    medicos.innerHTML = '';

    //console.log(especialidadSelec);

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
    
    
    
    //recorro los medicos para cargar los horarios que tengan
    //falta comparar los horarios ocupados para no incluirlos

    horarioTurnos.innerHTML = '';
    medi.forEach(function(med){
        let nombreComp = med.apellido +' '+  med.nombre;
        //encuentra el profesional para cargar los hoarios
        if(nombreComp == profesional.value ){
            /recorre los horarios para insertarlos/
            med.horario.forEach(turnos => {
                    //          9:00
                //recorro los horarios ocupados comparando con la fecha ingresada
                const validarH = turnosOcupados.find(function(hOcupado){
                    //una vez encontrado el registro de la fecha y doctor
                    return  hOcupado.nombre === nombreComp &&  hOcupado.fecha === fechaSelec && hOcupado.horarios === turnos;
                })
                if(validarH == undefined){
                    const turno = document.createElement("button");
                    turno.textContent  = turnos;
                    turno.onclick = function() {
                        // Función que se ejecutará al hacer clic en el botón

                        turnoSeleccionado.textContent= this.textContent;
                        this.classList.add("turnoSeleccionado");

                        const otrosTurnos = horarioTurnos.querySelectorAll(".turnoHorario-btn");
                        otrosTurnos.forEach(function (otroTurno) {
                            if (otroTurno !== turno) {
                                otroTurno.classList.remove("turnoSeleccionado");
                            }
                    });
                }
                    turno.className = "turnoHorario-btn"
                    horarioTurnos.appendChild(turno);
                }
            });
        }
    })   
}

function validarDatos(){

    //const id = Date.now();

    const varEspecialidad = especialidades.value

    const varProfesional = profesional.value;

    const varFechaTurno = fechaTurno.value;

    const varHorario = turnoSeleccionado.textContent;

    const varMotivo = motivo.value;


    if(
        varEspecialidad === '' || varProfesional === '' ||
        varFechaTurno === '' || varHorario === '' ||
        varMotivo === ''
    ){
        Swal.fire({
            icon: "warning",
            title: "Atención",
            text: "Debes completar todos los campos para agendar el Turno!"
        });
    }else{
        mostrarModal();
    }
}

function mostrarModal() {
    // Obtener el modal por su ID
    var modal = document.getElementById("modal");

    // Mostrar el modal
    modal.style.display = "block";
}

function cerrarModal() {
    // Obtener el modal por su ID
    var modal = document.getElementById("modal");
    //limpiar datos dsp de grabar
    especialidades.value = '';

    profesional.value = '';

    fechaTurno.value = '';
    horarioTurnos.innerHTML = '';
    turnoSeleccionado.textContent ='';
    
    motivo.value = '';
    //cierro el modal
    document.getElementById("divTurno").hidden = true;
    // Cerrar el modal
    modal.style.display = "none";

    cargarTurnos();
}

function confirmarTurno() {
    // Lógica para confirmar el turno
    Swal.fire({
        icon: "success",
        title: "Listo!",
        text: "Su Turno fue agendado exitosamente!",
        timer: 1500
    });
    
    // aqui deberiamos cargar el localStorage

    const id = Date.now();

    const varEspecialidad = especialidades.value

    const varProfesional = profesional.value;

    const varFechaTurno = fechaTurno.value;

    const varHorario = turnoSeleccionado.textContent;

    const varMotivo = motivo.value;
    
    const nombrePaciente = listaPaciente.value || '';

    const newTurno = new Turno(id,nombrePaciente, varEspecialidad, varProfesional, varFechaTurno, varHorario, varMotivo);
    Turnos.push(newTurno);
    localStorage.setItem("turnos", JSON.stringify(Turnos));

    const newUsarTurno = new UsarTurno(varProfesional, varFechaTurno, varHorario);
    turnosOcupados.push(newUsarTurno);
    localStorage.setItem("turnosOcupados", JSON.stringify(turnosOcupados));

    // Cerrar el modal después de la confirmación
    cerrarModal();
}



function mostrarModal2() {
    // Obtener el modal por su ID
    var modal = document.getElementById("modal2");

    // Mostrar el modal
    modal.style.display = "block";
}

function cerrarModal2() {
    // Obtener el modal por su ID
    var modal = document.getElementById("modal2");
    document.getElementById("divTurno").hidden = true;
    // Cerrar el modal
    modal.style.display = "none";

    cargarTurnos()
}

function confirmarTurno2() {
    // Lógica para confirmar el turno
 //limpiar datos dsp de cancelar
    especialidades.value = '';

    profesional.value = '';

    fechaTurno.value = '';
    horarioTurnos.innerHTML = '';
    turnoSeleccionado.textContent ='';
    
    motivo.value = '';

    // Cerrar el modal después de la confirmación
    cerrarModal2();
}

/*-------  --------- */

const contenedorCard = document.querySelector('#contenedorCard');

//const profesionales = JSON.parse(localStorage.getItem('usuariosProfesionales'));

function cargarTurnos() {
    let turnoCont = 0; // Contador para realizar un seguimiento de las tarjetas en cada fila
    document.getElementById('filaTarjetas').innerHTML ='';
    Turnos.forEach(function (turno02) {

        if(turno02.paciente ===  listaPaciente.value){
        // Crear un nuevo div para cada tarjeta
        let div = document.createElement('div');
        div.className = " mb-4 col-md-6 col-lg-4 col-xl-4 col-xxl-3"; // Ajusta según tus necesidades

        // Obtener la cadena base64 de la imagen desde el localStorage
        //let imgSrc = profesional.imagen;
        
         // Crear la estructura de la tarjeta
        div.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title estilosTitulo">Doctor: ${turno02.medico} </h5>
                    <p class="card-text">Especialidad: ${turno02.especialidad}</p>
                    <p class="card-text">Fecha y hora: ${turno02.fecha} - ${turno02.horario} hs. </p>
                    <p class="card-text">Motivo: ${turno02.motivo}</p>
                </div>
            </div>
        `;

        // Agregar la tarjeta a la fila de tarjetas
        document.getElementById('filaTarjetas').appendChild(div);

        // Aumentar el contador de tarjetas
        turnoCont++;

        // Si hemos alcanzado 4 tarjetas, crear una nueva fila
        if (turnoCont === 4) {
            document.getElementById('filaTarjetas').appendChild(document.createElement('div')); // Agregar un salto de línea (div vacío) para iniciar una nueva fila
            contadorTarjetas = 0; // Reiniciar el contador de tarjetas para la nueva fila
        }
        }

    });
}

cargarTurnos();
