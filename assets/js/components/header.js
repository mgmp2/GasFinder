'use strict';

const Header = (update) => {

    const header = $('<header></header>');
    const container = $('<div class="container"></div>');
    const h1 = $('<h1>Gas Finder </h1>');

    header.append(h1);
    return header;
}
