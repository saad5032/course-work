// 5 2 C D +  -> this will be in array []

// C - discard last -- guarantee that there is one element atleast
// D - Double last entry 
import chalk from "chalk";
let arr = [5,2,"C","D","+"]
let result = [];
for (let i=0;i<arr.length ; i++){
    // The meaning of the NaN is not a number
    if (!isNaN(arr[i])){               // if arr[i] is not-! other datatype meaning if number then push
        result.push(arr[i])
    }
    else if(arr[i]=="C"){
        result.pop()
    }
    else if(arr[i]=="D"){
        result.push(result[result.length-1]*2)
    }
    else if (arr[i]=="+"){
        result.push(result[result.length-1] + result[result.length-2])
    }
}
let sum = 0;
for (let i=0;i<result.length;i++){
    sum+=result[i]
}
console.log("The resultant array is : ");
console.log(result);
console.log(`The sum of resultant array is: ${chalk.blue(sum)}`);