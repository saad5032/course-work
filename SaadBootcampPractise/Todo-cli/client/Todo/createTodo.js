import chalk from "chalk"
import {question} from "readline-sync"
import fs from "fs/promises"
import randomStringGenerator from "../utils/randomstring.js"

async function createTodo(email){
    try {
        console.clear()
        console.log(`================
        \t Create todo \n
        =========================`);
        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)

        let userFound = fileData.find(ele => ele.email == email)
        let todoName  = question("Enter your todo name : ")
        while(!todoName){
            todoName = question("Enter your todo name : ")
        }
        // in object i can define the keys right
        let todoData = {
            name : todoName,
            completed : false,
            taskID : randomStringGenerator(6)
        }

        userFound.todo.push(todoData)
        await fs.writeFile("data.json",JSON.stringify(fileData))
        console.log(chalk.green("Task added successfully"));
    } catch (error) {
        console.log(error);
    }
}

export default createTodo

