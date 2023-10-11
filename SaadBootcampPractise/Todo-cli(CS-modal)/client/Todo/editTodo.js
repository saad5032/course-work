import chalk from "chalk"
import {question, questionInt} from "readline-sync"
import axios from "axios"
import fs from "fs/promises"


async function editTodo(email){
    try {
        console.clear()
        console.log(`================
        \t Edit todo \n
        =========================`);
     


        let taskID = question("Enter the taskID to change the task : ")
        

        // option can be integers
        let option = questionInt("Enter 1 to change the task name or Enter 2 to change the status : ")

        let newTaskName
        let isCompleted
        if (option==1){
            newTaskName = question("Enter new task name :")
        }else if(option==2){
            isCompleted = true
        }else{
            console.log("wrong input");
        }

        let NewTodo = {
            newTaskName,
            isCompleted
        }

        let token =  await fs.readFile("secret.txt");
        token = token.toString()

        let req = await axios.put(`http://localhost:5001/api/todo/edit/${taskID}`,NewTodo , {
            headers: {
                "auth-token" : token,
            },
            })

       
        console.log(chalk.green("Task edited successfully"));
    } catch (error) {
        console.log(error);
    }
}

export default editTodo

