
import readlinesync, { question, questionEMail } from "readline-sync"
import axios from "axios"


/* From app.js if we select the register option then we will be able to collect all the details of user 
such as email,phone,password,adress,usernmae from this function*/

async function registerUser(){
    try{
        console.clear()
        console.log(`===================\n
        \t User Register \n
        =============================`)

        // I am collecting username from terminal and stroring here in register.js
        let username = readlinesync.question("Enter username : ")
        //if we dont type anything in terminal and press enter then the please enter username will be asked so that user can 
        //be able to enter it if he missed this entery of username . Basically it is validation from user point of view.
        while (!username){
            username = readlinesync.question("Please enrer the username : ")
        }

        // same way we collect email, phone,password from terminal and put validations also
        let email = questionEMail("Enter email : ")

        let phone = question("Enter phone no : ")
        while(!phone){
            phone = question("Enter phone no again : ")
        }

        let address = question("Enter your address : ")
        while(!address){
            address = question("Please enter the address : ")
        }

       // let password = questionNewPassword()  --> we need to hash the password to make it more secure,
       // in terminal do npm i bcrypt , then import bcrypt , then do the next lines
       let password = readlinesync.question("Enter the password : ",{hideEchoBack : true})

       let confirmPassword = readlinesync.question("Enter the confirm password : ",{hideEchoBack : true})

    //    while(password !== confirmPassword){
    //     console.log("Passwords do not match");
    //     password = question("Renter the password : ",{hideEchoBack : true})
    //     confirmPassword = question("Renter the password : ",{hideEchoBack : true})
    //     }

    
        // an object userdata, we need this collection in object so wan write it tto data.json file
        let userData = {
            username,   // username key already has a value stored inside same for everything.
            email,
            password,
            confirmPassword,
            phone,
            address
        }
        
        // think this block as a postman now
        // The below api is connected to my server endpoint register api, so all the above data from terminal is
        // send to server via req which have userData
        // in browser you can do only get, but via axios you can do get,post,put etc same like postman
        let req = await axios.post("http://localhost:5001/api/user/register",userData)
        console.log(req.data)

    
    }catch(error){
        console.log(error.response.data);
    }
}

// Iam exporing this function and i will import this in app.js and use in switch option 1 so if 
// I press 1 then this function runs and collects all the details and store them.
export default registerUser