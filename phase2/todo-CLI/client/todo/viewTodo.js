import chalk from "chalk";
import readLineSync, { question, questionInt } from "readline-sync"
import bcrypt from "bcrypt"
import fs from "fs/promises"
import axios from "axios";
async function viewTodo(email){
    try{
        console.clear();
        console.log(`
        ====================================\n
        \tView  Todos\n 
        ====================================`);

        let token = await fs.readFile("secret.txt") 
        token = token.toString()

        let res = await axios.get("http://localhost:5001/api/todo/all",{
            headers:{
                "auth-token":token
            }
        })
        
        console.log(res.data);
        res.data.todos.forEach((ele,i) => {
            console.log(`Todo number : ${i+1}`); // to start from number 1
            console.log(`Todo name : ${ele.name}`);
            console.log(`Todo status : ${ele.isCompleted ? "completed \n" : "Incompleted \n" }`);
        });
    }

    catch (err){
        console.log(err);
    }
}

export default viewTodo
