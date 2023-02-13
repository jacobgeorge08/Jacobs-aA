arr.push()
//Time complexity: O(1) Space complexity: O(1)
//Justification: One element is being pushed into the array so one iteration of O(1) as well as space of O(1)

arr.pop()
// Time complexity: O(1) Space complexity: O(1)
//Justification: One element is being removed from the end array so one iteration of O(1) as well as space of O(1)

arr.shift()
// Time complexity: O(n) Space complexity: O(1)
//Justification: One element is being removed from the start of the array, so all other elements have to be moved by one position thus O(n) for time and space of O(1)

arr.unshift()

// Time complexity: O(n) Space complexity: O(n)
//Justification: Same logic for unshift as shift since elements of array need to moved. But space will be O(n)since you need to make memory to store new element as well as the existing elements that are shifted


arr.splice()
// Time complexity: O(n) Space complexity: O(n)
//Justification: Might need to move to nth index to perform splice so Time of O(n) and if you insert element at beginning of array, space will be O(n) since all other elements need to be shifted


arr.slice()
// Time complexity: O(n) Space complexity: O(n)
//Justification: Moving to index of n to slice, so time of O(n) and return an array of n elements so space of O(n)

arr.indexOf()
// Time complexity: O(n) Space complexity: O(1)
//Justification: Need to go through n elements to compare so Time complexity of O(n) but comparing only 1 element so space of O(1)


arr.map()
// Time complexity: O(n) Space complexity: O(n)
//Justification: Creating a new array of n elements and iterating over each element so O(n) for both


arr.filter()
// Time complexity: O(n) Space complexity: O(n)
//Justification: Same logic as arr.map()


arr.reduce()
// Time complexity: O(n) Space complexity: O(1)
//Justification: Iterating over the array n times but only the accumulators value changes so space of O(1)


arr.reverse()
// Time complexity: O(n) Space complexity: O(1)
//Justification: Returns a new array of size (n) so space complexity is O(n) and time is O(1) but not exactly sure why


//   [...arr]

// Time complexity: O(n) Space complexity: O(n) Justification: Fill this in

//   spread on MDN
