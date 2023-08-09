// FILO - first in last out
/*
stack - push,pop,peak,isempty,length
*/

import chalk from "chalk";

class Stack{
    constructor(length){
        this.stack = [];
        this.length = length;
    }
    firstIn(ele){
        if(this.stack.length === this.length){
            console.log(chalk.red("stack is full"));
            return;
        }
        this.stack.push(ele)
    }
    lastOut(){
        if (this.isEmpty()){
            return;
        }
        this.stack.pop()
    }
    peak(){
        if(this.isEmpty()){
            return
        } else {
        // console.log(chalk.green("The peak element in the stack : ")+chalk.yellow(this.stack.at(-1)))
        return this.stack.at(-1)}
    }
    isEmpty(){
        if(this.stack.length==0){
            // console.log(chalk.blue("Stack is empty"));
            return true
        } else {
            return false
        }
    }
    size(){
        console.log(chalk.green("Stack present size : ")+chalk.yellow(this.stack.length))
    }
}

export default Stack

// let obj = new Stack(4)
// obj.firstIn(2)
// obj.firstIn(3)
// obj.firstIn(4)
// obj.firstIn(5)

// // console.log(obj);
// obj.lastOut()
// console.log(obj);

// obj.peak()
// obj.size()




