// operators

/*
    1. Addition +
    2. Subtraction -
    3. Multiplication *
    4. Division / 
    5. Modulus %
    6. Power **
*/

// var a = 10;
// var b = 20; 
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a**b);
// console.log(a%b);
// console.log(32231231 % 2);
// console.log(32231230 % 2);

// console.log( 2 ** 3);
// console.log(a * b + a / 2 - 1);   // pemdas rule is followed

// javascript variables can be declared in three ways 
// var a =10;
// let a = 11
// const a =20
// console.log(a);

// you can use mixed keywords for variable declaration
// const price1 = 5;    // price1 cannot be used to assign values again as the keyqord const is used.
// const price2 = 6;

// let total = price1 + price2;

// console.log(a * b + a / 2 - 1);
// console.log(a * a - b * a);
// console.log((a * a / 2 + 50) - (100 * 2));
// console.log(a * a / 2 + 50 - 100 * 2 );

// console.log(8 ** (1/3));
// console.log(25 ** (1/2));


// console.log(Math.sqrt(49));

// console.log(Math.round(0.2));     // Math.round() works like if decimal value is less than 0.5 than it rounds to 0

// console.log(Math.round(0.7888888));  // if decimal value is greater than 0.5 than it rounds to 1

// console.log(Math.round(22.2));
// console.log(Math.round(22.67));
// console.log(Math.round(39.50));   // also if decimal value is 0.5 than also it will round to 1






                                        //*************// arrays
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 0 , 1, 2, 3, 4, 5,6,7, 8, 9
// -10 , -9 , -8 , -7 , -6 , -5 , -4 , -3 ,-2 , -1

// console.log(arr[6]);
// console.log(arr);
// console.log(arr.length);
// // console.log(arr[4]);
// // console.log(arr);
// // console.log(arr.length);

// var arr = ["a","b","c"]
// console.log(arr);
// console.log(arr.length);
// console.log(arr[1]);

// var mixed = [true,false,undefined,1,1.5,"hi"]
// console.log(mixed[0]);
// console.log(mixed);
// console.log(mixed.length);

// i want to create a new array of 

// var c = new Array(10)
// console.log(c.length);
// console.log(c);

// var a = new Array(1,2,3)
// console.log(a.length);
// console.log(a);

// var b = new Array("hi",true,5.6,60)
// console.log(b);
// console.log(b[1]);
// console.log(b.length);

// var arr = [1,2,3,4,5]
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// for (var i=0 ; i<arr.length ; i++){
//     console.log(arr[i]);
// }

// var arr = [66, 32, 3, 5, 1, 8];

// sum of all elements in array
// var sum = 0;
// for (var i=0;i<arr.length ; i++){
//     sum+=arr[i]

// }
// console.log(sum);




                       // ***************** array methods part 1

// adding elements to end of array

// var a = [1,2,3]
// a.push(4,5)
// console.log(a);
// console.log(a.length);
// console.log(a[1]);
// a.push("hi",true)
// console.log(a);

// var b = [1, 2, 3];
// // console.log(b);

// console.log(b[b.length-1]);
// b[b.length] = 4
// b[4] = 5
// console.log(b);
// console.log(b[b.length-1]);
// b.pop()
// console.log(b);
// var v = b.shift()
// console.log(b);
// console.log(v,b);

// b.unshift(10,20,30)
// console.log(b);
// b.shift()
// console.log(b);

// var a = [1,2,3,4]

// function getAvg(a){
// var sum=0
// for (var i=0 ; i<a.length ; i++){
//     sum+=a[i]
// }
// var total = a.length
// var avg = sum/total
// return avg}
// console.log(getAvg(a));

// var string = "hello my name is syed saaduddin"
// console.log(string.split(" "));

// var a = [1,2,3,4]

// var b=a.map(e=>{ return e+1 })
// console.log(b);
// console.log(a);






                    //****************      objects */

// var obj1 = {
//     a : 1,
//     b : 2,
//     c : {
//         d :"hi"
//     }
// }



// console.log(obj1.c.d);
// JSON
// var saad = {
//     "lastname" : "syed",
//     "university" : "niu",
//     "hobbies" : ["games","namaz","quran"],
//     "adress" : {
//         "road" : "alkapur",
//         "plot no" : 8,
//     },
//     "weight" : "83.3"
// }

// console.log(saad["lastname"]);
// console.log(saad.hobbies[0]);
// console.log(saad.adress.road);
// console.log(saad.adress["plot no"]);
// console.log(saad.weight);

