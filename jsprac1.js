var app = {};

likecount = 0;
dislikecount = 0;
happycount = 0;
sadcount = 0;

app.showlike = function(){

	console.log("like done");
    var likeDiv = document.getElementById("likeDiv");
	likeDiv.innerHTML = ++likecount;
}

app.showdislike = function(){
    
    console.log("dislike done");
	var dislikeDiv = document.getElementById("dislikeDiv");
    dislikeDiv.innerHTML = ++dislikecount;
}

app.showhappy = function(){
    
    console.log("happy done");
	var happyDiv = document.getElementById("happyDiv");
    happyDiv.innerHTML = ++happycount;
}

app.showhappy = function(){
    
    console.log("happy done");
	var happyDiv = document.getElementById("happyDiv");
    happyDiv.innerHTML = ++happycount;
}

app.init = function(){
	var likeButton = document.getElementById('likeButton');
	likeButton.addEventListener("click",app.showlike);

	var dislikeButton = document.getElementById('dislikeButton');
	dislikeButton.addEventListener("click",app.showdislike);
}