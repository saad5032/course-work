arr = [-1,1,-5,-6,2,4,7,-19,9];
// give array of postive elements
// map is not good for this appraoch
var posArr = arr.map((ele,i)=>{
    if (ele>0) return ele
    else return
    
})
console.log(posArr);

var posArray = arr.filter((ele,i)=>{
    if (ele>0) return true
    else false
})



var words = ['spray' , 'limit' , 'elite' , 'exuberant' , 'destruction', 'present' , 'fascinating' , 'present']

var word6 = words.filter((ele,i)=>{
    if (ele.length > 6) return ele;
    else return
})
console.log(word6);

var foundword = words.findIndex(ele => ele == "present")
console.log(foundword);

