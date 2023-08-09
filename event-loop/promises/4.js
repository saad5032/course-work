import axios from "axios"
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

githubUsers.forEach((ele,i)=>{
    hitgithub(ele).then(res=>{
        console.log(res.data.followers , ele , i);
        let obj = {}
        obj.name = res.data.name;
        obj.followers = res.data.followers;
        obj.following = res.data.following;

        userData.push(obj)
    }).catch(err => {console.log(err)})
})

setTimeout(() => {
    console.log(userData);   // we are printing the asynchronous data i.e., userdata from .then() method so we need to use setimeout 
}, 5000);  // bad habit

