var readLineSync = require("readline-sync")
var num= readLineSync.questionInt("enter your first number : ")

if(num%3==0 && num%5==0){
    console.log("It is a multiple of 3 & 5")
}
else if (num%3==0){
    console.log("It is a multiple of 3")
}
else if (num%5==0){
    console.log("It is a multiple of 5")
}
else if (num%3!=0 && num&5!=0){
    console.log("It is not a multiple of 3 & 5")
}
else if (num%3!=0){
    console.log("It is not a multiple of 3")
}
else if (num%5!=0){
    console.log("It is not a multiple of 5")
}