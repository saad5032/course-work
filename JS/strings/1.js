var a = "my name is letter a and yours? "
console.log(a);

// we can add strings by adding variables which stores these strings
var b = "well my name is rita"

console.log(a + b);

//Different ways to write a string in JS

//1. Double Quotes - ""
//2. Single Quotes - ''
//3. Backticks - `` ( template literals )

var a = 40 , b = 30 , c = 10;
var sum = a + b + c;
console.log(sum);

console.log("The sum of a - "+a+" , b - "+b+", c - "+c+" is => sum="+sum);

//String Pollination
console.log(`The sum of a - ${a}, b - ${b}, c - ${c} is => sum = ${sum}`);
//"https://github.com/TPAteeq/THSCohort-B-2023"

// `https://github.com/${userName}/${repoName}`

var greeting = "Hello World"
console.log(greeting.length);
console.log(greeting[4]);
console.log(greeting[11]);

console.log(greeting.charAt(10));

console.log(greeting.indexOf("o"));
console.log(greeting.indexOf("H"));
console.log(greeting.indexOf("w"));

greeting = greeting.toLowerCase()    // converts string to lowercase 
greeting = greeting.toUpperCase()

console.log(greeting);

//Slice

console.log(greeting.slice(0,2));  // slicing or printing letter from index 0 - index 1 - (0,2)
console.log(greeting.slice(6));    // slicing from index 6th index till last index
console.log(greeting);             // slice method is not effecting original string
console.log(greeting.slice(-1));   // -1 index starts from last letter in string 


// Capitalize the word => hackingschool ( output - Hackingschool)
// appraoch 1: writing code in different lines 
var word = "hackingschool"
var firstLetter = word[0]
var capitalLetter=firstLetter.toUpperCase();
var remainingWord = word.slice(1)
console.log(capitalLetter+remainingWord);

//approach 2: writing above code in single line
console.log(word[0].toUpperCase()+word.slice(1));

var text = "         Saaduddin          " 
console.log(text);
console.log(text.trim());

var word ="abc"
console.log(word.repeat(5));

var str = "hi yesterday was a painful day, a really painful one"
console.log(str.replace("painful","beautiful"));
console.log(str.replaceAll("painful","beautiful"));

console.log("hello"+"world")


//concat method
var names = "hi"
console.log(names.concat(" saad", " suja", " salah", " sami"));
console.log(names);  // method concat do not change the original array

var str = "aeroplane"
console.log(str.charAt(0));        // var.charAt(any index value) returns the character present at that index where var is a string
console.log(str.charCodeAt(0));   //var.charcodeAt(any index value)  returns the ascii code of the char at given index where var is a string
console.log(str.charAt(8));
console.log(str.charCodeAt(8));

var str = "coding&is&easy"
console.log(str.split());      // var.split() it converts the string "acbsd" to array ['acbsd']
console.log(str.split(""));    // it splits the string "saad" into array of letters ['s','a','a','d'] as there is no space given in split("")
console.log(str.split(" "));   // it normally converts string to array as there is given empty space between quotes => split(" ")
console.log(str.split("&"));   // it splits the words in string replacing & with , and thus splitting words separated by & 

var arr = [ "coding", "is", "easy" ]
console.log(arr.join());
console.log(arr.join(""));
console.log(arr.join(" "));
var arr = ["h","e","l","l","o"]
console.log(arr.join(""));

var string = "Syed saaduddin"
var arr = string.split(" ")
console.log(arr);
arr.reverse()
console.log(arr);
console.log(arr.join(" "))   // whenever i use join method i need to use it in console.log() otherwise it wont work

// lets do the above steps code in just single step
console.log(string.split(" ").reverse().join(" "));
