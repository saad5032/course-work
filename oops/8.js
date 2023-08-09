class Bootcamper{
    constructor(fName,lName,age){
        this.fName = fName;
        this.lName = lName;
        this.age =age;
    }
    bio(){
        console.log(this.fName, this.lName , this.age);
    }
    old(){
        console.log(this.age);
    }

}

const person1 = new Bootcamper("saad","syed",25)
console.log(person1); 
//or
person1.bio()
person1.old()
