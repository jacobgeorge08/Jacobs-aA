// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        // Impleneted in O(n) time. Can be implemented in O(1) by using a length variable in the constructor
        let length = 0;
        let current = this.head;
        while (current) {
            length++;
            current = current.next;
        }
        return length;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = 0;
        let current = this.head;
        while (current) {
            sum += current.value
            current = current.next
        }
        return sum;
        // Write your hypothesis on the time complexity of this method here
        //O(n) since gotta traverse through all elements
    }

    averageValue() {
        // Returns the average value of all the nodes
        return this.sumOfNodes() / this.listLength();
        // Write your hypothesis on the time complexity of this method here
        // O(n) time complexity since sum and length are O(n)
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let nodeNo = 0;
        let current = this.head
        while (nodeNo < n) {
            current = current.next
            nodeNo++;
        }
        return current;
        // Write your hypothesis on the time complexity of this method here
        // O(n) time complexity
    }

    findMid() {
        // How do the implementation for singly and doubly vary if at all?
        let length = this.listLength();
        let mid = length % 2 == 0 ? (length / 2) - 1 : Math.floor(length / 2)
        return this.findNthNode(mid)
        // Write your hypothesis on the time complexity of this method here
        // o(n)
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let reversed = new SinglyLinkedList();
        let length = this.listLength()
        for (let i = length - 1; i >= 0; i--) {
            let node = this.findNthNode(i);
            reversed.addToTail(node.value)
        }
        return reversed;
        //O(n^2) time complexity
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let current = this.head;
        let previous = null;

        while (current) {
            if (current.next === null) { this.head = current }
            let next = current.next;
            current.next = previous
            previous = current;
            current = next;
        }
        return this;
        // Write your hypothesis on the time complexity of this method here
        // O(n) complexity
    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?
        let front = this.head;
        let back = this.tail;

        while (front !== back && front.next !== back) {
            front = front.next;
            back = back.prev;
        }

        return front;
        // Write your hypothesis on the time complexity of this method here
        // 0(n) complexity
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let reversed = new DoublyLinkedList();
        let current = this.tail
        while (current != null) {
            reversed.addToTail(current.value)
            current = current.prev;
        }
        return reversed;
        // Write your hypothesis on the time complexity of this method here
        // O(n) complexity
    }


    reverseInPlace() {
        // Reverses the linked list in-place
        let current = this.tail;
        this.head = current;
        while (current) {

            let oldPrev = current.prev;
            let oldNext = current.next;

            current.next = oldPrev;
            current.prev = oldNext;

            current = current.next;
        }
        this.tail = current;
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
