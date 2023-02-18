const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        const node = new SinglyLinkedNode(val)

        if (this.length == 0) {
            this.head = node;
            this.tail = node;
            this.length++
        }
        else {
            this.tail.next = node;
            this.tail = node;
            this.length++
        }
        return this.length;
        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if (this.length == 0) {
            return null;
        }
        else
            if (this.length === 1) {
                const shifted = this.head;
                this.head = null;
                this.tail = null;
                this.length--;
                return shifted.value
            }
            else
                if (this.length > 1) {
                    const shifted = this.head;
                    this.head = this.head.next;
                    this.length--;
                    return shifted.value;
                }
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
