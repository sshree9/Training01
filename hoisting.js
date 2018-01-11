
var mark = 40;

function show(){
	if(!mark)
	{
		var mark = 100; /*this gets hoisted as it is defined( means given the type var)*/
		/*mark = 100; this doesnt gets hoisted as not defined(without var)*/
	}

	alert(mark);
}

show();