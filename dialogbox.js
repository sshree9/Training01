var app = {};

app.alertBox = function(){

	console.log("Java script alert box");
    alert("hello from javascript");
}

app.confirmBox = function(){
    
    var response = confirm('Are u sure');
    console.log(response);
}

app.promptBox = function(){
    
    var info = prompt('yor email id', 'guest@abc.com');
    console.log(info);
}	

app.init = function(){
	var alertButton = document.getElementById('alertButton');
	alertButton.addEventListener("click",app.alertBox);

	var confirmButton = document.getElementById('confirmButton');
	confirmButton.addEventListener("click",app.confirmBox);

	var promptButton = document.getElementById('promptButton');
	promptButton.addEventListener("click",app.promptBox);
}