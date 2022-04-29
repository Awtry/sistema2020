function iniciarMapa() {
  var coordenadas = { lat: 21.152639, lng: -101.711598 }
  var propiedades = { center: coordenadas, zoom: 12 }

  var map1 = new google.maps.Map(document.getElementById('map1'), propiedades);
  var marker = new google.maps.Marker({
    position: coordenadas,
    map: map1
  })
  marker.addEventListener('click', function(){
    map1.setZoom(8);
    map1.setCenter(marker.getPosition());
  })

  var map2 = new google.maps.Map(document.getElementById('map2'), propiedades);
  var marker2 = new google.maps.Marker({
    position: coordenadas,
    map: map2
  })
  marker.addEventListener('center_changed', function(){
    window.setTimeout( function(){
      map2.panTo(marker2.getPosition());
    }, 3000)
  })

  var map3 = new google.maps.Map(document.getElementById('map3'), propiedades);
 
  map3.addListener('zoom_changed', function(){
    var infowindow = new google.maps.InfoWindow({
      content: 'Cambia el zoom',
      position: coordenadas
    });
    infowindow.open(map3);
    nivelZoom = map3.getZoom();
    infowindow.setContent('Zoom'+nivelZoom);
  })

}