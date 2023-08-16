// what is promise : it might return now or never
// axios : it is a javascript library used for api(link to data which is in JSSON format) call so you can fetch data from any http site using axios method 

// consume the promise

import axios from "axios";

// let data = axios.get("https://jsonplaceholder.typicode.com/users")
// console.log(data);  // promise

console.time()
axios.get("https://jsonplaceholder.typicode.com/users").then((res => { // api is a special link which has data in json format to perform array or other manipulations
    console.log(res.data);
    console.timeEnd()
})).catch(err => console.log(err))


