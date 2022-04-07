
var coordenadas = {
    lat: 29.099358,
    lng: -110.956896,
  };
  
  var propiedades = {
    center: coordenadas,
    zoom: 3,
  };

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const idioma = urlParams.get("idioma");
  console.log(urlParams);

  var script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCMrQgga-C5zCuZLTVk2MPVzX7naqKZXZU&callback=iniciarMapa&language=${idioma}`;

  document.head.appendChild(script);

  var map;
  
  function iniciarMapa() {
    
    map = new google.maps.Map(document.getElementById("mapa"), propiedades);


    fetch("./Paises.json").then((response) => {
      debugger;
      console.log(response);
      response.json().then((lugares) => {
        //map = new google.maps.Map(document.getElementById("mapa"), propiedades);
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
          var marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(lugar.Latitud, lugar.Longitud),
            label: labels[cuenta % labels.length]
          });
  
          marker.addListener("click", function () {
            infowindow.open(map, marker);
          });
          
          cuenta++;
          debugger;
          markers.push(marker);
          console.log("Marcador: " + cuenta + " , valor" + markers);
        });
      });
    });
  
}