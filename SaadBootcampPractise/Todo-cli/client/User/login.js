import chalk from "chalk"

import bcrypt from "bcrypt"
import fs from "fs/promises"
import pkg from 'readline-sync';
import { log } from "console";
const { question, questionEMail} = pkg;

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
            password = question("Enter your password : ", {hideEchoBack:true})
        }

        // we need to check this email and password with the email and password entered by user during register (i.e., when making account)
        // In our cli we just need to check witb our data.json file where we pushed the user register details/

        // we need to use await only before read and write otherwise it will not get consumed and return promise
        // import fs/promises then only we can use this await 
        let data = await fs.readFile("data.json")   // reading json file and storing in data
        data = JSON.parse(data)  // data array of objects which have user details is retreived in strings from buffer format

        // using array.find to loop all elements(objets) in array and find the correct element(object) which have the same email
        // as the email entered by used during login like above and return the element(object)
        let emailFound = data.find(ele => ele.email == email)
        // the emailFound is now an object which have the details of the user who is trying to login.

        // if there is no such (element) or (object) or (emailFound) in data.json that means user authentication fails 
        // he is not the user someone other is trying to login
        if(!emailFound){
            throw chalk.red("User not found in database, as you entered wrong email")
        }

        // lets says user has entered correct email, but lets also check his password with the password in our database(data.json)
        await bcrypt.compare(password,emailFound.password)
        console.log("User logged in Successfully");
        await loggedIn(email)

    }catch(error){
        console.log(error);
    }
}

export default loginUser