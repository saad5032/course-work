import axios from "axios";

// run a for-loop with two iterators and use the  api to get their sum 

for (let i=0,j=5;i<=5,j<=10;i++,j++){
    console.log(i,j);
    axios
    .get(`https://5938-49-204-22-28.ngrok-free.app/${i}/${j}`)
    .then((res)=>{
    // console.log(res.data);
    console.log(res.data);
    })
    .catch((err) => {console.log(err)})
}

