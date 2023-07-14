// 1st approach
var a=""
for (var i=1; i<10 ; i++){
    a+=i
    // console.log(a + " x 8 " + "+ " + i + " = " + (a*8+i)) --> my old way
    console.log(`${a} x 8 + ${i} = ${a*8+i}`) // --> sir new way
}

// 2nd approach
var str1=""
var str2=""
for (var i=1; i<10 ; i++){
    str1+=i
    str2+=10-i
    console.log(`${str1} x 8 + ${i} = ${str2}`);
}
// string number can be applied to normal operation
var num="12"
console.log(num/2)