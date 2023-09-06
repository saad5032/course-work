import chalk from "chalk";
import readLineSync, { question,questionEMail } from "readline-sync"
import bcrypt from "bcrypt"
import fs from "fs/promises"
import loggedIn from "../todo/userTodolist.js";
import axios from "axios"

async function loginUser(){
    try{
        console.clear();
        console.log(`
        ====================================\n
        \tUser Login\n 
        ====================================`);

        let email = questionEMail("Enter your email : ")
        let password = question("Enter your password : ", {hideEchoBack : true});
        // hideEcho to get stars so that your password is not shown
        while (!password){
            password = question("Enter your password : ", {hideEchoBack : true});
        }

     //   let data = await fs.readFile("data.json")
      //  data = JSON.parse(data)

      //  let emailFound = data.find(ele => ele.email == email)
        // emailFound return object that has the same email u enterd
    
       // if (!emailFound) throw chalk.redBright("User not found/ wrong email")

       // let passwordFound = await bcrypt.compare(password,emailFound.password)
        //bcrypt.compare will compare the password u entered and hash it to have the same 
       // if (!passwordFound) throw chalk.redBright("Password doesn't match")

       let userdata={
        email,
        password
       };

       let res = await axios.post("http://localhost:5001/api/user/login",userdata)
       console.log(res.data.success);
       await fs.writeFile("secret.txt",res.data.token)
        await loggedIn(email)
    }

    catch (err){
        console.log(err);
    }
}

export default loginUser;