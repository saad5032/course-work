var obj = {
    saad : {
        age : 24,
        email : "syedsaaduddin6@gmail.com"
    },
    ateeq : {
        age : 32,
        email : "ateeq@gmail.com",
    },
    kushal : {
        age : 28 ,
        email : "kushal@gmail.com",
    },
    "x-authen-token" : "abcdefg",
};

console.log(obj["x-authen-token"]);
console.log(obj["kushal"]["age"]);

delete obj[ "x-authen-token"];
obj.ateeq.email ="code@yahoo.com"
console.log(obj);




// get keys
for (k in obj){
    console.log(k);
}

// get values
for (key in obj){
    console.log(obj[key]);
}

//get keys
var k= Object.keys(obj)
console.log(k);

//get values
var v= Object.values(obj)
console.log(v);

//Spread operator *** we use it a lot
var arr = [1,2,3,4,5]
var obj2 = {...arr}     //... operator is used to convert array to object 
console.log(obj2);