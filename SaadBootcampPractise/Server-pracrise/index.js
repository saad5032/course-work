import express from "express";
//Here, the code imports the Express.js library and creates an instance as app of the Express application.
const app = express()



app.use(express.json())

// The web page will get response(res.status)  "Welcome to mini server" from server
app.get("/",(req,res)=>{
    res.status(200).json({
        success : "Welcome to mini server"
    })
})

app.get("/:a/:b",(req,res)=>{
    let {a,b} = req.params
    console.log(a,b)
    let sum = +a + +b
    res.status(200).json({success : sum})
})

app.listen(5001, ()=>{
    console.log("server started at port no :", 5001)
})


