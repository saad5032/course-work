import axios from "axios";
import readLineSync from "readline-sync"

console.time()
const num1 = readLineSync.questionInt("enter 1st num : ")
const num2 = readLineSync.questionInt("enter 2nd num : ")



axios
    .get(`https://5938-49-204-22-28.ngrok-free.app/${num1}/${num2}`)
    .then((res)=>{
        const sum1 = res.data.success
        console.log(sum1);
        const num3 = readLineSync.questionInt("enter 3rd num : ")
   
    axios
        .get(`https://5938-49-204-22-28.ngrok-free.app/${num3}/${sum1}`)
        .then((res)=>{
        const sum2 = res.data.success
        console.log(sum2);
        const num4 = readLineSync.questionInt("enter 4th num : ")
     
        axios
            .get(`https://5938-49-204-22-28.ngrok-free.app/${num4}/${sum2}`)
            .then((res)=>{
            const sum3 = res.data.success
            console.log(sum3);
            console.timeEnd()
            })
    .catch(err =>{console.log(err)})
        })
    .catch(err => {console.log(err);})

.catch(err => {console.log(err);})
})


