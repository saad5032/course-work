import express from "express";
import fs from "fs/promises"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"




const router = express.Router()

router.get("/", (req,res)=>{
    res.status(200).json({Success : "welcome to backend"})
})

//  user sign up or register 
router.post("/register", async (req,res)=>{
    try{

    let {username,email,phone,adress,password,confirmPassword} = req.body

    if(password!== confirmPassword){
        return res.status(200).json({error : "password doesn't match"})
    }

    //bcypt is hashing and you cannot decode it
    password = await bcrypt.hash(password,12)
    confirmPassword = await bcrypt.hash(confirmPassword,12)

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

router.post("/login", async(req,res)=>{
    try {
        let {email,password}=req.body
        let data = await fs.readFile("data.json")
        data = JSON.parse(data)

        let emailFound = data.find(ele => ele.email == email)
        //if (!emailFound) throw chalk.redBright("User not found/ wrong email")
        if (!emailFound) {
            return res.status(404).json({error : "User not found/ wrong email"})
        }
        let passwordFound = await bcrypt.compare(password,emailFound.password)
        //if (!passwordFound) throw chalk.redBright("Password doesn't match")
        if(!passwordFound){
            return res.status((404).json({error:"Password doesn't match"}))
        }


        //do this
        const payload = {email : emailFound.email, username : emailFound.username}
        const privateKey = "TheHackingBootcamp"
        const token = jwt.sign(payload,privateKey)
        res.status(200).json({success:"logged in successfully",token})

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"})
    }
})


export default router;