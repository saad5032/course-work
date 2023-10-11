import chalk from "chalk"
import {question} from "readline-sync"
import fs from "fs/promises"


async function viewTodo(email){
    try {
        console.clear()
        console.log(`================
        \t View todo \n
        =========================`);
        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)

        let userFound = fileData.find(ele => ele.email == email)
        userFound.todo.forEach((ele,i) => {
            console.log(`Todo number : ${i}`);
            console.log(`Todo name : ${ele.name}`);
            console.log(`Todo status : ${ele.completed}` ? "complete \n" : "Incomplete");
            
        });
      

        await fs.writeFile("data.json",JSON.stringify(fileData))
        console.log(chalk.green("view successfull"));
    } catch (error) {
        console.log(error);
    }
}

export default viewTodo

