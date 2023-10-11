import express  from "express";
import fs from "fs/promises"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import randomStringGenerator from "../../utils/randomstring.js";
import authMiddleware from "../../middleware/auth/verifyToken.js";



const router = express.Router()

router.post("/taskCreated",authMiddleware, async(req,res)=>{
    // The req from client is at taskcreated , then req it goes to authmiddleware, then req is here 
    try {
        // Retrieving todoname from req body field
        let {todoName} = req.body

        //Retrieving payload info from req payload field which is created in authMiddleware
        let payload = req.payload
    
        // After verification we add the todo name we got from client via api in data.json 
        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)

        // I am finding the person in data.json file with the same email i have in varified payload. payload is created when user login
        let userFound = fileData.find(ele => ele.email == payload.email)

        // in object i can define the keys right
        let todoData = {
            name : todoName,
            isCompleted : false,
            taskID : randomStringGenerator(6)
            }

        //pushing all these tododata to array toddo in data.json
        userFound.todo.push(todoData)
        await fs.writeFile("data.json",JSON.stringify(fileData))
        res.status(200).json({success : "Task added successfully"})
    } catch (error) {
        res.status(400).json({error : "Internal server error"})
    }
})

router.get("/view",authMiddleware,async(req,res)=>{
    try {
        let payload = req.payload
        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)

        let userFound = fileData.find(ele => ele.email == payload.email)
        // const todoArray = userFound.todo.map((ele) => {
        //         return ele;
        // });
        const todoArray = userFound.todo
        res.status(200).json({success : "Todo data fetched from database",todoArray})
    } catch (error) {
        res.status(400).json({error : "Internal server error"})
    }
})

router.put("/edit/:taskID",authMiddleware,async(req,res)=>{
    try {
        let payload = req.payload  // i get payload from req payload field set up in authMiddleware
        let {taskID} = req.params  // I get taskID which client has sent in params(path variable)
        let {newTaskName,isCompleted} = req.body  // i get task changes from client who sent in req body

        // console.log(taskID);
        // console.log(newTaskName);
        // console.log(isCompleted);
        // console.log(payload.email);


        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)

        // i am finding the person in data.json file with email client has sent from payload
        let userFound = fileData.find(ele => ele.email == payload.email)
    
        // i ma finding the task with the id client provided
        let taskFound = userFound.todo.find(ele => ele.taskID == taskID)

        //if no object(taskFound) which has task name, iscmpleted and taskid then
        if(!taskFound){
            return res.status(400).json({error : "Internal server error"})
        } 

        if(newTaskName){
            taskFound.name = newTaskName
        }else if(isCompleted){
            taskFound.isCompleted = isCompleted
        }
         // userFound is shallow copy or soft link of object in data.json array. so we can make changes directly to object in data.json
        await fs.writeFile("data.json",JSON.stringify(fileData))
        res.status(200).json({success : "Edited Successfully",taskFound})
    } catch (error) {
        res.status(400).json({error : "Internal server error"})
    }
})


export default router