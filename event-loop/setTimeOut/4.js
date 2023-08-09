console.log("Hello");
setTimeout((id)=>{
    const user ={
        name : "saad",
        age : 25
    };
    console.log(`User Id ${id}, username : ${user.name}, user-age : ${user.age}`);
},5000 ,11);
setTimeout(()=>{
    console.log("I am first");
},1000)
setTimeout(() => {
    console.log("I am second");
},1500);
