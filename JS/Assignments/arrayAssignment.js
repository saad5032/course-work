
// 1. Arr = [“Python”, “Java”, “C++”,”JavaScript”,”Linux”]
// Remove the last element of the array and add “Rust” at the end

var Arr = ["Python", "Java", "C++","JavaScript","Linux"]
Arr.pop(Arr.length-1);           
Arr.push("Rust")
console.log("1. : "+Arr);
console.log("---------------");

// 2. Arr = [“I”, “am”, “a”,”fullstack”,”developer”];
// Print the string `I am a fullstack developer` in the same line by using an
// array helper method.

var Arr = ["I", "am", "a","fullstack","developer"];
var arr = Arr.join(" ")
console.log("2. : "+arr);

console.log("---------------");

// 3. Arr = [50,20,30,40,50]
// Remove the first element of the array and add 10 to the zeroth index.

var Arr = [50,20,30,40,50];
Arr.shift()
console.log("3. shift() : "+Arr);
Arr.unshift(10)
console.log("3. unshift() : "+Arr);

console.log("---------------");

// 4. Arr = [“Python”, “Java”, “C++”,”JavaScript”,”Linux”] 
// Remove java and c++ from the array and add “golang” and “carbon”

var Arr = ["Python", "Java", "C++","JavaScript","Linux"] 
Arr[1] = "golang"
Arr[2] = "carbon"
console.log("4. : "+Arr);

console.log("---------------");

// 5. Arr = [12,32,5,87,65]
// Use a loop and convert the element values to binary values using an array
// method.

var Arr =  [12,32,5,87,65]
binaryArr = []
for (var i=0; i<Arr.length ; i++){
    var binaryValue = Arr[i].toString(2)    // here when i=0, the value is 12 (Arr[0]=12) and .tostring(2) --> pass 2 as base 2 as an 
                                            // argument in .tostring method to convert decmal value 12 to its equivalent binary value.
    binaryArr.push(binaryValue)
}
console.log("5. : "+binaryArr);

console.log("---------------");

// 6. Arr = [-5,43,11,87,39]
// Write a function to print the maximum and minimum values in the array.

Arr = [-5,43,11,87,39]
function maxAndMinValue(){
    var max = Arr[0];
    var min = Arr[0];
    for (var i=0; i<Arr.length; i++){
        if (Arr[i] > max){
            max = Arr[i]
        }
        else if (Arr[i] < min){
            min = Arr[i]
        }
         
    }
    console.log("6. maximum : "+ max);
    console.log("6. minimum : "+min);
}
maxAndMinValue()

console.log("---------------");

// 7. Arr = [40,100,1,25,10];
// Sort the given array in:
// a. Descending order
// b. Ascending order
// c. Random order

Arr = [40,100,1,25,10]

// Descending order
for (var j=0 ; j<Arr.length; j++){
    if (Arr[j]<Arr[j+1]){      // if my 1st element is less than second element then swap
        temp=Arr[j];                // 1st index value(40) is stored in variable temp
        Arr[j]=Arr[j+1];            // 1st index value(40) is changed to 2nd index value(100) so 1st index value is now 100
        Arr[j+1]=temp               // 2nd index value(100) is chaged to 1st index value(40) stored in temp
    }
}

console.log("7a. Descending order :"+Arr);

// Ascending order
for (var h=0; h<Arr.length ; h++){  // As the outerloop run for first time (h=0), the inner loop triggers and gets completed(i=0 to end) then again
    for (var i=0; i<Arr.length ;i++){   // outerloops runs for second time(h=1) inner loops gets completed again
        if(Arr[i]>Arr[i+1]){
            temp = Arr[i];
            Arr[i] = Arr[i+1];
            Arr[i+1] = temp
        }
    }
}
console.log("7b. Ascending order :"+Arr);

// Random order
for (var i=Arr.length; i>0; i--){                      // The value of i starts from 5 so i=5
    var randomIndex = Math.floor(Math.random()*(i-1))  // here when i multiply math.random() with (i-1) which is 5-1=4 the range 
    // of random no's is 0-4, i want to keep range 0-4 bcoz index values for given array [40,100,1,25,10] is 4 and math.floor rounds up (like 1.2 becomes 1)
    temp = Arr[i]                // first index value is stored in temp
    Arr[i] = Arr[randomIndex]    // now i can change first index value to random index value of given array
    Arr[randomIndex] = temp      // the randomindex value is now first index value as we stored in temp
}
console.log("7c. Random order :"+Arr);

