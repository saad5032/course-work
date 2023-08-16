import chalk from "chalk";
import { questionInt } from "readline-sync";
import { userMatrix,printMatrix,addMatrices,diagonalMatrix,constantMultiplication, matrixMultiplication} from "./operation.js"

function main(){
    console.log(chalk.green("*****************************"));
    console.log('\t MATRIX CLI ');
    console.log(chalk.green("*****************************"));

    console.log(`
    Press 1 to perform matrix addition \n
    Press 2 to find diagonals for a matrix \n
    Press 3 to perform matrix multiplication \n
    Press 4 to find determinant of the matrix \n
    Press 5 to multiply a matrix with a constant \n
    Press 6 to find transpose of a matrix\n
    Press 0 to exit \n`);

    var option = questionInt("Enter the operation you want to perform : ")

    switch(option){
        case 0:
            console.log('Thankyou for using CLI. BYE!')
            return
        case 1:
            var m1= userMatrix() 
            var m2 =userMatrix()
            var result = addMatrices(m1,m2)
            console.log('The matrix addition result : ');
            printMatrix(result);
            break;
        case 2:
            console.log("Diagonal matrix is : ");
            var m = userMatrix()
            var result = diagonalMatrix(m)
            console.log("The diagonal matrix result : ");
            printMatrix(result)
            break;
        case 3:
            console.log("The multiplication of given matrices is : ");
            var m1 = userMatrix()
            var m2 = userMatrix()
            var result = matrixMultiplication(m1,m2)
            console.log("Result of multiplication of two matrices : ");
            printMatrix(result)
            break;
        case 4:
            console.log("Determinant of given matrix is : ");
            break;
        case 5:
            console.log("Multiply the constant with given matrix : ");
            var m = userMatrix();
            var c = questionInt("Enter the number you want to multiply the matrix with : ")
            var result = constantMultiplication(m,c)
            console.log("The matrix multiplication result : ");
            printMatrix(result)
            break;
        case 6:
            console.log("Tranpose of a given matrix is : ");
            break;    
    }
}

main()