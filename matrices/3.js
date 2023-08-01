import printMatrix from "./2.js"

import { questionInt } from "readline-sync";

    function userMatrix(){
        var rows = questionInt("Enter number of rows : ")
        var columns = questionInt("Enter number of columns : ")

       
        var matrix =new Array(rows)          // this will make [ - , - , - ] as row is 3 size of matrix array is 3
        for (var i=0 ; i<rows ; i++){
            matrix[i] = new Array(columns)  /* a new array of size 3 (as column is 3) is gonna built up at 3 different positions matrix[0],
                                                            matrix[1] and matrix[2] so its look like [ [-,-,-] , [-,-,-] ,[-,-,-] ]*/
    
                for (var j=0 ; j<columns ; j++ ){
                matrix[i][j] = questionInt(`Please enter element of position ${i} ${j} : `)
                }
            }
        return matrix
    }
export default userMatrix


