/*
IN JS
1) fcb function callbacks
2) promises
3) async await
4) generators
*/

setTimeout(function () {
    console.log("I am Just Getting Started with Adv. JS");
}, 2000);
console.log("The Start");
function abc() {
    console.log("Hello There");
    setTimeout(function () {
        console.log("Hello World");
    }, 3000);
}
abc();
console.log("The End");