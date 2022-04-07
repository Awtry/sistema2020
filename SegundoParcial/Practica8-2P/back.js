
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
  
}