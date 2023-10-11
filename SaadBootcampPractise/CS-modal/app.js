import express from "express"

// making an instance of express to use its properties
const app = express()
app.use(express.json())
// it is also a middle. It parses req.body to JSON object

// making a middle ware cbl 
const cb1 = (req,res,next)=>{
    console.log(req);
    console.log("hi bro");
    next()  // next is miidleware function, if i dont use next here then callback(req,res)=>{} of app.get function wont be executed
}

// lets define a route or endpoint in server. At this endpoint or home route ("/") if 
// matches with route defined in browser url or postman(/), the call back in app.get is executed and 
// then request(request can in form of data as well) from postman/browser is stored in (req) parameter defined by us in call back.
app.get("/",cb1,(req,res)=>{    
    // All the lines are executed syncrounously

    // console.log("hi");
    // this hi if executed in terminal (server), means the request was succeesfully sent by postman/browser as call back in app.get 
    // is executed only when request is received.

    //console.log(req); // As i hit send button from postman, the data from postman is stroed in req
    // res.send("This is from server")  
    // console.log("bye");
    console.log("hi");
    console.log(req.headers);  // we will get the source from where the req was sent to server
    console.log(req.method);
    console.log(req.body);
    res.status(200).json({msg : "The req is recieved at srever"});

})

app.post("/",(req,res)=>{
    // console.log(req.body);
   // res.send({error: "Not found"})  // --> if you send the error in this way then status wont be in 400 ranger which is bad.
    res.status(404).json({error : "This is not found error"})  // if you see postman, it has status 404 showing with error msg.
})


app.get("/hello",(req,res)=>{
    console.log("hi, its hello route");
    // define query in postman and we can receive here by req.query
    // in postman do /home?fname=saad%20syed   -->this %20 (20 in hexa is 32)  means space number system
    // the o/p of req.query here will be, object and inside its query -> {name: 'saad syed'}
    console.log(req.query);
    res.status(200).json({success : "hey there"})
})

// I am accepting req sent via delete comedy 
// the path in postman is  http://localhost:5001/comedy but i am accepting this route via "/*" , * means anything
app.delete("/*",(req,res)=>{
    console.log("haha");
    res.status(200).json({msg : "received"})
})

// i dont what method is used in postman to send the req, but i cann access that req using app.use (use method of express)
// alaways utilize app.use at the end 
app.use("/",(req,res)=>{
    console.log("here");
    console.log(req.method); // this shows method used by postman
    res.status(200).json({msg : "received"})

})



// app.listen takes two parameters port(5001)  beacause of which the connection b/w postman/browser and server(app.js) is formed.
// Then only the req and res cycle is formed
app.listen(5001, ()=>{
    console.log(`server started at : ${5001}`);
})
