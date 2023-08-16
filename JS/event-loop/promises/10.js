import axios from "axios";

async function hitapi(){
    try{
        // await keyord waits till the promise get resolved thus converting asyncronous statements to syncronous 
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        // console.log(res); // to print entrie data
        res.data.forEach(element => {
            console.log(element.username);
        });
    }
    catch (err) {
        console.log("error block");
        console.log(err);
    }
}

hitapi()