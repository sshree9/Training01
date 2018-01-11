var app = {};

app.show = function(){

	console.log("Java script ninja loading");
    var ninjaDiv = document.getElementById("ninja");
	ninjaDiv.innerHTML = "<h1>  Java script ninja </h1>";
}

app.style = function(){
    
    console.log("Java script ninja styling");
	var styleDiv = document.getElementById("ninja");
    styleDiv.style.textAlign = "center";
    styleDiv.style.color = "red";
    styleDiv.className = "heading";
}

app.init = function(){
	var showButton = document.getElementById('btn1');
	showButton.addEventListener("click",app.show);
	var styleButton = document.getElementById('btn2');
	styleButton.addEventListener("click",app.style);
}