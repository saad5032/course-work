// In basics folder 
// 1. set up node modules (npm init -y)
// 2. Then run command (npm i express mongoose) to setup mongoose

import express from "express";
import "./dbConnect.js"
import contactModel from "./models/contact.js";
const app = express()  // initializing express 

const port = 5001;

app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).json({success:"hello there"})
})

app.post('/contact',async(req,res)=>{
    try{
        const contactData = {
            fname : req.body.fname,
            lname : req.body.lname,
            email : req.body.email,
            date : req.body.date,
            address : {
                houseNo : req.body.houseNo,
                city : req.body.city,
                state : req.body.state,
                postcode : req.body.postcode
            }
        }
        console.log(contactData);
        const contact = new contactModel(contactData)
        await contact.save()
        console.log(contact);
        return res.status(200).json({success : "Contact data saved successfully"})

    }catch(err){
        console.log(err);
        res.status(500).json({error:"something went wrong. Internal server error"})
    }
})

app.listen(5001 , ()=>{
    console.log(`Server started at port : ${5001}`);

})