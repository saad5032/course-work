var arr= [10,20,30,40]

console.log(arr[0])
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);  // ---> bad practise

console.log("----second method-------")

for (var i=0; i<arr.length ; i++){   // -----> Good practise
    console.log(arr[i])
}