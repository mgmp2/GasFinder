'use strict';
let map;

const showMap = (latitudSelect, longSelect) => {
   map = new GMaps({
    div: '#map',
    zoom: 16,
    lat: latitudSelect,
    lng: longSelect
  })


};






const reRender = (getValue, result) => {
    result.empty();
    getValue.forEach( getStation => {
        result.append(SearchItem(getStation, _ =>{reRender(getValue, result); }));
    })
};

const SearchItem = (data, update)  => {
    const item = $('<section class="item"></section>');
    const nam = $('<h3>'+data.name+'</h3>');
    const adrss= $('<h6>'+data.address+'</h6>');
    const district = $('<h6>'+data.district+'</h6>');
    const icon = $('<i class="fa fa-map" aria-hidden="true"></i>');

    item.append(nam);
    item.append(adrss);
    item.append(data.district);
    item.append(icon);

    icon.on('click', (e) => {
        showMap(data.lat, data.long);
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
