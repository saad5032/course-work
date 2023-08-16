// create an arrray of between given min and max values

// doubt-1
function randomArray(min,max){
    var arr = new Array(10)
    for (var i=0; i<arr.length ; i++){
        arr[i] = Math.floor(Math.random()*(max-min+1))+min
    
}
console.log(arr);
}
randomArray(10,45)

/*
min = 10
max = 45
to get logic for edge value
range is max-min = 45-10= 35
so edge value i.e., maximum range is 35
--------------------------------------------
1. Max value for Math.random() => 0.9999

so here you need to add 1 to get correct edge value
for example if i do this => Math.random()*35 the result will be 0-35.999 when you floor it will be 0-35 removing decimals
Therefore you need to add 1 to the number 35 which becomes 36 and then multiply it with math.random function to get 35 random values

2. Math.random*(35+1) => 36.99999
3. Math.floor => 35
--------------------------------------------
to get logic for starting value or base  
if you need 35 random values starting from 5 you just add 5 to the random function multiplied with edge value.

1. (math.random()*36)+5
*/

