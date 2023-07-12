function hello(){
    console.log("hi good morning")
}

function greetings(name){
    console.log("hi", name)
}

function sum(a,b){
    console.log(a+b);
}

// function call
hello()
greetings("saad")
sum(100,20)

//chocolates
//cost=1.5 rs
//money = 10rs
function chocolate(money){
    console.log(Math.floor(money/1.5)) // how many chocolates you can buy that is how many time 1.5 goes into 10
    return (money%1.5)  // what is the balance that what is remainder
}


console.log(chocolate(10)) // To print the return statement as well 