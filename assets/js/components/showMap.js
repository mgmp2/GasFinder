'use strict';

// SHOW MY MAP WITH ROUTE
let map;

const showMap = (latitudSelect, longSelect) => {
   map = new GMaps({
    div: '#map',
    lat: latitudSelect,
    lng: longSelect,
    zoom: 16
  })

  GMaps.geolocate({
  success: function(position) {
    map.setCenter(position.coords.latitude, position.coords.longitude);
    map.setZoom(12);
      map.addMarker({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        title: "Lima-Miraflores ",

      });
      map.drawRoute({
        origin: [position.coords.latitude, position.coords.longitude],
        destination: [latitudSelect, longSelect],
        travelMode: 'DRIVING',
      });
      map.addMarker({
        lat: latitudSelect,
        lng: longSelect,
        title: "Llegada" ,

      });
    },
  });

};
