import chalk from "chalk"
import {question, questionInt} from "readline-sync"
import fs from "fs/promises"

async function editTodo(email){
    try {
        console.clear()
        console.log(`================
        \t Edit todo \n
        =========================`);
        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)

        let userFound = fileData.find(ele => ele.email == email)
        // I got the user object as userFound which have details of user from data.json


        let ID = question("Enter the taskID to change the task : ")
        //To get the task id from jsonlets access object that has taskn name, id and stauts and this object is in todo list 
        // which in turn is in user object (userFound) 
        let taskFound = userFound.todo.find(ele => ele.taskID == ID)

        //if no object(taskFound) which has task name, iscmpleted and taskid then
        if(!taskFound){
            console.log("The task was not found");
        }

        // option can be integers
        let option = questionInt("Enter 1 to change the task name, Enter 2 to change the status")

        if (option==1){
            // if option is 1 then we change the name in the taskFound object to newtaskname
            let newTaskName = question("Enter new task name :")
            taskFound.name = newTaskName
        }else if(option==2){
            // lets confirm from user before changing task status whether it is completed or not
            let confirmation = question("Enter Y/y to confirm")
            if (confirmation == "Y" || confirmation == "y"){
                    taskFound.completed = true
            }
        }else{
            console.log("wrong input");
        }

        // userFound is shallow copy or soft link of object in data.json array. so we can make changes directly to object in data.json
        await fs.writeFile("data.json",JSON.stringify(fileData))
        console.log(chalk.green("Task edited successfully"));
    } catch (error) {
        console.log(error);
    }
}

export default editTodo

