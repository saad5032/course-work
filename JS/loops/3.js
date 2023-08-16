// using for loop to print 10 numbers

for (var i=1 ; i <= 10 ; i++ ){
    // console.log(i);
}

// negative infinity starting from -110

// for (var i=-110 ; i <= -110 ; i--){
//     console.log(i);
// }

// multiples of 3 doing 1st way
var counter = 0                         // this loop is more optimised
for (var i=0 ; i < 1000 ; i+=3){
    console.log(i)
    counter++
}
console.log ("counter : " +counter)
// multiples of 3 doing 2nd way
for (var i=0 ; i < 1000 ; i++){
    if(i%3==0) console.log(i);
    counter++
}

console.log ("counter : " +counter)