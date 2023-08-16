import axios from "axios";
import readLineSync from "readline-sync"


// 4e78cb801e4080b49b97ec31cb4297e3
// 7523885dc9b7a6be496f375b2d1df83a
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const ApiKey = "7523885dc9b7a6be496f375b2d1df83a"
async function main(){
    try{
        let cityName = readLineSync.question("Enter your city name : ")
        let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}`)
        console.log(res.data);
    }
    catch(err){
        console.log(err);
    }
}
main()