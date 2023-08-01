var wizards = [
    {
        name : "Harry Potter",
        house : "gryffindor",
    },
    {
        name : "Cedric Diggory",
        house : "hufflepuff",
    },
    {
        name : "Tonks",
        house : "hufflepuff",
    },
    {
        name : "Ronald Weasly",
        house : "gryffindor",
    },
    {
        name : "Hermione Granger",
        house : "gryffindor",
    },
];

// // more control but less optimization as logic has for loop
// arr = []
// for (var i=0;i<wizards.length ; i++){
//     console.log(wizards[i]);
//     if (wizards[i].house === "hufflepuff"){
//         arr.push(wizards[i].name)
//     }
    
// }
// // console.log(arr);

// var hufflepuff = wizards.reduce((acc,curr)=>{
//     if (curr.house =="hufflepuff"){
//         acc.push(curr.name)
//     }
//     return acc
// },[])

// var result = wizards.filter((ele) => ele.house==="hufflepuff").map((ele)=>ele.name);
// // console.log(result);

var points = {
    HarryPotter : 500,
    CedricDiggory : 750,
    RonaldWeasly : 100,
    HermioneGranger : 1270,
};



var housePoints = wizards.reduce((acc,curr)=>{
    // console.log(curr);
    // console.log(curr.name);
    // var name = curr.name.replace(" ","")
    var name = curr.name.split(" ").join("")

    if (points[name]){
        curr.point = points[name]
    }
    else{
        curr.point = 0
    }
    acc.push(curr)
    return acc
},[])

console.log(housePoints);






