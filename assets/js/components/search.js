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





















//
//
// const StationItem = (data,update)=>{
// 	const todo = $("<div></div>");
// 	const span = $("<span>"+data.name+"</span>");
// 	const parr = $("<p>"+data.address+"</p>");
//
// 	todo.append(span);
// 	todo.append(parr);
//
// 	return todo;
//
// };
//
// const reRender = (listStations,encontrados)=>{
// 	listStations.empty();
//
// 	encontrados.forEach(station=>{
// 		listStations.append(StationItem(station, _ =>{reRender(listStations,encontrados); }));
//
// 	});
// };
//
// const Search = (update)=>{
// 	const contenedor = $("<div></div>");
// 	const input = $("<input type='text'>");
// 	const listStations = $("<div></div>");
//
// 	contenedor.append(input);
// 	contenedor.append(listStations);
//
// 	input.on("keyup", () =>{
// 		if(input.val() != ""){
// 			console.log(filterByDistrict(state.stations,input.val()));
// 			var encontrados = filterByDistrict(state.stations,input.val());
// 		}
//
// 		reRender(listStations,encontrados);
// 	});
//
// 	return contenedor;
// };
