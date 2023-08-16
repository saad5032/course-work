function age(num1){
    return new Promise((resolve,rej)=>{
        if(num1>19){
            resolve(`Your age ${num1} is greater than 19 so you are adult`)
        }else{
            rej(`Your age ${num1} is less than 19 so you are a kid`)
        }
    })
}

console.log(age(12)); // to make promise pending printed out, as line 14 is syncronous you are syncronously printing asyncrous part i.e., age() which is retuning promise
age(18).then((res)=>{
    console.log(res);  // if promise fulfilled resolve msg will be printed
}).catch((err)=>{console.log(err)}) // if promise is rejected rej msg will be printed in catch block