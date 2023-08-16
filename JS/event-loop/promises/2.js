import axios from "axios";
import fs from "fs";


axios.get("https://jsonplaceholder.typicode.com/todos").then((res=>{
    // n

    const tasks = res.data.reduce((acc,curr) => {
        if (curr.completed){ 
            acc.complete.push(curr);  
        }
        else{
            acc.pending.push(curr)
        }
        return acc
    },
    {
        complete : [],
        pending :[]
    });

    

    fs.writeFile("completed.json",JSON.stringify(tasks.complete), (err) => {
        if (err) throw err;
        console.log("Successfully updated the email");
    })

    fs.writeFile("pending.json",JSON.stringify(tasks.pending), (err) => {
        if (err) throw err;
        console.log("Successfully updated the email");
    })




})).catch((err)=>console.log(err))