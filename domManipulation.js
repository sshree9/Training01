var app = {};

app.createHeading = function(text, containerId){

 	var headerElement = document.createElement('h1');

 	var textNode = document.createTextNode(text);

 	headerElement.appendChild(textNode);

 	var parent = document.getElementById(containerId);



 	parent.appendChild(headerElement);

}

app.createGallery = function(){
	var Product = function(productName,modelName,ratePerUnit,image){

	this.productName = productName;
	this.modelName = modelName;
	this.ratePerUnit = ratePerUnit;
	this.image = image;

	this.toString = function()
	{
		return this.productName + this.ratePerUnit;
	}
}
	var laptop = new Product('laptop','dell',45000,'dellinsp14');

	app.renderProduct(laptop);
}

app.renderProduct = function(product){

	var head = document.createElement('h4');
	var prdtext = document.createTextNode(product.productName);
	head.appendChild(prdtext);

	var image = new Image(100,100);
	image.src = 'images/' + product.image + '.jpg';
	image.alt = 'dell laptop' 

	var price = document.createElement('p');
	var pricetext = document.createTextNode(product.ratePerUnit);
	price.appendChild(pricetext);

	var container = document.createElement('div');

	container.appendChild(head);
	container.appendChild(image);
	container.appendChild(price);
	
	document.body.appendChild(container);

}



app.createHeading("Computer Mall", 'banner');
app.createGallery();