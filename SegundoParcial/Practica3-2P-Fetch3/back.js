
var coordenadas = {
    lat: 0,
    lng: 0,
}

var propiedades = {
    center: coordenadas,
    zoom: 2,
}

function iniciaMapa() {
    const map = new google.maps.Map(document.getElementById("map"), propiedades);

    const marcadores = obtieneMarcadores();

    for(marcador of marcadores) {

      let marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(marcador.latitude, marcador.longitude),
        title: marcador.name
      })
    }


  }

function obtieneMarcadores() {

  const markers = [
    {
      name : "México",
      longitude : "-99.1276",
      latitude : "19.427"
    },
    {
      name : "Brasil",
      longitude : "-47.9292",
      latitude : "40.4167"
    },
    {
      name : "España",
      longitude : "-3.70327",
      latitude : "40.4167"
    }
  ];

  return markers
}