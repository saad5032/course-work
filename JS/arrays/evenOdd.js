var elements = [3,5,7,6,4,9,22,51,42]

function evenOdd(arr){
    for (var i=0; i<arr.length; i++){
        if (arr[i]%2==0){
            console.log(`Even number : ${arr[i]}`);   //-->good practise
            //console.log('Even number : ' + arr[i]);  //-->bad
        }
        else {
            // console.log('odd number : ' + arr[i])}
            console.log(`odd number : ${arr[i]}`)}
        }
    }
evenOdd(elements)