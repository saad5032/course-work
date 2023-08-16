// for (var i=0;i<=4;i++){
//     console.log(i);
// }
// console.log(i);              var when used by default it is global


// let keyword is used for local scope and global scope separately
// let cannot be used twice in the same scope

// for (let i=0 ; i<=4 ; i++){
//     console.log(i);    // locally it would be printed as 01234
// }
// console.log(i);  // if also print i in global scope it thrwos error

let i=50;   // i is in global scope here 
for (let i=0 ; i<=4 ; i++){
    console.log(i);   // i is in local scope here
}
i=10
console.log(i);   // i is in global scope   

// outputs 01234 50

