class Queue {
    constructor() {
        this.storage = []
    }
    enqueue(elem) {
        this.storage.push(elem);
        return this.storage.length
    }
    dequeue() {
        if(this.storage.length === 0) return "There is nothing to dequeue, the queue is empty";
        let popped = this.storage.shift();
        return popped;
    }

    front() {
        return this.storage[0]
    }

    isEmpty(){
        return !(this.storage.length)
    }
    size(){
        return this.storage.length
    }

    print(){
        this.storage.forEach(item => console.log(item))  
    }
}

const queue = new Queue();
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.print()); // Output: 1 2 3
console.log("Front element: " + queue.front()); // Output: Front element:1
console.log(queue.dequeue());
console.log(queue)
console.log(queue.print()); // Output: 2 3
console.log("Queue size: " + queue.size()); // Output: Queue size: 2