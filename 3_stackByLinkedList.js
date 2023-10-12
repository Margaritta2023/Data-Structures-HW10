class Node {
    constructor (data) {
    this.data = data;
    this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;  
    }

    push(data) {
        let newNode =  new Node (data)
        if(!this.size) {
            this.top = newNode;
            this.size++;
        } else {
            newNode.next = this.top
            this.top = newNode;
            this.size++;
        }
        return this.size;
    }

    pop(){
        let popped = this.top;
        this.top = popped.next;
        this.size--;
        return popped.data;
    }
    peek(){
        return this.top.data
    }
    getSize(){
        return this.size
    }

    isEmpty(){
        return !this.size;
    }

   

}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Should print 2
console.log(stack.peek()); // Should print 1
console.log(stack.isEmpty()); // Should print false
console.log(stack.getSize()); // Should print 1