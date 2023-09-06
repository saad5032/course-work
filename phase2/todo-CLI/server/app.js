import express from "express";
import fs from "fs/promises"
import bcrypt from "bcrypt"

//do this
import jwt from "jsonwebtoken"
import userRouter from "./controllers/users/index.js"
import todoRouter from "./controllers/todos/index.js"

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

// app.get("/", (req,res)=>{
//     res.status(200).json({Success : "welcome to backend"})
// })

app.use("/api/user",userRouter)
app.use("/api/todo",todoRouter)


app.listen(5001,()=>{
    console.log(`Server started at port : ${5001}`);
})