'use strict';

const filterByDistrict = (stations,query) => {
	if(stations){
	       stations.filter( x => {
			            if(x.district.toLowerCase().indexOf(query)!= -1){
                            return x;
			} 	});
	}
}
