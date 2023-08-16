const person1 = {
    fullname : function(){
        return this.firstName + " " + this.lastName
    }
}

const obj = {
    firstName : 'Saad',
    lastName : 'Syed' // if you comment this then you will get saad undefined as output as last name will not be present
}

console.log(person1.fullname.call(obj))