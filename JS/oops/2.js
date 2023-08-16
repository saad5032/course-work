// const bootcamp ={
//     firstName : 'Saad',
//     lastName : 'Syed',
//     age : 24,
//     bio: () => {
//         console.log(this);
//     }
// }
// // here this is pointing to global object

// const bootcamp1 ={
//     firstName : 'Saad',
//     lastName : 'Syed',
//     age : 24,
//     bio: function () {
//         console.log(this);
//     }
// }


// // console.log(bootcamp.bio());  // this will be undefined do not use log as function is printing 
// bootcamp.bio()  
// bootcamp1.bio()

const bootcamp3 ={
    firstName : 'Saad',
    lastName : 'Syed',
    age : 24,
    bio: function() {
        console.log(this);
        this.firstName ='farhan';   // using  this here we can make some changes to other keys
        this.lastName = 's'

    }
}

bootcamp3.bio()
console.log(bootcamp3);  // when is use console.log you wil get the updated object 
