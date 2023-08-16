/*

    Create a CLI application with the following instructions

    ********************************
            AREA CALCULATOR
    ********************************
    1. Press 1 to select Square
    2. Press 2 to select Circle
    3. Press 3 to select Rectangle
    4. Press 4 to select triangle
    Please enter your choice
    
*/
console.log("************************************")
console.log("       AREA CALCULATOR :           ")
console.log("************************************")
console.log("\t > Press 1 to calculate square area \n \t > Press 2 to calculate Circle area  \n \t > Press 3 to calculate Rectangle area \n \t > Press 4 to calculate triangle area")

var readlineSync = require("readline-sync")
var index = readlineSync.questionInt("Enter the index no to get the requied area : ")

if (index==1){                                                      // if index-1 then execute the block 2
    var a = readlineSync.questionInt("Enter side : ")               // read side for square from user keyboard
    function sqArea(a){                                             // function-1 to calculate area of square
        var area =console.log("Area of square : "+(a*a))            
        return area;
    }
    sqArea(a);                                                      // call function1
}

else if (index==2){
    var r = readlineSync.questionInt("Enter radius : ")
    function circleArea(r){
        var pi = 3.14
        var area =console.log("Area of Circle : "+ (pi*r*r))
        return area;
    }
    circleArea(r);
}

else if (index==3){
    var l = readlineSync.questionInt("Enter length : ")
    var w = readlineSync.questionInt("Enter width : ")
    function recArea(l,w){
        var area =console.log("Area of Rectangle : "+(l*w))
        return area;
    }
    recArea(l,w);
}

else if (index==4){
    var b = readlineSync.questionInt("Enter base : ")
    var h = readlineSync.questionInt("Enter height : ")
    function triangleArea(b,h){
        var area =console.log("Area of triangle : "+(0.5*b*h))
        return area;
    }
    triangleArea(b,h);
}





