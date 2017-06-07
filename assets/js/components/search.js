'use strict';

// SHOW MY MAP WITH ROUTE
let map;

const showMap = (latitudSelect, longSelect) => {
   map = new GMaps({
    div: '#map',
    lat: latitudSelect,
    lng: longSelect
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




const reRender = (getValue, result) => {
    result.empty();
    getValue.forEach( getStation => {
        result.append(SearchItem(getStation, _ => {reRender(getValue, result); }));
    })
};

const SearchItem = (obtainResult, update)  => {
    const item = $('<section class="item"></section>');
    const nam = $('<h3>'+obtainResult.name+'</h3>');
    const adrss= $('<h6>'+obtainResult.address+'</h6>');
    const district = $('<h6>'+obtainResult.district+'</h6>');
    const icon = $('<i class="fa fa-map" aria-hidden="true"></i>');

    item.append(nam);
    item.append(adrss);
    item.append(obtainResult.district);
    item.append(icon);

    icon.on('click', (e) => {
        showMap(obtainResult.lat, obtainResult.long);
    })
    return item;
}
const Search = () => {

    const search = $('<section id="search"></section>');
    const box = $('<div class="box-input"</div>');
    const input = $('<input type="text" placeholder="Ingresa tu distrito a buscar">');
    const icon = $('<i class="fa fa-search" aria-hidden="true"></i>');
    const result = $('<section id="result"></section>');
    box.append(input);
    box.append(icon);
    search.append(box);
    search.append(result);

    input.on('keyup', (e) => {
        if (input.val()) {
            const filterObt = filterByDistrict(state.stations, input.val());
            reRender( filterObt, result);
        }
    })
    return search;
}