// var obj={
//     saad : {
//         age : 25,
//         height : 5.9,
//         "a-b":5,
//         "a b":6,
//         "ab" : "k"
//     },
//     furqan : {
//         age : 30,
//         height : 5.8
//     },
//     "x-c-v" : "ahdkal",
//     "h" : 4
// }



/* 
1. i can access value using dot if key is just one word not separated by space or any kind of symbol and it works for keys with "" or without ""
2. if i want to acess value using square bracket then i need to put quotes like obj["saad"]["age"] whether keys are in "" or not
*/

// console.log(obj.saad.age);
// console.log(obj["saad"]["age"]);            // here key is without quotes i.e., just age

// console.log(obj.saad.ab);    // key in single word with quotes
// console.log(obj["saad"]["ab"]);
// console.log(obj.saad["a b"]);   // inside key in word with space and quotes

// delete obj["x-c-v"]
// console.log(obj);

// for (var key in obj){
//     console.log(key);
// }

// for (key in obj){
//     console.log(obj[key]);
// }

// var k = Object.keys(obj)
// console.log(k);

// var v = Object.values(obj)
// console.log(v);

// var arr = [1,2,34,"hi"]
// var obj3 = {...arr}
// console.log(obj3);
// console.log(obj3[0]);

// var person = { name: "John", age: 30, address: { street: "Main St", city: "New York", state: "NY" } };

/*
Write a function, that takes object as a parameter, returns the number of properties in an object
*/
// function properties(obj){
//     var k = Object.keys(obj)
//     var no = k.length
//     console.log(no);
// }

// properties(person)


/*
Write a function, considering an object with only numerical values, return the sum of the values
*/

// var obj = { a: 1, b: 3, c: 10, d: 4, e: 8 };

// function add(object){
//     var sum =0;
//     for (var key in object){
//         sum += object[key]
//     }
//     return sum
// }

// console.log(add(obj));

// var a = {
//     a1 : 1,
//     a2 : 2
// }

// var b={
//     b1 : 3,
//     b2 : 2
// }

// console.log(a.a1 == b.b1);
// console.log(a.a2 == b.b2);






                    //************** */ array methods part-2


// var a = [1,2,3,4]

// var b=a.map(e=>{ return  e+1 })   // for arr.map method im reuting value but storing it in variable and using log for that stored vaariable
// console.log(b);
// console.log(a);


// var arr = [1, 3, 4, 55, 66, 88];  // imperative approach
// for (var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// // declarative approach
// // arr.forEach(e => {console.log(e)})    // I cannot use variable to store so im not using return here just printing using log inside the method itself
// arr.forEach((e,i)=>{console.log(e)})


// var arr = [-3, -1, 5, 7, -10, 32, -45];
// // positive

// arr.forEach((ele)=>{
//     if(ele>0){
//         console.log(ele);
//     }
// })

// var arr = [2,3,5,6,7,8,9,11, 13, 14, 16, 18, 19, 21,22,23,24]
// // even and odd
// arr.forEach((ele)=>{
//     if (ele%2==0){
//         console.log(`even no : ${ele}`);
//     }
//     else {
//         console.log(`odd no : ${ele}`);
//     }
// })

var str1 = ["a","b","c","d","e"]
// var result = str1.slice(0,2)
// console.log(result);
// console.log(str1);

// var r2 = str1.slice(2,4)
// console.log(r2);

// var r3 = str1.splice("h","k")
// console.log(r3);
// var fruits = ["apple", "banana", "orange", "lemon"];

// // var citrus = fruits.slice(2,4)

// // console.log(citrus);
// // console.log(fruits);


// // SPLICE -> changes the content of the array, by removing or replacing elements

// var citrus = fruits.splice(2,4, "Mango", "kiwi", "litchi")


// console.log(citrus);

// var fruits = ["apple","banana","lemon","orange", "banana"]

// var a = fruits.concat("hi","there")
// console.log(a);

// console.log(a.indexOf("hi"));

/**
 write a function, that takes a string, reverses it and returns the value, value should be string
 */

// var str2 = "there"
// console.log(str2.split(""));  // split("") changes into array 

// var a = [ 'e', 'r', 'e', 'h', 't' ]
// console.log(a.reverse());   //array gets reversed


//  function reverses(str){
//     console.log(str.split("").reverse().join(""));
   
//  }

//  reverses("random");

// var arr = ["Abc0", "ABc", "BBc", "AAA"];
// console.log(arr.sort());

