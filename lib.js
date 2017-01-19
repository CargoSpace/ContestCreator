function Lib(){

}

Lib.prototype.getUpperHour = function(hour_set, hour) {
	for (var i = 0; i < hour_set.length; i++) {
		for (var j = i + 1; j < i + 2; j++) {
			if(i == hour_set.length - 1) 
				return hour_set[0];
			if(hour >= hour_set[i] && hour < hour_set[j]) 
				return hour_set[j];
		};
	};	
};

module.exports = new Lib();