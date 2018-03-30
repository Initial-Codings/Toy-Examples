//Functions
function loopFunction(){
    var i = 2
    while (i < 3 ){
	  alert ("Please enter valid numbers");
	i++
}
}

 function promptFunction(){
	var a = prompt ("Enter 1st' Number");
    var b = prompt ("Enter 2nd' Number");
    var c = prompt ("Enter 3rd' Number"); 
	var num1 = parseInt (a);
    var num2 = parseInt (b);
    var num3 = parseInt (c);
    var sum = num1 + num2 + num3;
	if ((isNaN (sum)) || (sum === 0)) {
	    loopFunction ();
	    promptFunction();
    }else{
	alert ("The total is: " + sum);
}
 }
 

//Prompt for Numbers
alert ("Enter Three Numbers For Addition");
var a = prompt ("Enter 1st Number");
var b = prompt ("Enter 2nd Number");
var c = prompt ("Enter 3rd Number");

//Sum and Check The Numbers
var num1 = parseInt (a);
var num2 = parseInt (b);
var num3 = parseInt (c);
var sum = num1 + num2 + num3;

// Conditions for Not Entering Numbers
if ((isNaN (sum)) || (sum === 0)) {
	loopFunction ();
	promptFunction();
}else{
	alert ("The total is: " + sum);
}



