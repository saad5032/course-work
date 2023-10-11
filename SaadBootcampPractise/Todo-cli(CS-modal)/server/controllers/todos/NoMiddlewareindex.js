import express  from "express";
import fs from "fs/promises"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import randomStringGenerator from "../../utils/randomstring.js";



const router = express.Router()

router.post("/taskCreated",async(req,res)=>{
    try {
        let {todoName} = req.body
        // token from client is in req headers 
        let token =  req.headers["auth-token"]
        console.log("token");

        const privateKey = "TheHackingSchool"


        // i am getting the payload back, the data i used in payload when creating token. 
        // now I can access this payload data i.e email and password, 
        let verifiedPayload = jwt.verify(token,privateKey)

        // After verification we add the todo name we got from client via api in data.json 

        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)

        // I am finding the person in data.json file with the same email i have in varified payload. payload is created when user login
        let userFound = fileData.find(ele => ele.email == verifiedPayload.email)

        // in object i can define the keys right
        let todoData = {
            name : todoName,
            completed : false,
            taskID : randomStringGenerator(6)
            }

        userFound.todo.push(todoData)
        await fs.writeFile("data.json",JSON.stringify(fileData))
        res.status(200).json({success : "Task added successfully"})
    } catch (error) {
        res.status(400).json({error : "Internal server error"})
    }
})

export default router