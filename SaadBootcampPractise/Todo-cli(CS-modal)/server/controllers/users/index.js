import express  from "express";
import fs from "fs/promises"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const router = express.Router()
// Making a user router, so the logic we written for user register, login in client side will come here as
// we have made a api request on client side which directs here



router.post("/register",async(req,res)=>{
    try {
        // this req has userData = {username,email,password,phone,address,todo : [] from client-User-register.js as the route 
        // for this end point is defined in register.js

        
        // The req has many fields. The req body an object field has all these things 
        // To extract values from these keys of the body object  we do the following example : {email} = req.body
        // the email is the key of the body object and email now also has become the variable to store the value.
        // we can use this variable email to print or store this variable again in a array or object any where in the code
        let {username,email,password,confirmPassword,phone,address} = req.body  // destructuring req.body

        if(password!== confirmPassword){
            // in try block i will be having these kind of validations again and need to send res , but sending res twice
            // will give me an error. Therefore i (return) the res here i.e., when this if statement runs and is not true
            // it wont return the res. if it is true then it returns and do not executes the code below.
            return res.status(400).json("Passwords dont match")
        }

        // now if you console.log(email) -> you can get the email

       password = await bcrypt.hash(password,12)   // await will execute this line completely then go to next line.
       //hashing for 12 salt rounds and higher the rounds the more secure is the password



         // right now data.json is an empty array so we just retrieve that empty array.
        // To do that we need to read data.json and parse it . Always when retrieve we parse

        // To read import fs model and to use async await with fs model do fs/promises
        let data = await fs.readFile("data.json")
       // console.log(data);  // we get promise we need to parse it
        data = JSON.parse(data)
        // console.log(data);  // we retrieve empty array from data.json now we need to push details but before add validations

        // All the des
        let userSignUpInfo = {
            username,   // username key already has a value stored inside same for everything.
            email,
            password,
            phone,
            address,
            todo : []
        }

        let found = data.find(ele => {   // in our database(data.json) we check whether the email aready exist or not
            // before the user registers the email otherwise there will two same emails in data.json. 
            ele.email == email
        })
        if(found) {
            return res.status(400).json({error:"User already exists"})
        }
        data.push(userSignUpInfo)  // in  empty array data we push out object which have details now
        // now we need to write this array data which have details into out data.json file
        // but before we store we need to convert the strings in array to json format by json.stringyfy
        await fs.writeFile("data.json",JSON.stringify(data))

        res.status(200).json({success : "User has been successfully registered"}) 
        
    } catch (error) {
        res.status(400).json({error : "Internal error"});
    }
  
})

router.post("/login",async(req,res)=>{
    
    try {
    
        let {email,password} = req.body

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
            res.status(400).json("User not found in data.json")
        }

        // lets says user has entered correct email, but lets also check his password with the password in our database(data.json)
        let passwordFound = await bcrypt.compare(password,emailFound.password)
        if(!passwordFound){
            return res.status(400).json({error:"Passwords do not match"})
        }

        // After knowing that it is the user who is logging in with his email and password.
        // we verify as well by generating a token and sending that token to user as his/her unique passcode so that he can verify himself

        // go to jwt.io
        // jwt token has 3 parts : 1) jwt algorithm 2) after dot its payload(Payload is the data i create in server)
        // 3) Then comes verfiyy signature (in which you enter a secret key which is unique to your own server)
        // It is the responsibility of the key to either encrypts the data or decrypts

        // payload can have any kind of data
        const payload = {email : emailFound.email, password : emailFound.password}

        //key unique to my server
        const privateKey = "TheHackingSchool"

        // jwt algo taking two parameters to create token. Also you can set up the expiration of token 
        const token = jwt.sign(payload,privateKey,{expiresIn:"1d"})


        // we sent the token to user
        res.status(200).json({success : "User is authentic", token})
    } catch (error) {
        res.status(400).json({error : "Internal error"});
    }
})

export default router