(function(){

	function increment(value){
		sum = value;

		return function(value){
			sum = sum +value;
			return sum;
		}
	}

	var total1 = increment(20);

	var total2 = total1(10);

	console.log("total : =" + total2);

	var total3 = total1(30);

	console.log("total : =" + total3);
})();