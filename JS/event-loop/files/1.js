import fs from "fs";

function adduser(user){
    fs.readFile("data.json",(error,data)=>{
        if (error) throw error
        data = JSON.parse(data)  // data is in buffer formnat so you need to parse it using JSON.parse() method.
        // console.log(data);

        let found = data.find(ele => ele.email == user.email)
        if (found){ return console.log("email has already been registered");}

        data.push(user)

        fs.writeFile("data.json", JSON.stringify(data), (err)=>{
            if (err) throw err;
            console.log("Successfully added the user to data");

        })
    })

}

function deleteUser(email1){
    fs.readFile("data.json",(err,data)=>{
        if (err) throw err;
        data = JSON.parse(data)
        
        const filteredData = data.filter(ele =>ele.email !== email1)
        if (filteredData.length == data.length){
            return console.log("email user was not found");
        }

        fs.writeFile("data.json", JSON.stringify(filteredData), (err)=>{
            if (err) throw err;
            console.log("Successfully removed the user from data");

        })
    })
}

function editUser(email,newEmail){
    fs.readFile("data.json" ,(err,data)=>{
        if (err) throw err;
        data = JSON.parse(data)

        const editedData = data.map((ele)=>{
            if (ele.email == email){
                ele.email = newEmail
            }
           return ele;
        
        } 
        )
        /* sir approach 
        let found = data.find(ele => ele.email == email)
        if (!found){
            return console.log("email not found")
        }
        found.email = newEmail
        */

        fs.writeFile("data.json",JSON.stringify(editedData), (err) => {
            if (err) throw err;
            console.log("Successfully updated the email");
        })
    })

}




let user1 = {
    fname : "saad",
    lname : "syed",
    email : "syedsaaduddin@gmail.com",
    age : 25
}
let user2 = {
    fname : "ateeq",
    lname : "mohd",
    email : "mohdateeq@gmail.com",
    age : 25
}
//adduser(user2)
//editUser("syedsaaduddin@gmail.com","syed@code.in")
//deleteUser("syedsaaduddin@gmail.com")
