
import {question} from "readline-sync"
import axios from "axios"
import fs from "fs/promises"


async function createTodo(email){
    try {
        console.clear()
        console.log(`================
        \t Create todo \n
        =========================`);
      
        let todoName  = question("Enter your todo name : ")
        while(!todoName){
            todoName = question("Enter your todo name : ")
        }
      
        let userTodoName = {
            todoName
        }

        let token =  await fs.readFile("secret.txt");
        token = token.toString() // when retrieving data which is in string format we do toString() so we dont get buffer format
        // we send this token to server, so server will verfiy it.

        // token or special key is send in headers inside API and we are also sending todoname name via api to server
        
        let req = await axios.post("http://localhost:5001/api/todo/taskCreated",userTodoName , {
        headers: {
            "auth-token" : token,
        },
        })
        // The response from server is in req.data
        console.log(req.data.success);


    } catch (error) {
        console.log(error);
    }
}

export default createTodo

