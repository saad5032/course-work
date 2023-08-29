import express from "express";
import axios from "axios"

const app = express()
app.use(express.json()) // parses req.body to json object necessary for printing the body from client side - line14

//middlewares
const cb1 = (req,res,next)=>{
    //console.log(req);
    console.log("This is Call back 1 ");
    req.saad = "some value"
    next() // next function to go to another function such as cb2
}

const cb2 = (req,res,next)=>{
    //console.log();
    console.log("This is Call back 2 ");
    req.s = 88*2
    next()  // this goes to (req,res)=>{intro to get} function of get method
}

const callbacks = [cb1,cb2]

//endpoint / route / gateway 
//read from crud get mthod
app.get("/",callbacks,(req,res)=>{
    console.log("Intro to get");
    // console.log(req.headers);
    console.log("method:" +req.method);

    //console.log(req.body); dont request or fetch body in get method as it is only to aceess api instead use post
    // can not simulateously send twice like  - res.send(somethong) then in next line res.send(something)
    //res.send("This is from the server")
    // res.send("somthing") -> this line will throw error
    // also res.send in get method should not be used 
    
    console.log(req.saad);
    console.log(req.s);
    res.status(404).json({Error : "Error 404 not found"})

})

app.post("/",(req,res)=>{
    console.log("Post method is working");
    console.log(req.body);                            // app.post can recieve body
    res.send("This of from post route")  

})

app.get("/hello",(req,res)=>{
    console.log("second get");
    console.log(req.query);
    res.status(200).json({success : "hey there"})
})

app.get("/:user_id",async (req,res)=>{  // user_id is a keyword and is route 
    try{
        // you (server) fetch userid like saad5032 here from postman (client-side) using req.params 
        // then using axios.get you are fetching data from github api
        let response = await axios.get(`https://api.github.com/users/${req.params.user_id}`) 

        // you then print data in postman app i.e., client side
        console.log(response.data);
        res.status(200).json({success : response.data})
    }
    catch (err){
        console.log(err);
        res.status(500).json({Error : "Internal server error"})
    }
})

app.use("/*",(req,res)=>{
    console.log("This is some random route");
    res.status(400).json({info : "no end point here"})

})

app.listen(5001 , ()=>{
    console.log(`Server started at port : ${5001}`);

})



