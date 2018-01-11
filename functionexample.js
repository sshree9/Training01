var app = {};

//function expression

app.show = function(){
	console.log("Function Expression");
} 

//function with arguements

app.showGreet = function(name,salute){
	console.log(salute+ "."+name);
}


//function with arguements and default value
app.safeGreet = function(name,salute){
	if(salute == undefined)
	{
		console.log("dear"+name);
	}	
	else{
		console.log(salute+ "."+name);
	}
}

app.totalsafeGreet = function(name,salute){

	if((salute == undefined)&&(name == undefined))	
     {
		console.log("dear"+"friend");
	}
}

//function with arguement accesing arguement

app.argsFunction = function(a,b){
	console.log(arguments.length);
	for(var i = 0; i< arguments.length;i++)
	{
		console.log(arguments[i]);
	}
}

//function returning value
app.calculate = function(dlrAmt){
	var inrAmt = dlrAmt * 65.00;

	return inrAmt;
}
//function taking another function as arguement
app.calculatewithOffer = function(funcref){
	var inrAmt = funcref(300);

	var netAmt = 100 +inrAmt;

	return netAmt;
}

//function returning another function
app.returnFunction = function(){

	console.log("function called");

	return function(){
		return "im a nested function";
	}
}

app.show();

app.showGreet('ramesh','mr');

app.showGreet('ramesh',);

app.safeGreet('ganesh');

app.totalsafeGreet();

app.argsFunction(4,8,12);

console.log(app.calculate(200));

console.log(app.calculatewithOffer(app.calculate));

var innerfunction = app.returnFunction();
console.log(innerfunction);
console.log(innerfunction());