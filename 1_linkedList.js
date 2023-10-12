class Node {
    constructor (data) {
    this.data = data;
    this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;  
    }

    append(data) {
        let newNode =  new Node (data)
        if(!this.size) {
            this.head = newNode;
            this.size++;
        } else {
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = newNode;
            this.size++;
        }
        return this;
    }

    prepend(data) {
        let newNode =  new Node (data)
        if(!this.size) {
            this.head = newNode;
            this.size++;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.size++
         }
         return this 
    }

    getNodeByIndex(num) {
        if(!this.size) return "The list is empty"
        let index = 0;
        let current = this.head;
        while (index < num) {
            index++;
            current = current.next
        }
        return current
    }

    insert(data, index) {
        
        if(!this.size) return "The list is empty";
        if(this.size < index) return "The index is greater than length";

        let newNode =  new Node (data);

        let current = this.getNodeByIndex(index);

        newNode.next = current.next;
        current.next = newNode;
        this.size++;

        return this
    }
    removeAt(index) {
        if(!this.size) return "The list is empty";
        if(this.size < index) return "The index is greater than length";
        let current = this.getNodeByIndex(index-1);
        let deleted = current.next
        current.next = current.next.next;
        this.size--;
        return current;
    }
    remove(data){
        let current = this.head;
        
        while (current.next != null && current.data != data){
            console.log(data)
            current = current.next;
        }
        if (current.next !== null) {
            return false
        } else {
        const deleted = current.next
        current.next = current.next.next;
        this.size--;
        return deleted;

        }
    }
    getSize(){
        return this.size
    }

    isEmpty(){
        return !this.size;
    }

    printList(){
        let current = this.head;
        while(current.next != null){      
            current = current.next;
            console.log(current.data);
        }
        
    }

}

const list = new LinkedList();
console.log(list.append(1));
console.log(list.append(2));
console.log(list.append(3));
console.log(list.append(4));
console.log(list.append(5));
console.log(list.prepend(0));
console.log(list.getNodeByIndex(2));
console.log("Inserting element")
console.log(list.insert(12, 3));
list.printList(); 
console.log("Size:", list.getSize()); 
console.log("Removing element")
list.remove(2);
console.log("Removing element")
list.removeAt(2);
list.printList(); 
console.log("Size:", list.getSize()); 