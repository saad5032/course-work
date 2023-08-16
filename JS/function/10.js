// console.log(Math.random());   // it gives random value b/w (0-1) more than 0 and less than 1
// here 0 is base and 1 is edge

// i want to change base that is starting point
// console.log(Math.random()+2);   // it gives random value b/w (2-3) more than 2 and less than 3

// i want to change edge  that is ending point
// console.log(Math.random()*15); // it gives random value b/w (0-15) more than 0 and less than 15

// lets say i want random value starting from 3 to 12
console.log(Math.floor(Math.random()*10)+3);


function rollDice(){
    // for (var i=0 ; i<2 ; i++)
    var dice1 = Math.floor(Math.random()*6)+1
    var dice2 = Math.floor(Math.random()*6)+1
        if (dice1==6 && dice2==6){
            console.log("you are out of jail");
        }
        else {
            console.log("better luck next time");
        }
    }
// for (var i=0;i<100;i++){
//     rollDice();
// }