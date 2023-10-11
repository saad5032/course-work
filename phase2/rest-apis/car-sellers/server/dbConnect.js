import mongoose from "mongoose";

async function dbConnect() {
    try {
        await mongoose.connect('mongodb+srv://saad5032:aMp9BXSZVnHkQlRw@saad.x8weiwe.mongodb.net/cars');
        console.log("Mongo DB is connected")
    } catch (error) {
        console.log(error);
    }
  }

dbConnect()