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

import loading from "./utils/loading.js"
import registerUser from "./user/registerUser.js";
import loginUser from "./user/login.js";
import deleteUser from "./user/deleteUser.js";

import axios from "axios";
import chalk from "chalk";


async function main() {
       try {
    
       console.clear()
       console.log(chalk.green("*************************************************"));
       console.log("\t\t TODO CLI \t\t");
       console.log(chalk.green("*************************************************"));
       const options = ["Exit The Program","Create a User","Login","Delete account"]

       options.forEach((ele,i)=>{
        console.log(`Enter ${i} for ${ele}`);
       })
       const option = readLineSync.questionInt("Enter your option : ")
       if (option<0 || option>=options.length){
              let s = loading("Invalid option, Please try againg. Redirecting to menu");
              await setTimeout(2000)
              s.stop(true)
              return main()
       }

       switch (option){
              case 0 : 
                     console.log("Exiting , BYE");
                     return
              case 1 : 
                     console.log("User Registration");
                     await registerUser()
                     break
              case 2 : 
                     console.log("User Login");
                     await loginUser()
                     break
              case 3 : 
                     console.log("User Delete");
                     await deleteUser()
                     break
       }
       
       let Willcontinue = readLineSync.question("Do you want to continue : ")
       if (Willcontinue == "y"  || Willcontinue == "Y" || Willcontinue == "yes" || Willcontinue == "Yes"){
              let spinner = loading("Redirecting to menu");
              await setTimeout(2000)
              spinner.stop(true)
              return main()
       }else{
              console.log(chalk.bgGreenBright("Thankyou for using our application. See you again "));
       }
}
catch (error){
       console.log(error);

}
}
main()