// inheritence

//parent class
class Bootcamper{
    constructor(fName,lName,age){
        this.fName = fName;
        this.lName = lName;
        this.age =age;
    }
    bio(){
        console.log(this.fName, this.lName , this.age);
    }
}

// child class
class Instructor extends Bootcamper{
    constructor(fName,lName,age,exp){
    super(fName,lName,age) // super here is constructor of bootcamper
    this.exp = exp
    }
    startClass(){
        console.log("Class is getting started");
    }
}

const obj = new Instructor("syed","saad",25,3)
console.log(obj);
obj.bio()
obj.startClass()

console.log(Object.getPrototypeOf(obj));  // using getprototypeof we can know which object is of which parent class
let arr=[1,2,3]
console.log(Object.getPrototypeOf(arr));


