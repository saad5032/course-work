// Two sum 
// [2,7,11,15]  add any two nos from this and get reuslt 9

let a1 = [2,7,11,15]
let t1 = 9
let a2 = [1,2,3,4,5]
let t2 = 5
function twoSum(arr,target){
    let output=[]
    for (let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            let result = arr[i]+arr[j]
            if(result == target){
                output.push([i],[j])
            }

        }
    }
    return output
}
console.log("output for first array : "+twoSum(a1,t1))
console.log("output for second array : "+twoSum(a2,t2));
