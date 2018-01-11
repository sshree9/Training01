// create iife with a method changesalary() ... it has a local variable salary say 60000
//a closure is created to access this salary and a functionality to increase or decrease the salary by 5000
// as per user request

(function(){

	function changesalary(value){
		salary = value;

		return function (task){
			if(task == "raise")
			{
				salary = salary + 5000;
			}

			if(task == "lower")
			{
				salary = salary - 5000;
			}

			return salary;
		}
	}

	var salaryrequest = changesalary(55000);

	var currentSalary1 = salaryrequest("raise");

	console.log("current salary : =" + currentSalary1);

	var currentSalary2 = salaryrequest("lower");

	console.log("current salary: =" + currentSalary2 );

	var currentSalary3 = salaryrequest("lower");

	console.log("current salary: =" + currentSalary3);

})(); 