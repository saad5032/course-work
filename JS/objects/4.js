/*
*/

let person = { name: "John", age: 30, address: { street: "Main St", city: "New York", state: "NY" } };

// my appraoch to get number of keys 
function countProperties(obj){
    counter=0;
    for (k in person){
        counter++   
    }
    // console.log(counter);  --> instead of console do return
    return counter
}
console.log(countProperties(person));
// sir approach
function countProp(obj){
    let keys = Object.keys(obj)
    return keys.length

}
console.log(countProp(person));
