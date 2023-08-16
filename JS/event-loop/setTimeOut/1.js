function abc(){
    console.log("abc");
}
console.log("start");
abc();

setTimeout(()=>{
    console.log("Welcome to first NodeJS");
}, 2000)

console.log(123);
console.log("end");

setTimeout(()=>{
    console.log("Welcome to second NodeJS");
}, 1000)


// Sync / blocking : JS excutes line by line. This statements are synchronous as they block the execution becoz of previous statement.

// Async / non-blocking : The setTimeOut method here is the asyncronous statement. All the Asyncronous statements gets added to even loop and gets according excuted when their timer sets to zero.