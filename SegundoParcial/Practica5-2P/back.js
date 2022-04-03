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
let map, popup, Popup;

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
        popup = new Popup(new google.maps.LatLng(marcador.Latitud , marcador.longitud), document.getElementById("content"));
        popup.setMap(mapa);
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
  class Popup extends google.maps.OverlayView {
    position;
    containerDiv;
    constructor(position, content) {
      super();
      this.position = position;
      content.classList.add("popup-bubble");

      // This zero-height div is positioned at the bottom of the bubble.
      const bubbleAnchor = document.createElement("div");

      bubbleAnchor.classList.add("popup-bubble-anchor");
      bubbleAnchor.appendChild(content);
      // This zero-height div is positioned at the bottom of the tip.
      this.containerDiv = document.createElement("div");
      this.containerDiv.classList.add("popup-container");
      this.containerDiv.appendChild(bubbleAnchor);
      // Optionally stop clicks, etc., from bubbling up to the map.
      Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
    }
    /** Called when the popup is added to the map. */
    onAdd() {
      this.getPanes().floatPane.appendChild(this.containerDiv);
    }
    /** Called when the popup is removed from the map. */
    onRemove() {
      if (this.containerDiv.parentElement) {
        this.containerDiv.parentElement.removeChild(this.containerDiv);
      }
    }
    /** Called each frame when the popup needs to draw itself. */
    draw() {
      const divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
      // Hide the popup when it is far out of view.
      const display = Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ? "block" : "none";

      if (display === "block") {
        this.containerDiv.style.left = divPosition.x + "px";
        this.containerDiv.style.top = divPosition.y + "px";
      }

      if (this.containerDiv.style.display !== display) {
        this.containerDiv.style.display = display;
      }
    }
  }

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
