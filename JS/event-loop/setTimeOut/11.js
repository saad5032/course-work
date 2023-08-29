// setTimeout(() => {
//     console.log("hi");
// }, 2000);

import {setTimeout} from "timers/promises"

async function test(){
    try{
        await setTimeout(5000)
        console.log("i am here");
    }
    catch(error){
        console.log(error);
    }
}
test()