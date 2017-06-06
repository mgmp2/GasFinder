'use strict';

const Search = () => {
    const search = $('<section id="search"></section>');
    const container = $('<div class="container"></div>');
    const input = $('<input type="text" placeholder="Ingresa tu distrito a buscar">');
    const icon = $('<i class="fa fa-search" aria-hidden="true"></i>')
    search.append(input);
    search.append(icon);
    search.append(container);


    input.on('keyup', (e) => {
        if (input.val()) {

        }
    })
    return search;
}
