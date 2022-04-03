/*
var localidades = [
    {lat:  19.3327940, lng: -99.2125548, Nombre: "CDMX"}, //CDMX B
    {lat: 20.680933,  lng: -103.462491, Nombre: "Guadalajara"}, //GDL C
    {lat:  21.161728, lng: -101.686310, Nombre: "León"}, //LEON D
    {lat:  41.4981238 , lng: 2.1567566, Nombre: "España "}, //ESPAÑA E
    {lat: 25.689432, lng:  -100.317024, Nombre: "Monterrey"}, //MONTERREY F 
    {lat: 41.890540, lng: 12.493813, Nombre: "Italia"},//ITALIA G
    {lat: 36.161218, lng: -115.146309, Nombre: "Las Vegas"},// LAS VEGAS H
    {lat: -22.904173, lng: -43.172127, Nombre: "Rio de Janeiro"},//RIO DE JANEIRO I
    {lat: -34.616385, lng: -58.381344, Nombre: "Argentina"},// ARGENTINA J
    {lat: 35.683730, lng: 139.767327}, //TOKYO K
    {lat: 55.756816, lng: 37.617790},//RUSIA L
    {lat: 31.229804, lng: 121.466993},//CHINA M
    {lat: 40.766467, lng: -73.971459},//NUEVA YORK N
    {lat: 64.803980, lng: -150.929412},//ALASKA O
    {lat: 49.280711, lng: -123.117707},//VANCOUVER P
    {lat: 64.146055, lng: -21.944433},//ISLANDIA Q
    {lat: 59.913594, lng: 10.753161},//NORGUEGA R
    {lat: 48.858787, lng: 2.292927},//FRANCIA S
    {lat: 21.160806, lng: -86.853355},//CANCUN T
    {lat: 32.771877, lng: -96.796294},//DALLAS U
    {lat: 21.305364, lng: -157.858254},//HAWAII V
    {lat: -21.441783, lng: 46.157604},//MADAGASCAR W
    {lat: 25.196866, lng: 55.263843}//DUBAI X
];
*/

var coordenadas = {
  lat: 21.161728,
  lng: -101.68631,
};

var propiedades = {
  center: coordenadas,
  zoom: 3,
};

function iniciaMapa() {
  var marcadores = [];

  var cuenta = 1;

  fetch("./Paises.json").then((response) => {
    console.log(response);
    response.json().then((lugares) => {
      var map = new google.maps.Map(document.getElementById("mapa"), propiedades);
      console.log(lugares);

      lugares.forEach((marcador) => {
        console.log(marcador);
       
        var infoWindowContent = [
            ['<div class="info_content">' +
            '<h5><striong> Nombre: </strong></h5>' +
            '<p>' + marcador.NombreLugar + '</p> <br>' +
            '<h5><striong> Capital: </strong></h5>' +
            '<p>' + marcador.Capital + '</p> <br>' + 
            '<h5><striong> Habitantes: </strong></h5>' +
            '<p>' + marcador.Habitantes + '</p> <br>' +
            '<h5><striong> País: </strong></h5>' +
            '<p>' + marcador.Pais + '</p> <br>' +
            '</div>']
        ];

        var infowindow = new google.maps.InfoWindow({
            content: infoWindowContent,
        });

        let marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(marcador.Latitud, marcador.Longitud),
            title: marcador.NombreLugar,
          });
    
          marker.addListener("mouseover", function () {
            infowindow.open(map, marker);
          });
      });
    });
  });
  /*
  localidades.forEach((localidad) => {
    console.log(localidad);

    let marcador = new google.maps.Marker({
      map: map,
      position: localidad,
    });

    var informacion = "<div class=" + "container-fluid";

    var infowindow = new google.maps.InfoWindow({
      content: informacion,
    });

    marcador.addListener("mouseover", function () {
      infowindow.open(map, marcador);
    });

    cuenta++;

    marcadores.push(marcador);
  });
*/
  

  var markerCluster = new MarkerClusterer(map, marcadores, {
    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    gridSize: 60,
    zoomClick: true,
    maxZoom: 10,
  });

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
