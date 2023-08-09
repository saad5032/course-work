// FIFO : First in First out
/*
Queue : enqueue, dequeue , front , rear , isEmpty , length
*/
import chalk from "chalk"
class Queue{
    constructor(length){
        this.queue = []
        this.length = length
    }
    enqueue(ele){
        if(this.queue.length === this.length){
            console.log(chalk.red("Queue is full"));
            return;
        }
        this.queue.push(ele)
    }
    dequeue(){
        if (this.isEmpty()){
            return}
        this.queue.shift()
       
    }
    front(){
        if (this.isEmpty()){
            return
        }
        console.log(this.queue[0])
    }
    rear(){
        if (this.isEmpty()) 
        console.log(this.queue[length-1]);
    }
    isEmpty(){
        if(this.queue.length==0){
            console.log(chalk.red("Queue is empty"))
            return true
        }
    }
    size(){
        console.log(this.queue.length);
    }
}

const obj = new Queue(5)
obj.enqueue(1)
obj.enqueue(2)
obj.enqueue(3)
console.log(obj);
obj.dequeue()
console.log(obj);
obj.front()
console.log(obj);
obj.rear()
console.log(obj);
obj.isEmpty()
console.log(obj);
obj.size()
console.log(obj);
