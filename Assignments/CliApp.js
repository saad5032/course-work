
const capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const small = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '!@#$%&*'
// console.log(weak.charAt(0));


function weakpassword(length){
    let PassWord="";
    for (var i=0;i<length;i++){
        if (i<=Math.floor(length/2)){
        PassWord+=capital.charAt(Math.floor(Math.random()*capital.length))}
        else {
        PassWord+=small.charAt(Math.floor(Math.random()*small.length))}
        }
        return PassWord;
    }


function strongpassword(length){
   
    let PassWord2=""
    for (var i=0;i<length;i++){
    if (i==0 || i==1 || i==2){
        PassWord2+=capital.charAt(Math.floor(Math.random()*capital.length))}
    else if(i==3 || i==4 || i==5){
        PassWord2+=small.charAt(Math.floor(Math.random()*small.length))}
    else {
        PassWord2+=numbers.charAt(Math.floor(Math.random()*numbers.length))}
    }
    return PassWord2;
}


function veryStrongPassword(length){
    let PassWord3=""
    for (var i=0;i<length;i++){
    if (i==0 || i == 1){
        PassWord3+=capital.charAt(Math.floor(Math.random()*capital.length))}
    else if(i==2 || i==3){
        PassWord3+=small.charAt(Math.floor(Math.random()*small.length))}
    else if (i==4 || i==5){
        PassWord3+=numbers.charAt(Math.floor(Math.random()*numbers.length))}
    else if (i==6 || i==7){
        PassWord3+=symbols.charAt(Math.floor(Math.random()*symbols.length))}}
        return PassWord3;
    }
  


import { questionInt } from "readline-sync"
import chalk from "chalk"

function main(){
    console.log(chalk.red("*************************************************"));
    console.log("\t CLI-APPLICATION FOR PASSWORD ");
    console.log(chalk.red("*************************************************"));

    console.log(`
    Press 1 for weak password\n
    Press 2 for strong password\n
    Press 3 for very strong password\n`);
    

let option = questionInt(chalk.green("Enter the option you want to select : \n"))
let l = questionInt(chalk.green("Enter the length for your password : \n"))

switch(option){
    case 1 :
    if (l>=8){
        let password1 = weakpassword(l)
        console.log(chalk.red("Weak password : \n")+password1);}
    else {
        console.log(chalk.red("Password cannot be generated"));
    }
    break;

    case 2 :
    if (l>=8){
        let password2 = strongpassword(l)
        console.log(chalk.red("Strong password : \n")+password2);}
    else {
        console.log(chalk.red("Password cannot be generated"));
    }
    break;

    case 3 :
    if (l>=8){
        let password3 = veryStrongPassword(l)
        console.log(chalk.red("Strong password : \n")+password3);}
    else {
        console.log(chalk.red("Password cannot be generated"));
    }
    break;    
}

}
main()





