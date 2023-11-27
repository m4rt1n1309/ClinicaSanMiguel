const contenedorCard = document.querySelector('#contenedorCard');

const profesionales = JSON.parse(localStorage.getItem('usuariosProfesionales'));

function cargarProfesionales() {
    let contadorTarjetas = 0; // Contador para realizar un seguimiento de las tarjetas en cada fila

    profesionales.forEach(function (profesional) {
        // Crear un nuevo div para cada tarjeta
        let div = document.createElement('div');
        div.className = " mb-4 col-md-6 col-lg-4 col-xl-4 col-xxl-3"; // Ajusta según tus necesidades

        // Obtener la cadena base64 de la imagen desde el localStorage
        let imgSrc = profesional.imagen;
        
         // Crear la estructura de la tarjeta
        div.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${imgSrc}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title estilosTitulo">${profesional.nombre} ${profesional.apellido}</h5>
                    <p class="card-text">Especialidad: ${profesional.especialidad}</p>
                    <p class="card-text">Lunas a Viernes de 8:00 a 16:00</p>
                </div>
            </div>
        `;

        // Agregar la tarjeta a la fila de tarjetas
        document.getElementById('filaTarjetas').appendChild(div);

        // Aumentar el contador de tarjetas
        contadorTarjetas++;

        // Si hemos alcanzado 4 tarjetas, crear una nueva fila
        if (contadorTarjetas === 4) {
            document.getElementById('filaTarjetas').appendChild(document.createElement('div')); // Agregar un salto de línea (div vacío) para iniciar una nueva fila
            contadorTarjetas = 0; // Reiniciar el contador de tarjetas para la nueva fila
        }
    });

    
}

cargarProfesionales();



