//your JS code here. If required.
function twoCompare(){
	const number1 = prompt("Enter the First Number");
	const number2 = prompt("Enter the Second Number");
	
	let a= parseFloat(number1);
	let b = parseFloat(number2);   
 
	if(a === b)
	{
		alert(true);
	}
	else if( a !== b){
		alert(false); 
	}
	}       
twoCompare();