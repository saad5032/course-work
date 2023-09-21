import mongoose from "mongoose";

async function dbConnect(){
    try{
        await mongoose.connect('mongodb+srv://saad5032:aMp9BXSZVnHkQlRw@saad.x8weiwe.mongodb.net/contact')
        console.log("mongo DB is connected");
    }catch(err){
        console.log(err);
    }
}

dbConnect()