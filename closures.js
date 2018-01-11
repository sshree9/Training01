//IIFE

(function(){
			function outer()
			{
				//itemname n nested are private

				var itemName = 'computer';

				function nested(){
					console.log("from nested" + itemName);
				}

				nested();
			}


			//the follwing approches dont let the private itemname n nested get accesed out of the scope of the function outer
			//outer();
			//nested();
			//console.log("item name" + itemName)

			//for such an acces of private elements we try the returning approach which eventually 
			//leads to acces of itemname through item variant which captures the value returned by function wrapper
			function wrapper(){
				//private itemName
				var itemName = 'computer';

				//similar to getitemName() in java program
				return function(){
					console.log("inside inner function");

					return itemName;
				}
			}

			var item = wrapper();

			console.log(item);

			console.log(item());
})();