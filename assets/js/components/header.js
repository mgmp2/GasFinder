'use strict';

const Header = (update) => {

<<<<<<< HEAD
    const header = $('<header></header>');
    const container = $('<div class="container"></div>');
    const h1 = $('<h1>Gas Finder </h1>');

    header.append(h1);
=======
    const header    = $('<header></header>');
    const h1        = $('<h1>Gas Finder </h1>');
    const icon      = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
    header.append(h1);

    if(state.selectedStation) {

        header.prepend(icon);
        icon.on('click', (e) => {
            e.preventDefault();
            state.selectedStation = null;
            update();
            
        })
    }

>>>>>>> outTime
    return header;
}
