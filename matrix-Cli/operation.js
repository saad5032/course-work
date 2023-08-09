import { questionInt } from "readline-sync";
import chalk from "chalk";
function printMatrix(matrix){

    if (!matrix){
    console.log("wrong matrix value to be printed");
    return
    }

for (var i=0;i<matrix.length;i++){
    var str = ""
        for (var j=0;j<matrix[i].length;j++){
            // console.log(matrix[i][j]);
            str = str + matrix[i][j] + "\t"
        }
        console.log(str);
    }
}

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

function addMatrices(m1,m2){
    if ( m1.length !== m2.length || m1[0].length !== m2[0].length){
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

function diagonalMatrix(matrix){

    if (matrix.length !== matrix[0].length){  // rows != columns
        console.log("It is not a square matrix");
        return
    }
    var m = new Array(matrix.length)
    for (var i=0; i<matrix.length ; i++){
        m[i]=new Array(matrix[0].length)
        for (var j=0 ; j< matrix[0].length ; j++ ){
            if (i==j){
                m[i][j]=chalk.red(matrix[i][j])
            }
            else {
                m[i][j] = chalk.blue(matrix[i][j])
            }
        }
    }
    return m;
}

export {printMatrix,userMatrix,addMatrices,diagonalMatrix,constantMultiplication,matrixMultiplication}

function constantMultiplication(matrix,constant){
    var m = new Array(matrix.length)
    for (var i=0; i<matrix.length ; i++){
        m[i] = new Array(matrix[0].length)
        for (var j=0 ; j<matrix[0].length ; j++){
            m[i][j]=matrix[i][j]*constant
        }
    }
    return m;
}

function matrixMultiplication(m1 , m2){
    var m = new Array(m1.length)
    for (var i=0;i<m1.length;i++){
        m[i] = new Array(m1[0].length)
        for (var j=0;j<m[0].length;j++){
            //m[i][j]=
        }
    }
    return m;
}