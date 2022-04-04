
var coordenadas = {
  lat: 21.161728,
  lng: -101.68631,
};

var propiedades = {
  center: coordenadas,
  zoom: 3,
};

var map;

function iniciarMapa() {
  var marcadores = [];
  var separador = [];
  var cuenta = 0;
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  fetch("./Paises.json").then((response) => {
    debugger;
    console.log(response);
    response.json().then((lugares) => {
      map = new google.maps.Map(document.getElementById("mapa"), propiedades);
      console.log(lugares);

      lugares.forEach((lugar) => {
        console.log(lugar);

       
        var infoWindowContent = '<div class="info_content">' + "<h5><striong> Nombre: </strong></h5>" + "<p>" + lugar.NombreLugar + "</p> <br>" + "<h5><striong> Capital: </strong></h5>" + "<p>" + lugar.Capital + "</p> <br>" + "<h5><striong> Habitantes: </strong></h5>" + "<p>" + lugar.Habitantes + "</p> <br>" + "<h5><striong> País: </strong></h5>" + "<p>" + lugar.Pais + "</p> <br>" + "</div>";
        var infowindow = new google.maps.InfoWindow({
          content: infoWindowContent,
        });

        debugger;
        separador.push({lat: lugar.Latitud, lng: lugar.Longitud})

        debugger;
        const marcador = new google.maps.Marker({
          map: map,
          position: new google.maps.LatLng(lugar.Latitud, lugar.Longitud),
          label: labels[cuenta % labels.length]
        });

        marcador.addListener("click", function () {
          infowindow.open(map, marcador);
        });
        
        cuenta++;
        debugger;
        marcadores.push(marcador);
        console.log("Marcador: " + cuenta + " , valor" + marcadores[cuenta]);
      });
    });
  });

  debugger;
  var makerCluster = new MarkerClusterer(map, marcadores, {
    imagePath : 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    maxZoom: 10

});
  /*
  var markerCluster = new MarkerClusterer(map, marcadores, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    gridSize: 60,
    zoomClick: true,
    maxZoom: 10
});
*/

  document.getElementById("btnroadmap").addEventListener("click", function () {
    map.setMapTypeId("terrain");
  });

  document.getElementById("btnsatellite").addEventListener("click", function () {
    map.setMapTypeId("satellite");
  });

  document.getElementById("btnhybrid").addEventListener("click", function () {
    map.setMapTypeId("hybrid");
  });

  document.getElementById("btnterrain").addEventListener("click", function () {
    map.setMapTypeId("terrain");
  });
}
