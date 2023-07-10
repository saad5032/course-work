var readLineSync = require("readline-sync")
var num1= readLineSync.questionInt("enter your first number : ")
var num2= readLineSync.questionInt("enter your second number : ")
var num3= readLineSync.questionInt("enter your third number : ")

if (num1>num2 && num1>num3){
    console.log(`$(num1) is greater than $(num2) and $(num3)`)
}
else if (num2>num3){
    console.log(`$(num2) is greater than $(num1) and $(num3)`)
}
else if (num1==num2 && num2==num3){
    console.log(`All three given numbers are euqal`)
}
else {
    console.log(`$(num3) is greatest of all numbers`)
}