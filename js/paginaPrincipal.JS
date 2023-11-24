// const contenedorCard = document.querySelector('#contenedorCard');

// const profesionales = JSON.parse(localStorage.getItem('usuariosProfesionales'));


// function cargarProfesionales() {
//     let contadorTarjetas = 0; // Contador para realizar un seguimiento de las tarjetas en cada fila

//     profesionales.forEach(function (profesional) {
//         // Crear un nuevo div para cada tarjeta
//         let div = document.createElement('div');
//         div.className = "col-md-3 mb-4"; // Ajusta según tus necesidades

//         // Obtener la cadena base64 de la imagen desde el localStorage
//         let imgSrc = obtenerImagenDesdeLocalStorage(profesional.imagen);

//         // Crear la estructura de la tarjeta
//         div.innerHTML = `
//             <div class="card" style="width: 18rem;">
//                 <img src="${imgSrc}" class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title estilosTitulo">${profesional.nombre}</h5>
//                     <p class="card-text">Especialidad: ${profesional.especialidad}</p>
//                     <p class="card-text">${profesional.email}</p>
//                 </div>
//             </div>
//         `;

//         // Agregar la tarjeta a la fila de tarjetas
//         document.getElementById('filaTarjetas').appendChild(div);

//         // Aumentar el contador de tarjetas
//         contadorTarjetas++;

//         // Si hemos alcanzado 4 tarjetas, crear una nueva fila
//         if (contadorTarjetas === 4) {
//             document.getElementById('filaTarjetas').appendChild(document.createElement('div')); // Agregar un salto de línea (div vacío) para iniciar una nueva fila
//             contadorTarjetas = 0; // Reiniciar el contador de tarjetas para la nueva fila
//         }
//     });
// }

// function obtenerImagenDesdeLocalStorage(nombreImagen) {

//     const rutaImagen = nombreImagen;
//     return localStorage.getItem(rutaImagen) || 'https://us.123rf.com/450wm/hugok1000/hugok10001905/hugok1000190500198/123291745-ilustraci%C3%B3n-de-avatar-de-perfil-predeterminado-en-azul-y-blanco-sin-persona.jpg';

// }

// cargarProfesionales();

const contenedorCard = document.querySelector('#contenedorCard');

const profesionales = JSON.parse(localStorage.getItem('usuariosProfesionales'));

function cargarProfesionales() {
    let contadorTarjetas = 0; // Contador para realizar un seguimiento de las tarjetas en cada fila

    profesionales.forEach(function (profesional) {
        // Crear un nuevo div para cada tarjeta
        let div = document.createElement('div');
        div.className = "col-md-3 mb-4"; // Ajusta según tus necesidades

        // Obtener la cadena base64 de la imagen desde el localStorage
        let imgSrc = profesional.imagen;
        

        // Crear la estructura de la tarjeta
        div.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${imgSrc}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title estilosTitulo">${profesional.nombre}</h5>
                    <p class="card-text">Especialidad: ${profesional.especialidad}</p>
                    <p class="card-text">${profesional.email}</p>
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

// function obtenerImagenDesdeLocalStorage(nombreImagen) {
//     const rutaImagen = nombreImagen;
    
//     return localStorage.getItem(rutaImagen) || 'https://us.123rf.com/450wm/hugok1000/hugok10001905/hugok1000190500198/123291745-ilustraci%C3%B3n-de-avatar-de-perfil-predeterminado-en-azul-y-blanco-sin-persona.jpg';
// }

cargarProfesionales();

