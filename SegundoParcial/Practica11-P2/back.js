function iniciarMapa() {
  var coordenadas = { lat: 21.152639, lng: -101.711598 }
  var propiedades1 = { center: coordenadas, zoom: 12 }
  var propiedades2 = { center: coordenadas, zoom: 12, disableDefaultUI: true }
  var propiedades3 = { center: coordenadas, zoom: 12, zoomControl: false, scaleControl: false }
  var propiedades4 = { center: coordenadas, zoom: 12, mapTypeControl: true, mapTypeControlOption: { style: google.maps.mapTypeControlStyle.DROPDONW_MENU, mapTypeIds: ['roadmap', 'satellite', 'terrain'] } }
  var propiedades5 = { center: coordenadas, zoom: 12, mapTypeControl: true, mapTypeControlOption: { style: google.maps.mapTypeControlStyle.HORIZONTAL_BAR, position: google.maps.ControlPosition.TOP_CENTER}, zoomControl: true, zoomControlOptions:{position: google.maps.ControlPosition.LEFT_CENTER}, scaleControl: true, streetViewControl: true, streetViewControlOptions: {position: google.maps.ControlPosition.LEFT_TOP}, fullscreenControl: true };

  var limites = {
    north: 21.390039,
    south: 20.858414,
    west: -102.149631,
    east: -101.092990
  }

  var propiedades6 = {center: coordenadas, zoom: 12, restriction: {latLngBounds: limites, strictBounds: false}}

  var propiedades7 = {center: coordenadas, zoom: 12, mapTypeID: "satellite"}

  var map1 = new google.maps.Map(document.getElementById('map1'), propiedades1);

  var map2 = new google.maps.Map(document.getElementById('map2'), propiedades2);

  var map3 = new google.maps.Map(document.getElementById('map3'), propiedades3);

  var map4 = new google.maps.Map(document.getElementById('map4'), propiedades4);

  var map5 = new google.maps.Map(document.getElementById('map5'), propiedades5);

  var map6 = new google.maps.Map(document.getElementById('map6'), propiedades6);

  var map7 = new google.maps.Map(document.getElementById('map7'), propiedades7);
  map7.setTilt(47);

}