// what is promise : it might return now or never
// axios : it is a javascript library used to send and receive http request so you can fetch data from any http site using axios method 

// consume the promise

import axios from "axios";

// let data = axios.get("https://jsonplaceholder.typicode.com/users")
// console.log(data);  // promise

console.time()
axios.get("https://jsonplaceholder.typicode.com/users").then((res => {
    console.log(res.data);
    console.timeEnd()
})).catch(err => console.log(err))


