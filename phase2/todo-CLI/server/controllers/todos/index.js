import express from "express";
import fs from "fs/promises"
import jwt from "jsonwebtoken"
import randomStringGenerator from "../../utils/randomStringGenerator.js";
import authMiddleWare from "../../middleware/auth/varifytoken.js";
import axios from "axios"

const router = express.Router()

router.post("/add",authMiddleWare,async(req,res)=>{
    try{
        let payload = req.payload;
        const {todoName} = req.body;

        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)

        let userFound = fileData.find(ele => ele.email == payload.email)

        let todoData = {
            name : todoName,
            isCompleted : false,
            taskID : randomStringGenerator(6)
        }

        userFound.todo.push(todoData)
        await fs.writeFile("data.json",JSON.stringify(fileData))
        res.status(200).json({success : "Task added successfully"})

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"})
    }
})


router.get("/all",authMiddleWare,async(req,res)=>{
    try{
        let payload = req.payload;

        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)

        let userFound = fileData.find(ele => ele.email == payload.email)

        let todos = userFound.todo;
        res.status(200).json({success : "Fetched successfully",todos})

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"})
    }
})

router.put("/edit/:taskID",authMiddleWare,async(req,res)=>{
    try{
        let payload = req.payload;
        // i didnt got req.params 
        let {taskID} = req.params;

        let {newTaskName,isCompleted} = req.body
        // console.log(newTaskName);
        // console.log(taskID);
        // console.log(isCompleted);
    

        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)

        console.log(taskID);
       
        let userFound = fileData.find((ele) => ele.email == payload.email)
        console.log(userFound);
        let taskFound = userFound.todo.find(ele => ele.taskID == taskID)
        console.log(taskFound);
         // here todo is a list and can have many objects inside it so we r using find operation of array 
         if(!taskFound){
             return res.status(404).json({error:"The task was not found"});
        }
        if(newTaskName){
            taskFound.name = newTaskName
        }else if(isCompleted){
            taskFound.isCompleted = true;
        }

        await fs.writeFile("data.json",JSON.stringify(fileData))        
        res.status(200).json({success : "Edited successfully"})

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"})
    }
})

export default router