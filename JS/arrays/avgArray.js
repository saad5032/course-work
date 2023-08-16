var Elements = [1,2,3,4,5,6,7,8,9,15]
//avg = sum of elements by number of elements

function avg(arr){
    var sum = 0;
    var noOfElements= arr.length
    for (var i =0 ; i < arr.length; i++){
        sum+=arr[i]
    }
    var avg = (sum/noOfElements)
    console.log(avg);
}
avg(Elements)
