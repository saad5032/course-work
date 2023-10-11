import chalk from "chalk"
import readlinesync from "readline-sync"
import {setTimeout} from "timers/promises"   // i am using settimeout class so use {}
import loading from "../utils/loading.js"
import createTodo from "./createTodo.js"
import editTodo from "./editTodo.js"
import viewTodo from "./viewTodo.js"





async function loggedIn(email){
    try {
        // when ever the main function is called i want to clear the previousn outputs in terminal   
        console.clear()
        // I want to start my cli in this fashion in terminal
        console.log(chalk.green("***********************"))
        console.log("\t\t Todo operations \t\t");
        console.log(chalk.green("***********************"))

        // I make an array of options from which user select to do operations
        // I dont want options variable to be again declared anywhere so I use const
        const options = ["Exit program", "Create Todo", "Get all tasks", "Edit a todo"]

        // To print all the options in terminal so user can see iam using for loog to print them.
        options.forEach((ele,i)=>{     // i is indexes of iterator ele which iterates throgh the options
            console.log(`Enter ${i} to ${ele}`);
        })

        // option will be taken as int from terminal and this int is stored in option
        const option = readlinesync.questionInt("Enter the option: ")

        if(option<0 || option >= options.length) {
            // we can call loading function by importing here  from utils folder as we exported it there
            let spinner = loading("Invalid option")   // This makes spinner starts
            // I defined spinner class in loading class so using instance spinner of loading class 
            //I can basically use properties of spinner class as well
            await setTimeout(3000)  // I ma here using settime out function using asyn await, so await will make this 
            // statement wait for 3 seconds before execting next statements 
            spinner.stop() // after 3 sec this gets executed so spinner stops

            // after invalid option , i want user to retry the To do Cli so i call main() this way
            return loggedIn(email)
        }

        // if the option an int is 0 to 3 then one of following case is executed via switch
        switch(option){
            case 0:
                console.log("Exiting");
                return  // if i do return here i will be able to start the terminal by exiting cli
            
            case 1:
                await createTodo(email)
                break // i need to use break here becoz it will continue to next line where willcontine variable is declared
                // and wont jump to register function in Users folder.

            case 2:
                await viewTodo(email)
                break
            
            case 3:
                await editTodo(email)
                break
        }

        // willcontinue accepts string from terminal
        let willcontinue = readlinesync.question("Do you want to continue: ")
        if(willcontinue == "y" || willcontinue == "Y"){
            // this spinner instance is block scoped not available outside
            // after printing message
            let spinner = loading("Redirecting to menu")
            // wait for 3s
            await setTimeout(3000)
            // Spinner class property stop via spinner instance
            spinner.stop(true)
            // my tocli will start again
            return loggedIn(email)
        }

    } catch (error) {
        console.log(error);
    }
}

export default loggedIn