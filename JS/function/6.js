// Armstrong number
function armstrongCheck(num){
    var string = ""
    string+=num;
    var sum=0
    var power = string.length;
    for (var i=0 ; i<power ; i++){
        sum +=(parseInt(string[i]))**power
    }
    if(num==sum){
        console.log(num);
        // console.log("It is a armstrong number");
    }
    else{
        return false
        // console.log("It is not a armstrong number");
    }
}
// armstrongCheck(153)

var i=0;
var armStrongNumbers = [];
while(i<=10000){
    if (armstrongCheck(i)){
        armStrongNumbers.push(i)
    } i++
}
console.log(armStrongNumbers);