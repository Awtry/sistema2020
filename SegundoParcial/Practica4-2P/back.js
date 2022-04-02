var map;

var coordenadas = {
  lat: 0,
  lng: 0,
};

var propiedades = {
  center: coordenadas,
  zoom: 20,
};

function iniciaMapa() {
  /*
    var icono = {
        url: "https://media.giphy.com/media/2NJkigfPiu2dmpZg99/giphy.gif",
        scaledSize: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0),
    };
    */

  fetch('https://sistemasgeo.com/2022/fetch/paises.json')
    .then((response) => {
      response.json().then((datos) => {
        const map = new google.maps.Map(document.getElementById("map"), propiedades);
        console.log(datos);
        datos.forEach((marcador) => {
          console.log(marcador);
          var informacion = "<strong>País: </strong>" + marcador.CountryName;
          var infoWindow = new google.maps.infoWindow({
            content: informacion,
          });
          let marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(marcador.CapitalLatitude, marcador.CapitalLongitude),
            title: marcador.CountryName,
          });
          marker.addListener("click", function () {
            infoWindow.open(map, marker);
          });
        });
      });
    })
    .catch(function (error) {
      console.error("Hay un error aqui: " + error.message);
    });
}
