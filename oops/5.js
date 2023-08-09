const person = {
    firstName : "Shamsuddin",
    lastName : "Syed",
    fullname : function(){
        return this.firstName +" "+this.lastName
    }
}

const obj ={
    firstName : "Saaduddin",    // using const you can update the properties of an object
    lastName : "farhan"
}



console.log(person.fullname());
// console.log(person.fullname.call(obj)); // i can modify this way or using bind as below
let a = person.fullname.bind(obj)
console.log(a());
obj.firstName = "Syed"
console.log(a());

