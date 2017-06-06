'use strict';
const SearchItem = (data, update)  => {
    const item = $('<section id="item"></section>');
    const nam = $('<h3>'+data.name+'</h3>');
    const adrss= $('<h6>'+data.address+'</h6>');
    const district = $('<h6>'+data.district+'</h6>');
    item.append(nam);
    item.append(adrss);
    item.append(data.district);
    return item;
}




const reRender = (result , getValue) => {
    result.empty();
    getValue.forEach( getStation => {
        result.append(SearchItem(getStation, _ =>{reRender(result,getValue); }));
    })
};


const Search = () => {
    const search = $('<section id="search"></section>');
    const container = $('<div class="container"></div>');
    const input = $('<input type="text" placeholder="Ingresa tu distrito a buscar">');
    const icon = $('<i class="fa fa-search" aria-hidden="true"></i>');
    const result = $('<section id="result"></section>');
    search.append(input);
    search.append(icon);
    search.append(container);
    search.append(result);


    input.on('keyup', (e) => {
        if (input.val()) {
            const filterObt = filterByDistrict(state.stations, input.val());
            reRender( result, filterObt);
        }
    })
    return search;
}
