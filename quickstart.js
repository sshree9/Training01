
var app = {};
app.name = 'ramesh';

app.show = function(){

	console.log("hello world");
	var greetDiv = document.getElementById("greeting");

	greetDiv.innerHTML = "<h1> Client side scripting </h1>" ;


}

app.init=function(){
	var greetButton = document.getElementById('greetButton');
	greetButton.addEventListener("click",app.show);
}