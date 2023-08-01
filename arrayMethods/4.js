var fruits = ["apple","banana","lemon","orange"]
var citrus1 = fruits.slice(2,4)
console.log(citrus1);
console.log(fruits);  // slice didnt changed the original array


var citrus2 = fruits.splice(2,4)
console.log(citrus2);
console.log(fruits);    //splice changed the original array


