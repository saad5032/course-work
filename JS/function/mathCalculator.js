console.log("------------------------------------")
console.log("Math Calculator")
console.log("Enter any two numbers and get all the simple arithmetic operations")
console.log("------------------------------------")
var readLineSync = require("readline-sync")
var num1 = readLineSync.questionInt("Enter first number : ")
var num2 = readLineSync.questionInt("Enter the second number : ")
console.log("------------------------------------")
function add(a,b){
     var a = console.log('Addition : '+(a+b));
     return a;
}

function sub(a,b){
    var s = console.log('Substraction : '+(a-b));
    return s;
}

function mul(a,b){
    var m=console.log('Multiplication : '+(a*b));
    return m;
}

function div(a,b){
    var d=console.log('Division : '+(a/b));    // calculates quotient
    return d;
}

function modulus(a,b){
    var mod=console.log('Modulus : '+(a%b));   // calculates remainder
}   

// function calls
add(num1,num2)
sub(num1,num2)
mul(num1,num2)
div(num1,num2)
modulus(num1,num2)