console.log("---------------");

// 8. Arr = [2,4,6,8,10]
// the given array, use an array helper method to multiply each element with
// 2 and change the original array.
Arr = [2,4,6,8,10]
Arr = Arr.map((value) => value*2)
console.log("8. "+Arr);

console.log("---------------");

// 9. Arr = [1,3,5,7,9]
// On the given array, use an array helper method to add 10 to each and
// save the values in a different array.

Arr = [1,3,5,7,9]
var addedArray = Arr.map((v)=>v+10)
console.log("9. : "+addedArray);

console.log("---------------");

// 10. Arr = [12,-5,74,21,54,38,0]
// On the given array, use an array helper method to return only those
// values which have a value lesser than 50.

Arr = [12,-5,74,21,54,38,0]
Arr = Arr.filter((value)=>value<50)
console.log("10. : "+Arr);

console.log("---------------");

// 11. Arr = [12,-5,74,21,54,38,0]
// Use the reduce array helper method to find the sum of the given element
// values of the array.

Arr = [12,-5,74,21,54,38,0]
sum = Arr.reduce((container,value)=>container+value)  // container is 0 and value is 12, then container=0+12=12. now contanier=12 , value is -5 then container = 12-5 = 7
console.log("11. : "+sum);

console.log("---------------");

// 12. Arr = [-22,34,84,72,55]
// Use an array helper method to return a boolean value if all values are
// positive or not.

Arr = [-22,34,84,72,55]
var TestAllpositive = Arr.every((value) => (value>0) )
console.log("12. : "+TestAllpositive);

console.log("---------------");

// 13. Arr = [“Python”, “Java”, “C++”,”JavaScript”,”Linux”]
// Use an array helper method to return the index of “JavaScript”

Arr = ["Python", "Java", "C++","JavaScript","Linux"]
var index = Arr.indexOf("JavaScript")
console.log("13. : "+index);

console.log("---------------");

// 14. Arr = [-22,34,84,72,55]
// Use an array helper method to return a boolean value if 100 exists in the
// array or not.

Arr = [-22,34,84,72,100]
var TestNoExist = Arr.includes(100);
console.log("14. : "+TestNoExist);

console.log("---------------");

// 15. Arr = [1, 2, 1000, 200, 250, 190, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 17,
//     23, 5, 6, 10, 10, 20, 30, 60, 70, 90, 1000, 200, 250, 5, 4, 9, 7]
//     a. Use array helper methods to store the odd and even values in new
//     different arrays.
//     b. Store the prime numbers in a new array

Arr = [1, 2, 1000, 200, 250, 190, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 17,
  23, 5, 6, 10, 10, 20, 30, 60, 70, 90, 1000, 200, 250, 5, 4, 9, 7]

var evenArray = Arr.filter((val) => (val % 2 == 0))
console.log("15a. even array : "+evenArray);

var oddArray = Arr.filter((val) => (val % 2 != 0))
console.log("15a. odd array : "+oddArray);

function Prime(value){       // value is prime if it is divisble by itself only and not other numbers
    if (value<2){            // values less than 2 are not primes
        return false           
    }
    for (var i =2 ; i<= Math.sqrt(value) ; i++){    // for any value say 1000 the iteration starts from 2 and stops at square root of 1000 
        if (value% i == 0){                         // thus checking if value is divisible by other nuumbers easily with necessary divisors
            return false
        }
      
    }
    return true      // return the true outside the for loop bcoz once for loop finds the first prime it returns true and exit the loop 
}
var PrimeArray = Arr.filter(Prime)
console.log("15b. : "+PrimeArray);

console.log("---------------");

// 16. arr = [ [[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]], [[5, 6, 10], [10, 20, 30]], [[60,
//     70, 90], [1000, 200, 250]] ]
//     Convert the above 3D array to a 1D array using an array method

arr = [ [[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]], [[5, 6, 10], [10, 20, 30]], [[60,
    70, 90], [1000, 200, 250]] ]
var OneDArray = arr.flat(2)  // by passing argumnet 2 the dimensions are decreased by 2 
console.log("16. : "+OneDArray);



















