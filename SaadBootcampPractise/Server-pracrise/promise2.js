import axios from "axios"


for (let i=0,j=0 ; i<5,j<5 ; i++ , j++){
    axios
.get(`http://localhost:5001/${i}/${j}`)
.then((res)=>{
    console.log(res.data.success)
}).catch((err)=>{
    console.log(err);
})

}