'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    const head = Header();
    head.append(Search());
    wrapper.append(head);
    root.append(wrapper);

}

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
