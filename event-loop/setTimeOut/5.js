console.log("HI");
for (let i=0; i<=5 ; i++){
    console.log(i);
    setTimeout(()=>{
        console.log(i);  // i values will be printed all at once after 5s as the i values are stored parallelly in eventloop when normal i 
                        // gets - for example when i is 0, line 3 is executing and also settimeout function is called and i which is 0 is 
                        // stored in eventloop
    },5000)
}
console.log("Bye");

console.log("HI");
for (let i=0; i<=5 ; i++){
    console.log(i);
    setTimeout(()=>{
        console.log(i);
    },i*1000)    // i values will be printed with 1s gap 
}
console.log("Bye");