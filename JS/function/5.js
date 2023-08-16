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

function primeSeries(n){


}