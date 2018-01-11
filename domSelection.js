var app = {};

app.selectByTagName = function(){

	var listItems = document.getElementsByTagName("li");
	var divItems = document.getElementsByTagName("div");

	var msg1 = "page has" + listItems.length +'listItems';
	var msg2 = "    and " + divItems.length +'divItems';

	console.log('page has ' + listItems.length +'listItems');
	console.log('    and ' + divItems.length +'divItems');

	var output = document.getElementById('output');
	output.innerHTML = msg1+msg2;

	var target = listItems[7];
	target.setAttribute("style", 'color:green');
}

app.selectByQuery = function(){
     var element = document.querySelector('.links');

     console.log(element);
     
}

app.selectByQueryMultiple = function(){

	var elements = document.querySelectorAll('.links');

     console.log(elements);
}

app.selectFirstandLastChild = function(){

	var unordList = document.getElementById('list');
	var unordList2 = document.querySelectorAll('ul'); //node list is assigned to unordlist2

	var firstChild = unordList.firstElementChild;
	var lastChild = unordList.lastElementChild;

	console.log(firstChild.innerHTML);
	console.log(lastChild.innerHTML);

	console.log(unordList2[0].firstElementChild.innerHTML);
	console.log(unordList2[0].lastElementChild.innerHTML);
}

app.selectChildandParent = function(){}

app.selectSiblings = function(){}

app.selectByname = function(){}

app.selectByClassName = function(){}

app.init = function(){
	var countLink = document.getElementById('countlink');

	countLink.addEventListener('click', function(event){
		event.preventDefault();
		app.selectByTagName();
	})
}


//app.selectByTagName();
//app.init();

//app.selectByQuery();
//app.selectByQueryMultiple();
app.selectFirstandLastChild();