// i want to print 10 - 15 numbers 

var practiseHours=10;               // current value is 10
do {                                // do block keeps on executing untill while condition becomes false
    console.log(practiseHours);     // so here i have written printing statement and increment by 1 statement
    practiseHours++
} while(practiseHours<=15)          // as i want to let numbers printed untill 15 ill write <=15 in while condition

var practiseHours=10;             

console.log("------")
// if while condition is false from start then do block will execute for once and then control goes out of the block
do {                                
    console.log(practiseHours);     
    practiseHours++                         // thus only 10 get printed 
} while(practiseHours<=8) 