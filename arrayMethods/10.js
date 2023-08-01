var arr = [1,2,3,4,5]

// simple logic to find sum of all elements
var sum=0;
for (var i=0 ; i<arr.length ; i++){
    sum+=arr[i]
    
}
console.log(sum);


// logic to find sum of all elements using array methods
var sum = arr.reduce((accumulator, currentValue) => {        // current value is nothing but the first value of array
    console.log(accumulator,currentValue);
    return accumulator+currentValue;
},0)      // this 0 indicates the accumulator value starts from 0

console.log(sum);


// logic for finding factorial i.e., 4! = 1*2*3*4
var factorial = arr.reduce((accumulator, currentValue) => {        // current value is nothing but the first value of array
    console.log(accumulator,currentValue);
    return accumulator*currentValue;
},1)      // this 0 indicates the accumulator value starts from 0

console.log(factorial);
