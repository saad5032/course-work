var cars1 = ["Saab","Volvo","Bmw","Audi"]
cars1.sort()
console.log(cars1);


var cars2 = ["Saab","Volvo","bmw","Audi"]
cars2.sort()
console.log(cars2);
// here bmw is placed last compared to cars1 array becoz small b has larger ascii value than capital B

var cars3 = ["Aaab","Aolvo","Bmw","Audi"]
cars3.sort()
console.log(cars3);
// now first letter A is same for three strings so now second letter ascii value of these three strings will be compared according to ascii value

var nums = [15, 3, 11, 25, 46]
console.log(nums.sort());  // you cannot depend on this as you can see its output, 3 is not in first position

// logic for ascending order
console.log(nums.sort((a,b)=>a-b));  // it takes two values say a as 15 and b as 3 then 15-3 = 12 -> positive value so swap if not dont swap

//logic for descending order
console.log(nums.sort((a,b)=>b-a));  // 3-11 gives negative so dont swap

// logic for randomly sorted array
