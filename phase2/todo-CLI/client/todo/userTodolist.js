/* 
user login
user register
delete user

CRUD(create,read,update,delete)

Insert todo
view todo
edit todo
delete todo
*/
import readLineSync from "readline-sync";
import { questionInt } from "readline-sync";
import {setTimeout} from "timers/promises"
import chalk from "chalk";

import loading from "../utils/loading.js"

import CreateTodo from "./createTodo.js";
import editTodo from "./editTodo.js";
import viewTodo from "./viewTodo.js";



async function loggedIn(email) {
       try {
    
       console.clear()
       console.log(chalk.green("*************************************************"));
       console.log("\t\t USER TODO \t\t");
       console.log(chalk.green("*************************************************"));
       const options = ["Exit The Program","Create a todo","Edit a todo","View todo"]

       options.forEach((ele,i)=>{
        console.log(`Enter ${i} for ${ele}`);
       })
       const option = readLineSync.questionInt("Enter your option : ")
       if (option<0 || option>=options.length){
              let s = loading("Invalid option, Please try againg. Redirecting to menu");
              await setTimeout(2000)
              s.stop(true)
              return loggedIn(email)
       }

       switch (option){
              case 0 : 
                     console.log("Exiting , BYE");
                     return
              case 1 :
                     console.log("Create a todo");
                     await CreateTodo(email)  // await is very imp as creatodo function is asyn function
                     break
              case 2 : 
                     console.log("todo updated");
                     await editTodo(email)
                     break
              case 3 : 
                     console.log("View todos");
                     await viewTodo(email)
                     break
       }
       
       let Willcontinue = readLineSync.question("Do you want to continue : ")
       if (Willcontinue == "y"  || Willcontinue == "Y" || Willcontinue == "yes" || Willcontinue == "Yes"){
              let spinner = loading("Redirecting to menu");
              await setTimeout(2000)
              spinner.stop(true)
              return loggedIn(email)
       }else{
              console.log(chalk.bgGreenBright("Thankyou for using our todo application."));
       }
}
catch (error){
       console.log(error);

}
}
export default loggedIn