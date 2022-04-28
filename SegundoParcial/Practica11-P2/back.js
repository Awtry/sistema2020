function iniciarMapa() {
  var coordenadas = { lat: 21.152639, lng: -101.711598}
  var propiedades1 = {center: coordenadas, zoom: 12}
  var propiedades2 = {center: coordenadas, zoom: 12, disableDefaultUI: true}
  var propiedades3 = {center: coordenadas, zoom: 12, zoomControl: false, scaleControl: false}
  var propiedades4 = {center: coordenadas, zoom: 12, mapTypeControl: true, mapTypeControlOption: {style: google.maps.mapTypeControlStyle.DROPDONW_MENU, mapTypeIds: ['roadmap', 'satellite', 'terrain']}}

  var map1 = new google.maps.Map(document.getElementById('map1'), propiedades1);

  var map2 = new google.maps.Map(document.getElementById('map2'), propiedades2);

  var map3 = new google.maps.Map(document.getElementById('map3'), propiedades3);

  var map4 = new google.maps.Map(document.getElementById('map4'), propiedades4);

  var map5 = new google.maps.Map(document.getElementById('map5'), propiedades5);

  var map6 = new google.maps.Map(document.getElementById('map6'), propiedades6);

  var map7 = new google.maps.Map(document.getElementById('map7'), propiedades7)

}