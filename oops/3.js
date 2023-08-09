const person ={
    firstName : 'Saad',
    lastName : 'Syed',
    age : 24,
    bio : function(){
        return {
            aa : 1,
            bb : 2,
            cc : function(){
                console.log(this);
            }
        }
    },
    test : function(){
        console.log(this);
    }
}
console.log(this)  // its undefined as it is pointing to global object now
// person.bio() // function has return so use log
console.log(person.bio());
person.bio().cc()  // this is pointing to same as bio object and cc value do not have return so donot use log

person.test()  // this is pointing towards parent object