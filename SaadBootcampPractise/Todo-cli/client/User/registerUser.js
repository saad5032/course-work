import chalk from "chalk"
import readlinesync, { question, questionEMail, questionNewPassword } from "readline-sync"
import bcrypt from "bcrypt"
import fs from "fs/promises"


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
       let password = readlinesync.question("Enter the password : ")
       password = await bcrypt.hash(password,12)   // await will execute this line completely then go to next line.
       //hashing for 12 salt rounds and higher the rounds the more secure is the password

    //    console.log(password);
       // $2b$12$33JJOWIKN4Mea5/NUXkvgOaMsxzlAwTiSgxbTaceofm9Qfq5TXsLi --> the password is hashed and this is bcrypt we know it 
       // bcoz it begins with 2$
    
        // an object userdata, we need this collection in object so wan write it tto data.json file
        let userData = {
            username,   // username key already has a value stored inside same for everything.
            email,
            password,
            phone,
            address,
            todo : []
        }
        
        // right now data.json is an empty array so we just retrieve that empty array.
        // To do that we need to read data.json and parse it . Always when retrieve we parse

        // To read import fs model and to use async await with fs model do fs/promises
        let data = await fs.readFile("data.json")
       // console.log(data);  // we get promise we need to parse it
        data = JSON.parse(data)
        // console.log(data);  // we retrieve empty array from data.json now we need to push details but before add validations

        let found = data.find(ele => {   // in our database(data.json) we check whether the email aready exist or not
            // before the user registers the email otherwise there will two same emails in data.json. 
            ele.email == email
        })
        if(found) {
            throw chalk.red("user already exist")
        }
        data.push(userData)  // in  empty array data we push out object which have details now
        // now we need to write this array data which have details into out data.json file
        // but before we store we need to convert the strings in array to json format by json.stringyfy
        await fs.writeFile("data.json",JSON.stringify(data))



    

    }catch(error){
        console.log(error);
    }
}

// Iam exporing this function and i will import this in app.js and use in switch option 1 so if 
// I press 1 then this function runs and collects all the details and store them.
export default registerUser