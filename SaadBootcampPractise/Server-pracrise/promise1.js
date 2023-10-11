import axios from "axios"

axios
.get("http://localhost:5001/3/4")
.then((res)=>{
    console.log(res.data.success)
}).catch((err)=>{
    console.log(err);
})