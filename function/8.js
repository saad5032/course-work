


// function isPrime(num){       // any other no cannot divide prime except itself and 1
//     if (factor(num)>2){
//         return false
//     }
// }

// Armstrong number && prime number tracking both at same time

function armstrongCheck(num){
    var string = ""
    string+=num;
    var sum=0
    var power = string.length;
    for (var i=0 ; i<power ; i++){
        sum +=(parseInt(string[i]))**power
    }
    if(num==sum){
        return true
        // console.log(num);
        // console.log("It is a armstrong number");
    }
    else{
        return false
        // console.log("It is not a armstrong number");
    }
}

function isPrime(num){
    var flag =true ;
   
    if (num==1) return false;
    for (var i=2; i<num/2; i++){
        if (num%i==0){
            flag =false;
            break
        }
    }
    return flag;

}

// return array that is neither prime nor armstrong
// keep track of primes and armstrong numbers
var arr = [10,20,30,40,2,5,7,153,1024,1634,11]
function filter(arr){
    var p=0 // keep track of primes
    var a=0 // keep track of armsstrong numbers
    for (var i=0; i<arr.length ; i++){
        if (isPrime(arr[i])) p++;
        if (armstrongCheck(arr[i])) a++;
        if (armstrongCheck(arr[i]) || isPrime(arr[i])){    // if it is either prime or arm we will remove ir
            arr.splice(i,1);
            i--
        }
    }
    console.log("primes :"+p);
    console.log("armstrrong numbers : "+a);
    console.log(arr);
    
}
filter(arr)
