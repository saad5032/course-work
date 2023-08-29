import chalk from "chalk";
import readLineSync, { question, questionInt } from "readline-sync"
import bcrypt from "bcrypt"
import fs from "fs/promises"
async function editTodo(email){
    try{
        console.clear();
        console.log(`
        ====================================\n
        \tEdit  Todo\n 
        ====================================`);

        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)

        let userFound = fileData.find(ele => ele.email == email)

        let taskID = question("Enter the unique id of the task : ")
        let taskFound = userFound.todo.find(ele => ele.taskID == taskID)
        // here todo is a list and can have many objects inside it so we r using find operation of array 
        if(!taskFound){
            console.log("The task was not found");
        }

        let option = questionInt("Enter 1 to change todo name : /n Enter 2 to change status/n")
        if (option==1){
            let newtodoName = question("Enter the task name : ")
            taskFound.name = newtodoName;
        }else if (option ==2){
            let confirmation = question("Enter (Y/N) for completion of task ")
            if (confirmation=="Y" || confirmation=="YES"){
                taskFound.isCompleted  = true
            }
            else {
                console.log("wrong inout");
                return
            }
        }

      

        await fs.writeFile("data.json",JSON.stringify(fileData))
        console.log(chalk.yellow("Task edited suceessfully"));
    }

    catch (err){
        console.log(err);
    }
}
export default editTodo