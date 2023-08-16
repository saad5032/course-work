//
import axios from "axios"
console.time()


function hitgithub(num1,num2){
    return axios.get(`https://microfinance.progressi.studio/${num1}/${num2}`)
}
 // this returns promise

const promises = []
for (let i=0,j=5;i<=5,j<=10;i++,j++){
    promises.push(hitgithub(i,j))
    }  

async function main(){
    try{
        let sum1= [] 
        let res = await Promise.all(promises)  // res is array of consumed promises. Promise.all() is used to conume the promises
        res.forEach((ele)=>{
            sum1.push(ele.data.success)
        })
        console.log(sum1);
        console.timeEnd()
    }
    catch(err){
        console.log(err);
    }
}
main()
   
// you need to use Promise.all when the api call are independent of each other 
// thus 15.js , 16.js are far better approach then 14.js. note the time durations of these three programs.
