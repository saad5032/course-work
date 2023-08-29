import chalk from "chalk";
import readLineSync, { question } from "readline-sync"
import bcrypt from "bcrypt"
import fs from "fs/promises"
import randomStringGenerator from "../utils/randomStringGenerator.js";


async function CreateTodo(email){
    try{
        console.clear();
        console.log(`
        ====================================\n
        \tCreate Todo\n 
        ====================================`);

        

        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)

        let userFound = fileData.find(ele => ele.email == email)

        let todoName = question("Enter your todo name : ")
        while(!todoName){
            todoName = question("Enter your todo name : ")
        }

        let todoData = {
            name : todoName,
            isCompleted : false,
            taskID : randomStringGenerator(6)
        }

        userFound.todo.push(todoData)

        await fs.writeFile("data.json",JSON.stringify(fileData))
        console.log(chalk.yellow("Todo created suceessfully"));
    }

    catch (err){
        console.log(err);
    }
}


export default CreateTodo;