'use strict';
// Mi query se refiere al distrito que necesito
const filterByDistrict = (stations,query) => {
	if(stations){
	      return stations.filter( x => {
			  console.log(x);
			            if(x.district.toLowerCase().indexOf(query) != -1){
                            return x;
			} 	});


	}
}
