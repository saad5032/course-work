var arr = [1,3,4,55,66,88]

// Imperative paradigm , this is the approach you do things manually and have full control
for(var i=0; i<arr.length ;i++){
    console.log(i+":"+arr[i]);
}

// Declarative paradigm , this is where you use inbulit things such as array helper method (arr.) to do things faster but dont have control

arr.forEach((element,i) => {
    console.log(element,i);
});