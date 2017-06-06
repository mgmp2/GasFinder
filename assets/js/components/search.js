'use strict';

const Search = () => {
    const search = $('<section id="search"></section>');
    const container = $('<div class="container"></div>');
    const input = $('<input type="text">');
    container.append(input);
    search.append(container)
    console.log(search);
    return search;
}
