
var coordenadas = {
  lat: 21.152639,
  lng: -101.711598,
};

var propiedades = {
  center: coordenadas,
  zoom: 3,
  mapTypeI: ['roadmap', 'satellite', 'hybrid', 'terrain', 'style_map']
};

var map;

function iniciarMapa() {

  var styledMap = new google.maps.StyledMapType([
    {
      elementType: 'geometry',
      stylers: [{color: '#B93435'}]
    },
    {
      elementType: 'lables.text.stroke',
      stylers: [{color: '#E5D52B'}]
    },
    {
      elementType: 'lables.text.fill',
      stylers: [{color: '#030203'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#2B6471'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry.stroke',
      stylers: [{color: '#D2C38E'}]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#4CC56F'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#8CA694'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#8CA694'}]
    },
    {
      featureType: 'water',
      elementType: 'gemometry.stroke',
      stylers: [{color: '#CE1EAF'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#177C90'}]
    }



  ], { name: "Mapa oscuro" });

  map = new google.maps.Map(document.getElementById("mapa"), propiedades);

  map.mapTypes.set("style_map", styledMap);
  map.setMapTypeId('style_map');

}