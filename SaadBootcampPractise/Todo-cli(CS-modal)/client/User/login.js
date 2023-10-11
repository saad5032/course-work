
import pkg from 'readline-sync';
const { question, questionEMail} = pkg;
import axios from "axios"
import fs from "fs/promises"
import loggedIn from "../Todo/index.js";

async function loginUser(){
    try{
        console.clear()
        console.log(`=================\n
        \t User login \n
        =========================`)

        // This email and password is during login of the user
        let email = questionEMail("Enter your email: ")
        let password = question("Enter your password : ", {hideEchoBack:true})
        while(!password){
            password = question("Re-enter your password : ", {hideEchoBack:true})
        }

        let userLoginInfo = {
            email,
            password,
        }

        let req = await axios.post("http://localhost:5001/api/user/login",userLoginInfo)

        // After the login info is sent the server confirms the info with the info present in database(data.json)
        // Then server sends the token here to the user. user save the token to verify himself that he is on the other frontend.

        // console.log(req.data);
        await fs.writeFile("secret.txt",req.data.token)
        
        console.log("User logged in Successfully");

        await loggedIn(email)

    }catch(error){
        console.log(error.response.data);
    }
}

export default loginUser