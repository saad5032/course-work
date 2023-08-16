// var matrix = [
// [1,2,3],
// [2,4,8],
// [10,20,30]
// ]

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
// printMatrix()

export default printMatrix





