var app = {};

app.updateDom = function(data){
	var element = document.getElementById('info');
	element.innerHTML = data;
}

app.usingGlobalObject = function(){

	var employee = new Object();

	employee.employeeId = 101;
	employee.name = "Ramesh";

	employee.show = function(){
		return employee.employeeId + ":" + employee.name;
	}

	//console.log(employee.show());
	app.updateDom(employee.show());
}

app.usingObjectLiteral = function(){

	var book = {};

	book.bookName = "Mastering In Java Script";
	book.author = "Suresh";
	book.price = 450.00;

	book.review = function(){

		var rating = 3.2;

		if(this.author == 'Suresh')
		{
			rating = 4.5;
		}
		return this.bookName + "  rating:" + rating;
	}

	app.updateDom(book.review());
 }

app.usingLiteralStatic = function(){
	
	var Product = {

		productName: 'Laptop',
		modelName: 'dell',
		rateperunit:45000,
		image: 'dellinsp14',

		toString:function(){
			return this.productName + this.rateperunit;
		}

	}

	app.updateDom(Product.toString());
}

app.usingFunctionConstr = function(){

	var Product = function(productName,modelName,ratePerUnit,image){

	this.productName = productName;
	this.modelName = modelName;
	this.ratePerUnit = ratePerUnit;
	this.image = image;

	this.toString = function()
	{
		return this.productName + ratePerUnit;
	}
}

 var laptop = new Product('laptop','dell',45000,'dellinsp14');
 var desktop = new Product('desktop','lenovo',35000,'lenovopic');


 var productList = [laptop,desktop];

 return productList;
}

app.displayProducts = function(){

	var productList = app.usingFunctionConstr();

	productList.forEach(function(element,index){
		document.writeln(++index + "." + element.toString());
		document.writeln("</br>");
	});
}

//app.usingGlobalObject();
//app.usingObjectLiteral();
//app.usingLiteralStatic();
app.displayProducts();
