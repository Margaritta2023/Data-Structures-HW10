class Stack {
    constructor() {
        this.storage = []
    }
    push(elem) {
        this.storage.push(elem);
        return this.storage.length
    }
    pop(){
        if(this.storage.length === 0) return "There is nothing to pop, the stack is empty";
        let popped = this.storage.pop();
        return popped;
    }
    peek() {
        return this.storage[this.storage.length-1]
    }

    isEmpty(){
        return !(this.storage.length)
    }
    getSize(){
        return this.storage.length
    }

}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Should print 2
console.log(stack.peek()); // Should print 1
console.log(stack.isEmpty()); // Should print false
console.log(stack.getSize()); // Should print 1