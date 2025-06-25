// Esperamos a que todo el contenido del HTML se cargue antes de ejecutar el script.
// Esto previene errores si el script intenta manipular elementos que aún no existen.
document.addEventListener('DOMContentLoaded', function() {

    // Inicializa el mapa y lo centra en las coordenadas deseadas con un nivel de zoom 13.
    var map = L.map('map').setView([5.068139052468412, -74.60273353963285], 16);

    // Añade la capa de mapa base de OpenStreetMap.
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Define las coordenadas para el polígono que marca la zona de interés.
    var polygonCoords = [
      [5.067641273642622, -74.60360068959768],
      [5.0669075330153674, -74.60263061056031],
      [5.067944309207804, -74.60222522907704],
      [5.068343740433781, -74.60284754443515]
    ];

    // Crea el polígono con las coordenadas y lo añade al mapa.
    var polygon = L.polygon(polygonCoords, {
      color: '#48C9B0', // Usamos el color menta de nuestra paleta
      fillColor: '#48C9B0',
      fillOpacity: 0.5
    }).addTo(map);

    // Añade un popup que aparece al hacer clic en el polígono.
    polygon.bindPopup("<b>Barrio Benjamín Herrera</b><br>Zona de interés del estudio.");

});