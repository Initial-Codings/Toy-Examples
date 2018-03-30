//Functions

function loopFunction(){
    // Loop For Controlling "Please Alert"
    var i = 2;
    while (i < 3 ){
	  alert ("Please enter valid numbers");
	i++;
}
}

 function promptFunction(){
    /* Prompt Number, Sum and Check For Numbers 
    Conditions and Execution For Invalid Numbers*/
    var a = prompt ("Enter 1st' Number","0");
    var b = prompt ("Enter 2nd' Number","0");
    var c = prompt ("Enter 3rd' Number","0");
	var num1 = Number (a);
    var num2 = Number (b);
    var num3 = Number (c);
    var sum = num1 + num2 + num3;
	if (isNaN(sum) || sum === 0){
		loopFunction(); 
	    promptFunction();	
		}
    else{
	alert ("The total is: " + sum);
}
 }
 
promptFunction();
 



