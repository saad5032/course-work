/* Write a function that takes a string then reverse it and return the value, value should be a string  */

function reverse(str){
    // first convert passed string to array using split("") then use reverse method of array to perform reversing and finally use join to convert array back to string
    console.log(str.split("").reverse().join(""));

}
reverse("apple")