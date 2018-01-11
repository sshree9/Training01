//extra info : revealing module pattern 

var calcSalary = (function(){

	var baseSalary = 60000;

	function changeSalary(amount)
	{
		baseSalary = baseSalary + amount;
	}

	return {
		raise:function(){changeSalary(5000);},						//object literal(return {})...used to return a private function...
		lower:function(){changeSalary(-5000);},						//here it's the function which calculates salary(within curly 
		showSalary: function(){return baseSalary;}		            // braces of return)
	};

})();

calcSalary.raise();
console.log(calcSalary.showSalary());

calcSalary.raise();
console.log(calcSalary.showSalary());

calcSalary.lower();
console.log(calcSalary.showSalary());
