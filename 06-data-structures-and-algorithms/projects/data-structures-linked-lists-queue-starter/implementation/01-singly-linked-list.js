class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const node = new SinglyLinkedNode(val);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this
        // Time complexity of O(1)
    }

    addToTail(val) {
        // Time complexity of O(n)
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        }

        else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.length++;
        return this
    }

    removeFromHead() {
        if (this.length == 0) {
            return undefined
        }
        let shifted = this.head;
        this.head = this.head.next;
        this.length--;
        return shifted;
        // Time complexity of O(1)
    }

    removeFromTail() {
        if (this.length == 0) {
            return undefined
        }
        if (this.length == 1) {
            let popped = this.head;
            this.head = null;
            this.length--
            return popped;
        }
        else {
            let current = this.head
            while (current.next.next) {
                current = current.next
            }
            let popped = current.next;
            current.next = null;
            this.length--
            return popped;
        }

        // Time complexity of O(n)
    }

    peekAtHead() {
        if (this.length == 0) {
            return undefined;
        }
        if (this.length >= 1) {
            return this.head.value;
        }
        // Time complexity of O(1)
    }

    print() {
        // Print out the linked list
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
        // Time complexity of O(n)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
