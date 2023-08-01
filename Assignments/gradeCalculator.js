// Take marks of a student as input using readline-sync
var readLineSync = require("readline-sync")
var marks= readLineSync.questionInt("enter student's marks : ")
//1. Marks - More than or equal to 90 - Grade S
if (marks>=90){
    console.log("student received grade S")
}
// 2. Marks - 80 - 89 - Grade A
else if(marks>=80 && marks<=89){
    console.log("student received grade A")
}
// 3. Marks - 70 - 79 - Grade B
else if(marks>=70 && marks<=79){
    console.log("student received grade B") }
// 4. Marks - 60 - 69 - Grade C
else if(marks>=60 && marks<=69){
    console.log("student received grade C")
}
// 5. Marks - 50 - 59 - Grade D
else if(marks>=50 && marks<=59){
    console.log("student received grade D")
}
// 6. Marks - 40 - 49 - Grade E
else if(marks>=40 && marks<=49){
    console.log("student received grade E")
}
// 7. Marks less than 40 - Grade F
else if(marks>=0 && marks<40){
    console.log("student received grade F")
}

// check corner cases
// if input is <0 , invalid input
// if input > 100 , invalid
// cannot accept floats or strings
else {
    console.log("Invalid input")
}
// Hint: if-else Ladder and readlineSync.questionInt()



// question 2: 
// Take an input, and tell if it is a perfect square or not
var num= readLineSync.questionInt("check for perfect square : ")
var value =num ** 0.5
if (Math.floor(value) === value || value ==1 || value ==0){
    console.log("It is a perfect square")
}
else if (marks<0) {
    console.log("It is a invalid input")
}
else {
    console.log("It is not a perfect square")
}





