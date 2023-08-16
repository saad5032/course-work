function abc(time){
    return new Promise((resolve,reject)=>{
        if (time<=5000){
        setTimeout(() => {
            resolve("It is early")
        }, time);
    } else {
        setTimeout(() => {
            reject("It is late")
        }, time);
    }
    })
}

// to make promise pending prunted out but this time it will show pending becoz we have asyncronous statements
// like settime out at line 4 inside Promise i.e., at line 2

console.log(abc(2000));  // Promise { <pending> } as we have asyncrous code imside asyncronous
abc(4000).then((res)=>{console.log(res)}).catch((err)=>{console.log(err);})
