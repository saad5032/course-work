import chalk from "chalk";
import readLineSync, { question, questionInt } from "readline-sync"
import bcrypt from "bcrypt"
import fs from "fs/promises"
import axios from "axios";
async function editTodo(email){
    try{
        console.clear();
        console.log(`
        ====================================\n
        \tEdit  Todo\n 
        ====================================`);


    // let token = await fs.readFile("secret.txt") 
    // token = token.toString()
    // console.log(token);
    // let res = await axios.post("http://localhost:5001/api/todo/add",todo,{
    //     headers:{
    //         "auth-token":token
    //     }
    // })

        let taskID = question("Enter the unique id of the task : ")
        
       
        let newTaskName;
        let isCompleted;
        let option = questionInt("Enter 1 to change todo name or Enter 2 to change status : ")
        if (option==1){
            newTaskName = question("Enter the task name : ")
        }else if (option ==2){
            isCompleted=true;
        }
            else {
                console.log("wrong inout");
                return
            }

            let taskBody ={
                newTaskName,
                isCompleted,
            }
            
        let token = await fs.readFile("secret.txt") 
        token = token.toString()
        let res = await axios.put(`http://localhost:5001/api/todo/edit/${taskID}`,taskBody,{
            headers:{
                "auth-token":token
            }})
        
        console.log(res.data);
        console.log(res.data.success);
        }


    catch (err){
        console.log(err);
    }
}
export default editTodo