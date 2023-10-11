import chalk from "chalk"
import {question} from "readline-sync"
import fs from "fs/promises"
import axios from "axios"


async function viewTodo(email){
    try {
        console.clear()
        console.log(`================
        \t View todo \n
        =========================`);
    
      
        let token =  await fs.readFile("secret.txt");
        token = token.toString()
        let req = await axios.get("http://localhost:5001/api/todo/view",{
            headers: {
                "auth-token" : token,
            },
            })

        // console.log(req.data);
        console.log(req.data.success);
        const viewTodo = req.data.todoArray

        viewTodo.forEach((ele,i) => {
            console.log(`Todo number : ${i}`);
            console.log(`Todo name : ${ele.name}`);
            console.log(`Todo status : ${ele.isCompleted}` ? "complete " : "Incomplete");
            
        });

        console.log(chalk.green("view successfull"));
    } catch (error) {
        console.log(error);
    }
}

export default viewTodo

