import express from "express"
import "./dbConnect.js"
import CarModel from "./models/Cars.js"
import SellerModel from "./models/Sellers.js"

const app = express() // Instantition

const port = 5001;

app.use(express.json()) // Body Parser

app.get("/", (req, res) => {
    res.status(200).json({success : "Hello there"})
})

/* 
    API : /seller/signup
    Method : POST
*/
app.post("/api/seller/signup" , async (req,res)=>{
    try {
        const seller = new SellerModel(req.body);
        await seller.save();
        res.status(200).json({success : "Seller added to DB"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
})

/*
    API : /cars/add/
    Method : POST
*/

app.post("/api/cars/add" , async ( req, res )=>{
    try {
        const { seller } = req.body;
        const car = new CarModel(req.body)
        // const sellerObj = await SellerModel.findOne({ _id : seller})
        const sellerObj = await SellerModel.findById(seller)
        sellerObj.cars.push(car._id);
        await sellerObj.save()
        await car.save()
        res.status(200).json({success : "Car Added to the DB"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
})

app.get('/api/cars' , async (req,res)=>{
    try {
        // const carData = await CarModel.find({seller : "6510e2a600d36d3cd83969f9"}, "-_id -__v")
        const carData = await CarModel.find({}, "-_id -__v").populate("seller", "-_id -__v -cars")

        console.log(carData);
        res.status(200).json({success : 'data fetched' , carData})
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
})




app.listen(port, () => {
    console.log(`Server started at ${port}`)
})