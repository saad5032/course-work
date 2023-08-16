class Node{
    constructor(ele){
        this.element = ele;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
// add
    add(element){
        let node = new Node(element)
        if (this.head == null){
            this.head = node
        }
        else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++
    }


}
let LL = new LinkedList()
LL.add(3)
LL.add(4)
LL.add(5)
console.log(LL);
