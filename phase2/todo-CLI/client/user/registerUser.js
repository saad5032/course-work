import chalk from "chalk";
import { questionNewPassword , question, questionEMail} from "readline-sync";
import bcrypt from "bcrypt"
import fs from "fs/promises"
import axios from "axios"
/* 
username
phone
email
adress
password
confirm password
*/
async function registerUser(){
    try{
        console.clear()
        console.log(`
    ====================================\n
    \tUser Register\n 
    ====================================`);

    let username = question("Enter your Username : ");

    while(!username){
        username = question("Please enter the username : " )
    }

    let email = question("Please enter your email : ")

    while(!email){
        email = question("Please enter your email : ")
    }

    let phone = question("Please enter your phone number : ")

    while(!phone){
        phone = question("Please enter your phone number : ")
    }

    let adress = question("Please enter your adress : ")

    while(!adress){
        adress = question("Please enter your adress : ")
    }

    // let password = questionNewPassword()
    // password = await bcrypt.hash(password,12)
    let password = question("Enter your password : ", {hideEchoBack : true})

    let confirmPassword = question("Enter your password again : ", {hideEchoBack : true})

    while (password !== confirmPassword) {
      console.log("Passwords don't match");
      password = question("Re-enter your password : ", { hideEchoBack: true });
      confirmPassword = question("Enter your password again : ", {
        hideEchoBack: true,
      });
    }



    let userData = {
        username,
        email,
        phone,
        adress,
        password,
        confirmPassword,
        todo : []
    }

    let res = await axios.post("http://localhost:5001/api/register",userData)

    // let data = await fs.readFile("data.json")
    // data = JSON.parse(data)
    // let found = data.find(ele => ele.email == userData.email)
    //     if (found){ return console.log("email has already been registered");}

    // data.push(userData)

    // await fs.writeFile("data.json",JSON.stringify(data))
        

    console.log("User registered successfully");

    } catch (error) {
    console.log(error);
  }
}
export default registerUser;


   