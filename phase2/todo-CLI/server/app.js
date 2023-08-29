import express from "express";
import fs from "fs/promises"
import bcrypt from "bcrypt"

//instatiing express
const app = express()
app.use(express.json())

/*
public routes
User signup - public - POST
User login - public - POST

private routes
user deletetion - DELETE
create task -POST
edit task - PUT/PATCH
read task - GET

*/

// setup route or gateway to client

app.get("/", (req,res)=>{
    res.status(200).json({Success : "welcome to backend"})
})

//  user sign up or register 
app.post("/api/register", async (req,res)=>{
    try{

    let {username,email,phone,adress,password,confirmPassword} = req.body

    if(password!== confirmPassword){
        return res.status(200).json({error : "password doesn't match"})
    }
    password = await bcrypt.hash(password,12)

    let data = await fs.readFile("data.json")
        data = JSON.parse(data)
        
    let userData = {
        username,
        email,
        phone,
        adress,
        password,
        confirmPassword,
        todo : []
    }
    
    let found = data.find(ele => ele.email == userData.email)
    if (found){ return console.log("email has already been registered");}

    data.push(userData)

    await fs.writeFile("data.json",JSON.stringify(data))

    res.status(200).json({success:"User registered"})
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"})
    }
})


app.listen(5001,()=>{
    console.log(`Server started at port : ${5001}`);
})