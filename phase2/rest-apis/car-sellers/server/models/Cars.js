import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    carModel: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    seller: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "SellerModel"
    }
});

export default mongoose.model("CarModel", carSchema, "cars");