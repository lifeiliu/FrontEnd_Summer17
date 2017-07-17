
function print(){
	document.write("this can be print out by function");
}

function get(){
	var num1=parseFloat(document.getElementById("num1").value);
	var num2=parseFloat(document.getElementById("num2").value);
	var result= num1+num2;
	document.getElementById("result").value=result;
}

function showHello(){
	alart("hello world!");
}