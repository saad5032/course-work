//
import axios from "axios"
console.time()
let sum1= []  // let if declared at top then canbe access anywhere

function hitgithub(num1,num2){
    return axios.get(`https://microfinance.progressi.studio/${num1}/${num2}`)
}
 // this returns promise

const promises = []
for (let i=0,j=5;i<=5,j<=10;i++,j++){
    promises.push(hitgithub(i,j))
    }  
Promise.all(promises).then(res => {
    res.forEach(ele=> {
    sum1.push(ele.data.success)
    });
    console.log(sum1);
    console.timeEnd()
    })
   
.catch(err => console.log(err))