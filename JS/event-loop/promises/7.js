function abc(num1,num2){
    return new Promise((resolve,reject)=>{
        if (num1>num2){
            resolve(`${num1} is greater than ${num2}`);
        } else if(num1<num2){
            resolve(`${num1} is less than ${num2}`);
        } else {
            reject("Both are equal")
        }
    })
}
// promise : 1. pending 2. fullfilled 3. reject
console.log("start");  // synchronous - o/p 1
// console.log(abc(2,3)); // promise is pending as it the msg is not directly printed out
abc(1,1).then((res)=>{ // asyncronous when we consume the promise using .then  - o/p will be last
    console.log(res);   
    })
    .catch((err)=>{console.log(err)})

console.log("end");   // synchronous - o/p 2