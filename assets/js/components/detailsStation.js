'use strict';

const detailsStation = (update) => {
    const box   = $('<div class="container"></div>');
    const mapa  = $('<div id="map"></div>');
    const detail = $('<section class="detail"></section>');
    const name  = $('<h2>'+state.selectedStation.name+"</h2>");
    const hr    = $('<hr>');
    const addresS = $('<p>'+state.selectedStation.address+'</p>')
    const producto = $('<div class="product"></div>');

    state.selectedStation.products.forEach( (e,i) => {
        const productItem = $('<span class="product-'+state.selectedStation.products[i]+'">'+state.selectedStation.products[i]+'</span>');
        producto.append(productItem);
    } );
    box.append(mapa);
    detail.append(name);
    detail.append(hr);
    detail.append(addresS);
    detail.append(producto);
    box.append(detail);

    return box;
}
