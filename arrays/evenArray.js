// building an array using functions
function array(n){
    var a = [];
    var counter=0
    for (var i=0; i<=n ; i++){
       
        a.push(i);
        counter++
    }
    console.log(counter);
    return a
}

// evenarray making approach-1
function evenarray1(n){
    var arr1 = []
    var counter=0
    for (var i=1; i<=n ; i++){
        counter++
        if (i%2==0)
        arr1.push(i);
    }  
    console.log(counter);
    return arr1
}

// evenarray making approach-2
function evenarray2(n){
    var arr2 = []
    var counter=0
    for (var i=2; i<=n ; i=i+2){
        counter++     // counter value is 50 that is the program is runnnong 50 times thus approach 2 has less computational work so its better
        arr2.push(i);
    }  
    console.log(counter);
    return arr2
}

console.log(array(100))
console.log(evenarray1(100))
console.log(evenarray2(100))