var app = {};

app.stringObject = function(){
	var name = "Javascript Programming";

	console.log(name.toUpperCase());
	console.log(name.length);
	console.log(name.substr(4,5));

	var names = "aman, rohan, vivek, ashu, ritesh";

	var nameList = names.split(',');

	for(var i=0; i< nameList.length;i++){
		console.log(nameList[i]);
	}
}

app.mathObject = function(){
	console.log(Math.pow(4,3));
}

app.windowObject = function(){
	window.open("quickstart.html", "example", "height = 400, width=500");
	//window.location = "http://www.google.com";
}

app.dateObject = function(){
	var joinDate = new Date(Date.UTC(2018,1,10));

	console.log("Date :="+joinDate.getDate());
	console.log("Month :="+joinDate.getMonth());
	console.log("Year :="+joinDate.getFullYear());

	var today = new Date();

	console.log(today);
}

app.arrayObject = function(){

	var cityList = ['Chennai','Chandigarh','Pune','Delhi','Bengaluru'];
		console.log(cityList);

	cityList.push('Hyderabad');
		console.log(cityList);

	cityList.splice(2,0,'Patiala');
		console.log(cityList);

		console.log(cityList.sort());

}
app.stringObject();
app.mathObject();
app.dateObject();

app.init=function(){
	var button = document.getElementById('newWindowButton');
	button.addEventListener('click', app.windowObject);
}

app.arrayObject();