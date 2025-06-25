document.addEventListener('DOMContentLoaded', function () {
    // Coordenadas iniciales para centrar el mapa en Guaduas
    const initialCoords = [5.0708, -74.6016];
    const map = L.map('map').setView(initialCoords, 14);

    // Añadir la capa de mapa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Variable para guardar el marcador
    let marker = null;

    // Obtener los campos del formulario para latitud y longitud
    const latInput = document.getElementById('latitud');
    const lngInput = document.getElementById('longitud');

    // Escuchar el evento 'click' en el mapa
    map.on('click', function (e) {
        const lat = e.latlng.lat.toFixed(6); // Coordenada de latitud con 6 decimales
        const lng = e.latlng.lng.toFixed(6); // Coordenada de longitud con 6 decimales

        // Si no existe un marcador, lo creamos
        if (marker === null) {
            marker = L.marker(e.latlng, { draggable: true }).addTo(map); // Hacemos el marcador arrastrable
        } else {
            // Si ya existe, solo movemos su posición
            marker.setLatLng(e.latlng);
        }

        // Actualizamos los valores en los campos del formulario
        latInput.value = lat;
        lngInput.value = lng;

        // Evento para cuando el usuario termina de arrastrar el marcador
        marker.on('dragend', function(event){
            const position = event.target.getLatLng();
            latInput.value = position.lat.toFixed(6);
            lngInput.value = position.lng.toFixed(6);
        });
    });
});