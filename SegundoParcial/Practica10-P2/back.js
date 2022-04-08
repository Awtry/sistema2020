
var coordenadas = {
  lat: 21.152639,
  lng: -101.711598,
};

var propiedades = {
  center: coordenadas,
  zoom: 12,
};

var map;


function iniciarMapa() {
  map = new google.maps.Map(document.getElementById("mapa"), propiedades);

  var icono = {
    url: "https://media.giphy.com/media/kbcy29fDlmwEHAzS7a/giphy.gif",
    scaledSize: new google.maps.Size(25, 25),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0),
  };

  var marker = new google.maps.Marker({
    position: coordenadas,
    icon: icono,
    map: map,
  });

  const boton = document.getElementById("botonInicio");

  var positionOptions = {
    enableHighAccuracy: true, 
    timeout: 10 * 1000,
    maximumAge: 30 * 3000
  }

  if (navigator.geolocation) {
    boton.addEventListener('click', function () {
      watchId = navigator.geolocation.watchPosition(function (position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        var coordenadas = lat + ',' + lng;

        var exactitud = position.coords.accuracy ? position.coords.accuracy : 'No disponible';
        var altitud = position.coords.altitude ? position.coords.altitude : 'No disponible';
        var velocidad = position.coords.speed ? position.coords.speed : 'No disponible';
        var fechayhora = (new Date(position.timestamp)).toString();

        const html = `
          <p>Coordenadas: ${coordenadas}</p>
          <p>Exactitud: ${exactitud}</p>
          <p>Altitud: ${altitud}</p>
          <p>Velocidad: ${velocidad}</p>
          <p>Fecha y Hora: ${fechayhora}</p>
        `;

        const datos = document.createElement("datos")
        datos.innerHTML = html;

        marker.setPosition(new google.maps.LatLng(lat, lng));
        mapa.panTo(new google.maps.LatLng(lat, lng));
      }, error, positionOptions);
    })
  }

  const botonDetener = document.getElementById("botonDetener");

  botonDetener.addEventListener('click', function () {
    if (watchId !== null) {
      navigator.geolocation.clearWatch(watchId);
      const html = `
          <p>Coordenadas: Se detuvo el monitoreo</p>
        `;

      const datos = document.createElement("datos")
      datos.innerHTML = html;
    }
  });

  function error(positionError) {
    console.log(positionError.message);
  }


}