console.time("block 1")
setTimeout(function () {
    console.log("I am First");
}, 1000);
setTimeout(function () {
    console.log("I am First");
}, 1500);
setTimeout(function () {
    console.log("I am Third");
}, 3500);
setTimeout(function () {
    console.log("I am Just Getting Started with Adv. JS");
    setTimeout(function () {
        console.log("I am Just Getting Started again");
        console.timeEnd("block 1")
    }, 5000);   // time gets compunded here 5+2 = 7s
}, 2000);