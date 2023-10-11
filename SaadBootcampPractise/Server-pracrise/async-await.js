import axios from "axios"

const sum = []

async function summ(){
    try{
        // using api i made in index.js server to sum 
        for (let i=0,j=0 ; i<5,j<5 ; i++ , j++){
        const res = await axios.get(`http://localhost:5001/${i}/${j}`)
        console.log(res.data.success)
        sum.push(res.data.success)
        }
        console.log(sum);
    }

    catch(err){
        console.log(err);
    }
}

summ()