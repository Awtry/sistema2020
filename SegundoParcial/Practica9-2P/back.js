function iniciarMapa() {



  var coordenadas = {
    lat: 21.152639,
    lng: -101.711598,
  };

  var propiedades = {
    center: coordenadas,
    zoom: 3,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'style_map']
    }
  };

  var styledMap = new google.maps.StyledMapType([
    [
      {
        elementType: 'geometry',
        stylers: [
          {
            "color": "#212121"
          }
        ]
      },
      {
        elementType: 'labels.icon',
        stylers: [
          {
            "visibility": "off"
          }
        ]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            "color": "#757575"
          }
        ]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [
          {
            "color": "#212121"
          }
        ]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [
          {
            "color": "#757575"
          }
        ]
      },
      {
        featureType: 'administrative.country',
        elementType: 'labels.text.fill',
        stylers: [
          {
            "color": "#c33737"
          }
        ]
      },
      {
        featureType: 'administrative.land_parcel',
        stylers: [
          {
            "visibility": "off"
          }
        ]
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
          {
            "color": "#757575"
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
          {
            "color": "#181818"
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [
          {
            "color": "#616161"
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            "color": "#1b1b1b"
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'geometry.fill',
        stylers: [
          {
            "color": "#84c238"
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
          {
            "color": "#8a8a8a"
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          {
            "color": "#cf4444"
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          {
            "color": "#78c4ce"
          }
        ]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry',
        stylers: [
          {
            "color": "#4e4e4e"
          }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [
          {
            "color": "#c8e774"
          }
        ]
      },
      {
        featureType: 'transit',
        elementType: 'labels.text.fill',
        stylers: [
          {
            "color": "#757575"
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            "color": "#000000"
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {
            "color": "#3d3d3d"
          }
        ]
      }
    ]
  ], { name: "Mapa oscuro" });

  map.mapTypes.set("style_map", styledMap);
  map.setMapTypeId('style_map');

  var map = new google.maps.Map(document.getElementById("mapa"), propiedades);

 


}