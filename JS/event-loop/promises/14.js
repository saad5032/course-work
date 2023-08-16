import axios from "axios";

// run a for-loop with two iterators and use the  api to get their sum 
console.time("block 1")
async function sum(){
    try{
        let arr= []
        for (let i=0,j=5;i<=5,j<=10;i++,j++){
        let res = await axios.get(`https://microfinance.progressi.studio/${i}/${j}`)
        arr.push(res.data.success)
        }   
        console.log(arr);
        console.timeEnd("block 1")
    }
    catch (err){
    console.log("errorsss");
    console.log(err)
    }
}
sum()


