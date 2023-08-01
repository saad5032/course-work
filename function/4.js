function factor(num){
    arr=[]
    for (var i=1; i<=num ; i++){
        if (num%i==0){
            arr.push(i)
        }
    }
    return arr
    
}

function isPrime(num){       // any other no cannot divide prime except itself and 1
    if (factor(num)>2){
        return false
    }
}
  
console.log(isPrime(12))