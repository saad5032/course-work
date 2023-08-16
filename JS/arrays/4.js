var a= [1,2,3]
console.log(a);

// to always print last element of an array
console.log(a[a.length-1]);

// Manually adding element at the end of  array
a[a.length] = 4
console.log(a)

// method to add element at the end of array
a.push(5)
console.log(a);

// you can add different datatype as well in javascript arrays
a.push("saad")
console.log(a);

// method to remove element from the end of array
a.pop(a.length-1)
console.log(a);

// method to remove element from the start of array
var removedElement = a.shift()
console.log(removedElement,a);

// method to add element at the start of array
a.unshift(100)
console.log(a);