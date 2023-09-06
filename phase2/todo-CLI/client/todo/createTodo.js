import chalk from "chalk";
import readLineSync, { question } from "readline-sync"
import bcrypt from "bcrypt"
import fs from "fs/promises"
import randomStringGenerator from "../utils/randomStringGenerator.js";
import axios from "axios";


async function CreateTodo(email){
    try{
        console.clear();
        console.log(`
        ====================================\n
        \tCreate Todo\n 
        ====================================`);


        let todoName = question("Enter your todo name : ")
        while(!todoName){
            todoName = question("Enter your todo name : ")
        }

        let todo={
            todoName
        }

    let token = await fs.readFile("secret.txt") 
    token = token.toString()
 
    let res = await axios.post("http://localhost:5001/api/todo/add",todo,{
        headers:{
            "auth-token":token
        }
    })
    console.log(res.data.success);
        
    }

    catch (err){
        console.log(err);
    }
}


export default CreateTodo;