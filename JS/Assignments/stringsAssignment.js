// JavaScript Strings Assignment
 
// 1. Str = “hello world”
// Find the character at the 6th index and print the output
// Find the character at the 9th index and print its Unicode
// value

Str = "hello world"
console.log("1. character at sixth index is                 => "+ Str[6]);
console.log("   character at ninth index is                 => "+ Str[9]+"\n and its unicode is => "+Str.charCodeAt(9));


// 2. Str = “Microsoft, Apple, Google”
// Extract and print the first 2 companies from the given
// string.
Str = "Microsoft, Apple, Google"
arr = Str.split(",")
console.log("2. first two companies from given string       => "+ arr[0]+arr[1]);


// 3. Str = “Python, Java, JavaScript”
// a) From   the   above   given   string,   print   all   the
// languages except python.
// b) From   the   above   given   string,   change   python   to
// TypeScript

Str = "Python, Java, JavaScript"
arr = Str.split(",")
console.log("3a. All languages except python                => "+ arr[1]+arr[2]);
arr[0]="TypeScript"
console.log("3b. changing python to typescript              => "+ arr);

// 4. Str = “THS/Cohort-C”
// Convert   this   string   to   upper-case,   and   then   to   lower-
// case again.

Str = "THS/Cohort-C"
console.log("4. converting given string to upper case       => "+Str.toUpperCase())
console.log("   converting back to lower case               => "+Str.toLowerCase());


// 5. Str1 = “Monty”
//             Str2 = “Python”
// Concatenate   these   2   strings,   once   using   a   string
// method and again using an operator
Str1 = "Monty"
Str2 = "Python"
console.log("5. Using string method to concatenate          => "+Str1.concat(Str2));
console.log("   Using operator to concatenate               => "+Str1+Str2);


// 6. Str = “Hello World”
// a) Check if the given string starts with ”Hell” or not
// and print the answer
// b) Check  if  the  given  string  ends  with  z  or  not  and
// print the answer
Str = "Hello World"
console.log("6. Checking string starts with ”Hell” or not   => "+Str.startsWith("Hell"));
console.log("   Checking string ends with ”z” or not        => "+Str.endsWith("z"));

// 7. Str = “Coding                    “
// a) Trim   (remove   white   space)   this   given   string   and
// print the output
// b) Also,  print   the   length   of   the   strings   before   and
// after.

Str = "Coding                    "
removedSpace = Str.trim()
console.log("7a. Removing white space using trim method     => "+removedSpace);
console.log("7b. length before removing space               => "+Str.length);
console.log("    length after removing space                => "+removedSpace.length);

// 8. Str  = “The Hacking School”
// a) Check if the above-given string includes “H” or not
// and print the result
// b) Check   if   the  above-given  string   includes
// “Bootcamp” or not and print the result

Str  = "The Hacking School"
console.log("8a. check for letter H in given string         => "+Str.includes("H"));
console.log("8b. check for word bootcamp in given string    => "+Str.includes("bootcamp"));

// 9.  Str = “India’s First Coding Bootcamp”
// a) Find the index of ‘F’ in the given string and print
// the answer
// b) Find the index of ‘x’ in the given string and print
// the answer

Str = "India’s First Coding Bootcamp"
console.log("9a. index of ‘F’ in the given string           => "+Str.indexOf("F"));
console.log("9a. index of ‘x’ in the given string           => "+Str.indexOf("x"));

// 10.  Str = “CODE”
// Print this output on the same line three times using a
// method/function

Str = "CODE"
console.log("10. Print on same line three times             => "+Str.repeat(3));

// 11.  Str = “Program” 
// Convert this string to an array.     

Str = "Program"
console.log("11. Converting this string to an array         => ")
console.log(Str.split());

// 12.   Print   a   string   which   has    “India’s   First   Coding
// Bootcamp”  (including   the   double   quotes   and   single
// quotes).
str="\"India’s   First   Coding Bootcamp\""
console.log("12. Printing a string including double quotes  => "+str);
str="\'India’s   First   Coding Bootcamp\'"
console.log("    Printing a string including single quotes  => "+str);



     