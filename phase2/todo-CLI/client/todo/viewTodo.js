import chalk from "chalk";
import readLineSync, { question, questionInt } from "readline-sync"
import bcrypt from "bcrypt"
import fs from "fs/promises"
async function viewTodo(email){
    try{
        console.clear();
        console.log(`
        ====================================\n
        \tView  Todos\n 
        ====================================`);

        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)

        let userFound = fileData.find(ele => ele.email == email)
        
        userFound.todo.forEach((ele,i) => {
            console.log(`Todo number : ${i+1}`); // to start from number 1
            console.log(`Todo name : ${ele.name}`);
            console.log(`Todo status : ${ele.isCompleted ? "completed \n" : "Incompleted \n" }`);
        });

        await fs.writeFile("data.json",JSON.stringify(fileData))
        console.log(chalk.yellow("Task shown successfully"));
    }

    catch (err){
        console.log(err);
    }
}

export default viewTodo
