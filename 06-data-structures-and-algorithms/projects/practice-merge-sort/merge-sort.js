// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) {
    return arr;
  }
  // Divide the array in half
  let mid = Math.floor(arr.length / 2)
  let first = arr.slice(0, mid)
  let second = arr.slice(mid);
  // Recursively sort the left half
  let firstSort = mergeSort(first)
  // Recursively sort the right half
  let secondSort = mergeSort(second);
  // Merge the halves together and return
  return merge(firstSort, secondSort);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let merged = []
  // Point to the first value of each array
  let indexA = arrA[0]
  let indexB = arrB[0]
  // While there are still values in each array...
  while (arrA.length != 0 && arrB.length != 0) {
    // Compare the first values of each array
    if (arrA[0] < arrB[0]) {
      merged.push(arrA.shift())
    }
    else merged.push(arrB.shift())
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
  }
  merged = [...merged, ...arrA, ...arrB];

  // Return the return array
  return merged
}

module.exports = [merge, mergeSort];
