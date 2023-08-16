// accept two numbers from input
import axios from "axios";
import chalk from "chalk";
import readLineSync from "readline-sync"
import { Spinner } from "cli-spinner";



// function sumApi(){
//     var spinner = new Spinner("Loading from Server..%s");
//     spinner.setSpinnerString("|/-\\");
//     spinner.start();
//     setTimeout(async () => {

//         try{
//             const num1 = readLineSync.questionInt(chalk.yellow("Enter the first input (num1) : "))
//             const num2 = readLineSync.questionInt(chalk.yellow("Enter the second input (num2) : "))
//             const res = await axios.get(`https://5938-49-204-22-28.ngrok-free.app/${num1}/${num2}`)
//             const sum = res.data.success
//             console.log(sum);
    
//             const num3 = readLineSync.questionInt(chalk.yellow("Enter the second input (num3) : "))
//             const res2 = await axios.get(`https://5938-49-204-22-28.ngrok-free.app/${num3}/${sum}`)
//             const sum2 = res2.data.success
//             console.log(sum2);
    
//             const num4 = readLineSync.questionInt(chalk.yellow("Enter the second input (num3) : "))
//             const res3 = await axios.get(`https://5938-49-204-22-28.ngrok-free.app/${num4}/${sum2}`)
//             const sum3 = res3.data.success
//             console.log(sum3);
    
//         }
//         catch(err){
//             console.log(err);
//             spinner.stop();
//         }
//     },3000)

// }
async function sumApi(){
    try{
        const num1 = readLineSync.questionInt(chalk.yellow("Enter the first input (num1) : "))
        const num2 = readLineSync.questionInt(chalk.yellow("Enter the second input (num2) : "))
        const res = await axios.get(`https://5938-49-204-22-28.ngrok-free.app/${num1}/${num2}`)
        const sum = res.data.success
        console.log(sum);

        const num3 = readLineSync.questionInt(chalk.yellow("Enter the second input (num3) : "))
        const res2 = await axios.get(`https://5938-49-204-22-28.ngrok-free.app/${num3}/${sum}`)
        const sum2 = res2.data.success
        console.log(sum2);

        const num4 = readLineSync.questionInt(chalk.yellow("Enter the second input (num3) : "))
        const res3 = await axios.get(`https://5938-49-204-22-28.ngrok-free.app/${num4}/${sum2}`)
        const sum3 = res3.data.success
        console.log(sum3);

    }
    catch(err){
        console.log(err);
    }
}

sumApi()