// Take 2 matrices as input, validate their addition capability, output the addition

import userMatrix from "./3.js";
import printMatrix from "./2.js";

var m1 = userMatrix()
printMatrix(m1)
var m2 = userMatrix()
printMatrix(m2)

// function addMatrix(){
// var addedMatrix = new Array(m1.length)
// for (var i=0 ; i<m1.length ; i++){
//     addedMatrix[i] = new Array(m1.length)
//     for (var j=0 ; j<m1.length ; j++){
//         addedMatrix[i][j]=m1[i][j]+m2[i][j]
//     }
// }
// printMatrix(addedMatrix)
// }
// addMatrix()


function addMatrices(m1,m2){
    if (
        m1.length !== m2.length || m1[0].length !== m2[0].length
    ){
        console.log("your matrices are of different orders");
        return null
    };
   

    var m3 = new Array (m1.length)
    for (var i=0; i< m1.length ; i++){
        m3[i]= new Array (m1[0].length) 
        for (var j=0; j< m1[0].length ; j++){
            m3[i][j] = m1[i][j]+m2[i][j]
        }
    }
    return m3;
}
console.log("added matrix is");
var m3 = addMatrices(m1,m2)
printMatrix(m3)






