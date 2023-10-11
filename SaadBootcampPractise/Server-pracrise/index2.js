import express from "express";
//Here, the code imports the Express.js library and creates an instance as app of the Express application.
const app = express()

app.use(express.json())

// The web page will get response(res.status)  "Welcome to mini server" from server
app.get("/",(req,res)=>{
    console.log(req.body)
    res.status(200).json({
        success : "server successfully got the body"
    })
})

app.listen(5001, ()=>{
    console.log("server started at port no :", 5001)
})


