const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
let ll = new LinkedList();
let dLL = new DoublyLinkedList();

let n = 100000;

//ll add to head
let llTimer1 = Date.now()
for (let i = 0; i < n; i++) {
  ll.addToHead(i)
}
let llTimer2 = Date.now()

console.log(`Adding to head for a singly linked list takes ${llTimer2 - llTimer2}ms`)

//ll add to tail
let llTimer3 = Date.now()
for (let i = 0; i < n; i++) {
  ll.addToTail(i)
}
let llTimer4 = Date.now()

console.log(`Adding to tail for a singly linked list takes ${llTimer4 - llTimer3}ms`)

//dLL add to head
let dllTimer1 = Date.now()
for (let i = 0; i < n; i++) {
  dLL.addToHead(i)
}
let dllTimer2 = Date.now()

console.log(`Adding to head for a doubly linked list takes ${dllTimer2 - dllTimer1}ms`)

//dll add to tail
let dllTimer3 = Date.now()
for (let i = 0; i < n; i++) {
  dLL.addToTail(i)
}
let dllTimer4 = Date.now()

console.log(`Adding to tail for a doubly linked list takes ${dllTimer4 - dllTimer3}ms`)
