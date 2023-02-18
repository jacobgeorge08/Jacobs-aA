// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // All methods for dLL are O(1)
        // Write your hypothesis on the time complexity of this method here
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

    }

    removeFromHead() {
        if (this.length == 0) {
            return undefined;
        }
        if (this.length == 1) {
            let shifted = this.head
            this.head = null;
            this.tail = null;
            this.length--;
            return shifted.value;
        }
        let shifted = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
        return shifted.value;

    }

    removeFromTail() {
        if (this.length == 0) {
            return undefined;
        }
        if (this.length == 1) {
            let shifted = this.tail
            this.head = null;
            this.tail = null;
            this.length--;
            return shifted.value;
        }
        this.length--;
        let popped = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        popped.prev = null;
        return popped.value;
    }

    peekAtHead() {
        return this.length == 0 ? undefined : this.head.value;
    }

    peekAtTail() {
        return this.length == 0 ? undefined : this.tail.value;
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
