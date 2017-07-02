'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    //Append de componentes
    wrapper.append(Header( _ => {
        render(root);
    }));

    if(state.selectedStation == null ) {
        wrapper.append(Search( _ => {
            render(root);
        }));
    }
    else {
        wrapper.append(detailsStation( _ => {
            render(root);
    }));
    }
    root.append(wrapper);
};

const state = {
  stations: null,
  selectedStation: null
};

$(_ => {
        getJSON('stations.json', (err, json) => {
            if (err) { return alert(err.message);}
       state.stations = json;

        const root = $('.root');
        render(root);

        });

})
