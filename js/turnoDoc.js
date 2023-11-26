/*-------  --------- */

//const contenedorCard = document.querySelector('#contenedorCard');

const profesionales = JSON.parse(localStorage.getItem("usuariosProfesionales"))  || [];

const Turnos = JSON.parse(localStorage.getItem('turnos'));


const listaMed = document.getElementById("medicos");

const fecha = document.getElementById("fechaTurno");

function cargarDoc(){
    console.log("entro aqui")
    profesionales.forEach( function(medico){
        const opcion = document.createElement("option");
        opcion.text = medico.apellido +' '+  medico.nombre;

        listaMed.appendChild(opcion);
    })
}

cargarDoc();



function cargarTurnos() {
    let turnoCont = 0; // Contador para realizar un seguimiento de las tarjetas en cada fila
    document.getElementById('filaTarjetas').innerHTML = '';


    Turnos.forEach(function (turno) {

        if(turno.medico === listaMed.value ){
            if(turno.fecha === fecha.value){
                let div = document.createElement('div');
                div.className = " mb-4 col-md-6 col-lg-4 col-xl-4 col-xxl-3"; // Ajusta según tus necesidades
        
                // Obtener la cadena base64 de la imagen desde el localStorage
                //let imgSrc = profesional.imagen;
                
                 // Crear la estructura de la tarjeta
                div.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title estilosTitulo">Paciente: ${turno.paciente} </h5>
                            <p class="card-text">Especialidad: ${turno.especialidad}</p>
                            <p class="card-text">Fecha y hora: ${turno.fecha} - ${turno.horario} hs. </p>
                            <p class="card-text">Motivo Consulta: ${turno.motivo}</p>
                        </div>
                    </div>
                `;
        
                // Agregar la tarjeta a la fila de tarjetas
                document.getElementById('filaTarjetas').appendChild(div);
        
                // Aumentar el contador de tarjetas
                turnoCont++;
        
                // Si hemos alcanzado 4 tarjetas, crear una nueva fila
                if (turnoCont === 4){
                    document.getElementById('filaTarjetas').appendChild(document.createElement('div')); // Agregar un salto de línea (div vacío) para iniciar una nueva fila
                    contadorTarjetas = 0; // Reiniciar el contador de tarjetas para la nueva fila
                }

            }

        }


        // Crear un nuevo div para cada tarjeta
        
    });
}

