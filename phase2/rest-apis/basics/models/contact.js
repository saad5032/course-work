import mongoose from "mongoose";


const contactSchema = new mongoose.Schema({
    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true
    },
    data : {
        type : String
    },
    address : {
        houseNo : {
            type: String
        },
        city : {
            type: String
        },
        state : {
            type: String
        },
        postcode : {
            type: Number
        },
    }

})

// schema --> model --> 

export default mongoose.model("ContactModel",contactSchema,"contacts")