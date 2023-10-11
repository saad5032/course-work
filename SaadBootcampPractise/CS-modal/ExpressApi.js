import express from "express"
import axios from "axios"

// making an instance of express to use its properties
const app = express()
// app.use make every req data parse from front end
app.use(express.json())




app.get("/:user", async(req,res)=>{    
    try {
        console.log(req.params.user)
        let responseGithub = await axios.get(`https://api.github.com/users/${req.params.user}`)
        console.log(responseGithub.data);
        res.status(200).json({success : responseGithub.data})
    } catch (error) {
        res.status(400).json({error : "Internal error"});
    }
})

app.listen(5001, ()=>{
    console.log(`server started at : ${5001}`);
})