function IntToRoman(num){
    let obj = {
        M : 1000,
        CM : 900,
        D : 500,
        CD : 400,
        C : 100,
        XC : 90,
        L : 50,
        XL :40,
        X:10,
        IX : 9,
        V : 5,
        IV : 4,
        I :1
    }

var str =""
for (var key in obj){
    while (num >= obj[key]){  // if statement checks from next key so using while to check that same key again (just try to replace while with if , to know)
        console.log(obj[key],num,key,str);
        str = str+key
        num -= obj[key]

    }
}

return str

}

console.log(IntToRoman(2))