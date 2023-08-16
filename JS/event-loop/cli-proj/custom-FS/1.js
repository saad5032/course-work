import fs from "fs";


// function adduser(){
//     fs.readFile("data.txt",(error,data)=>{
//         if (error) throw error
//         // data is in buffer formnat so you need to parse it using JSON.parse() method but the data.txt is not in JSON format so just use tostring() method
//         console.log(data.toString());
//     })

// }
// adduser()

function readFile(filename){
    return new Promise((resolve,reject)=>{
        fs.readFile(filename,(error,data)=>{
            if (error) reject (error)
            resolve(data.toString())
        }) 
    })
}
console.log(readFile("data.txt"));

async function main(){
    try{
        let res = await readFile("data.txt")
        console.log(res);
    }
    catch (err){
        console.log(err);
    }
}
main()


