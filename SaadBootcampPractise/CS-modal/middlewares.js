import express from "express"

// making an instance of express to use its properties
const app = express()
app.use(express.json())

const cb1 = (req,res,next)=>{
    console.log("This is call back 1");
    // the req already has a lot of data from clent like body,params,headers in a object
    // In this req let us set up a new custom field like below
    req.saad  = "hi"
    next()
    // the req with complete cb1 constrol is shifted to cb2
}

const cb2 = (req,res,next)=>{
    console.log("This is call back 2");
    // here req has all the data with extra field we added in cb1 i.e., req.saad
    //lets add another field to req packet
    req.num  = 8+9
    next()
    // To shift cb1 and cb2 to app.get(req,res)=>{...} let use array
}

const arr = [cb1,cb2]



app.get("/",arr,(req,res)=>{    
    // this req has all data from client(postman), with extra field added in cb1 (req.saad) and other ectra field added in cb2
    // (req.num)
    console.log("this is continue of app.get after cb1,cb2 execution");
    
    console.log(req);
    // if you search the output of this req, you will find the two fields, saad and num added by cb1 and cb2
    // you can know by just printing that fiels using req
    console.log(req.saad);
    console.log(req.num);
    res.status(200).json({msg : "The req is recieved at srever"});

})

app.listen(5001, ()=>{
    console.log(`server started at : ${5001}`);
})