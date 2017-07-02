'use strict';


const searchItem = (station, update)  => {
    const item = $('<section class="item"></section>');
    const nam = $('<h3>'+station.name+'</h3>');
    const adrss= $('<h6>'+station.address+'</h6>');
    const district = $('<h6>'+station.district+'</h6>');
    const icon = $('<i class="fa fa-map" aria-hidden="true"></i>');

    item.append(nam);
    item.append(adrss);
    item.append(district);
    item.append(icon);

    icon.on('click', (e) => {
        e.preventDefault();
        state.selectedStation = station;
        update();
        showMap(state.selectedStation.lat, state.selectedStation.long);
    })
    return item;
}


const reRender = (getValue, result, update) => {
    result.empty();
    if(getValue.length > 0) {

        getValue.forEach( getStation => {
            result.append(searchItem(getStation,update));
        })
    } else {
        const output = $('<p> No se encontró el destino a buscar...<p>');
        result.append(output);
    }
};


const Search = (update) => {

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
            reRender( filterObt, result, update);
        }
    })
    return search;
}
