var readLineSync = require("readline-sync")
var num1= readLineSync.questionInt("enter your first number : ")
var num2= readLineSync.questionInt("enter your second number : ")

if (num1>num2) {
    console.log('$(num1) is greater than $(num2)')
}
else if (num2>num1){
    console.log('$(num2) is greater than $(num1)')
}
else if (num2==num1){
    console.log('$(num1) is equal to $(num2)')
}