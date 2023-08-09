function Bootacamper(fName,lName,age){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.bio = function(){
        console.log(this.fName, this.lName ,this.age);
    }
}

// person1 and person2 are objects or instances of prototype function Bootcamper
const person1 = new Bootacamper("ateeq","uddin",30)
console.log(person1);
const person2 = new Bootacamper("saad","syed",24)
console.log(person2);