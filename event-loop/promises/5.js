import axios from "axios"
console.time()
const githubUsers = ["TPAteeq", "saad5032", "haider0107", "samreen95", "Armaan34", "jayesh5236", "syedaejaz"]
let userData = []  // let if declared at top then canbe access anywhere


 
function hitgithub(username){
    return axios.get(`https://api.github.com/users/${username}`,{
        auth : {
            username : "saad5032",
            password : "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"
        }
    }) 
}  // this returns promise

const users = githubUsers.map((ele)=>hitgithub(ele));
// console.log(users);

Promise.all(users).then(res => {
    res.forEach(ele =>{
        let obj = {}
        obj.name = ele.data.name;
        obj.followers = ele.data.followers;
        obj.following = ele.data.following;
        userData.push(obj)
    })
    console.log(userData);
    console.timeEnd
}).catch(err => console.log(err))

