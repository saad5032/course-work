import express  from "express";

import UserRouter from "./controllers/users/index.js";
import TodoRouter from "./controllers/todos/index.js"

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    console.log("Server accepted request");
    res.status(200).json({success : "this is your response to the request you sent"})
})

app.use("/api/todo", TodoRouter)
app.use("/api/user",UserRouter)


app.listen(5001,()=>{
    console.log("Server started at :", 5001);
})