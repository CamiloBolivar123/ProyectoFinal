// Esperamos a que todo el contenido del HTML se cargue antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', function() {

    // Inicializa el mapa y lo centra en las coordenadas de Guaduas.
    var map = L.map('map').setView([5.070776412126217, -74.60158881361009], 15);

    // Añade la capa de mapa base de OpenStreetMap.
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Crea un marcador en el mapa.
    var marker = L.marker([5.070832236281878, -74.6016012167754]).addTo(map);
    
    // Le añade un popup al marcador.
    marker.bindPopup("<b>Guaduas</b><br>Mi lugar de nacimiento").openPopup();

});