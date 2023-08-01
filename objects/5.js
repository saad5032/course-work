/* write a function considering an object with only numberical values,return sum of values*/

let obj = {a:1,b:3,c:10,d:4,e:8}
function sumValues(obj){
    sum=0;
    for (key in obj){
        v = obj[key]
        sum+=v
    }
    console.log(sum);
}
sumValues(obj)