// var nums = [15, 3, 11, 25, 46];
// console.log(nums.sort((a,b)=>a-b));
// console.log(nums.sort((a,b)=>b-a));
// console.log(nums.sort(()=>{return Math.random()-0.5}));


// function add(num1,num2){
//     var add = num1+num2
//     return add
// }
// console.log(add(2,3));

// var adding = (num1,num2) => {
//     var b=num1+num2
//     return b
// }
// console.log(adding(2,3));


// var greeting = (string)=>{
//     console.log(string+" hi");
// }  

// greeting("syed")

// function factors(num){
//     factors = []
//     for (var i=0;i<=num ;i++){
//         if (num%i==0){
//             factors.push(i)
//         }
//     }
//     console.log(factors);
// }

// function isPrime(num){
//     if (factors(num)>2){
//         console.log("composite no");
//     }
//     else{
//         console.log("prime no");
//     }
// }
// isPrime(11)


// function isprime2(num){
//     var flag=true;
//     if (num==1) return false;
//     for (var i=2 ; i<num/2 ; i++){
//         if (num%i == 0){
//             flag= false;
//             break;
//         }
//     }
//     return flag
// }

// function series(n){
//     var primes = []
//     for (var i=2 ; i<=n ; i++){
//         if (isprime2(i)){
//             primes.push(i)
//         }
//     }
//     console.log(primes);
   
// }
// series(12)

var data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990",
        },
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services",
      },
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342",
        },
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems",
      },
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      address: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "South Christy",
        zipcode: "23505-1337",
        geo: {
          lat: "-71.4197",
          lng: "71.7478",
        },
      },
      phone: "1-477-935-8478 x6430",
      website: "ola.org",
      company: {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications",
      },
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      address: {
        street: "Rex Trail",
        suite: "Suite 280",
        city: "Howemouth",
        zipcode: "58804-1099",
        geo: {
          lat: "24.8918",
          lng: "21.8984",
        },
      },
      phone: "210.067.6132",
      website: "elvis.io",
      company: {
        name: "Johns Group",
        catchPhrase: "Configurable multimedia task-force",
        bs: "generate enterprise e-tailers",
      },
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
      address: {
        street: "Ellsworth Summit",
        suite: "Suite 729",
        city: "Aliyaview",
        zipcode: "45169",
        geo: {
          lat: "-14.3990",
          lng: "-120.7677",
        },
      },
      phone: "586.493.6943 x140",
      website: "jacynthe.com",
      company: {
        name: "Abernathy Group",
        catchPhrase: "Implemented secondary concept",
        bs: "e-enable extensible e-tailers",
      },
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      address: {
        street: "Dayna Park",
        suite: "Suite 449",
        city: "Bartholomebury",
        zipcode: "76495-3109",
        geo: {
          lat: "24.6463",
          lng: "-168.8889",
        },
      },
      phone: "(775)976-6794 x41206",
      website: "conrad.com",
      company: {
        name: "Yost and Sons",
        catchPhrase: "Switchable contextually-based project",
        bs: "aggregate real-time technologies",
      },
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo: {
          lat: "-38.2386",
          lng: "57.2232",
        },
      },
      phone: "024-648-3804",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
      },
    },
  ];
  var emails =[]

//   data.forEach((ele)=> {
//     emails.push(ele.email)
//   })
//   console.log(emails);

//   var userNames=[]
//   data.forEach((ele)=>{
//     userNames.push(ele.username)
//   }
//   )
//   console.log(userNames);

  // var adresses = []
  // data.forEach((ele)=>{
  //   adresses.push(ele.address)
  // })
  // console.log(adresses);

  // function getResult(value){
  //   return typeof value === 'number' ? 'numeric' : 'other'
  // }

  // var result = getResult('10')
  // console.log(result);

// var person1 = {
// name: 'Bob',
// dateOfBirth: '1973-01-03',
// };
// var person2 = {
// name: 'Bob',
// dateOfBirth: '1982-01-03',
// };
// function sameDateAndMonth(date1, date2) {
// var sameMonth = date1.getMonth() == date2.getMonth();
// var sameDate = date1.getDate() == date2.getDate();
// return sameMonth && sameDate;
// }
// function haveSameBirthday(person1, person2) {
// var date1 = new Date(person1.dateOfBirth);
// var date2 = new Date(person2.dateOfBirth);
// return sameDateAndMonth(date1, date2);
// }

// var result = haveSameBirthday(person1, person2);
// console.log(result);


