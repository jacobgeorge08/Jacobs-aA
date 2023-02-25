// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */
  let sorted = [];
  let copy = arr.slice();
  while (copy.length != 0) {
    console.log(sorted.join(','))
    let val = copy.pop();
    for (let i = sorted.length - 1; i >= -1; i--) {

      if (i == -1) {
        sorted.unshift(val);
        break;
      }

      if (sorted[i] <= val) {
        sorted.splice(i + 1, 0, val)
        break;
      }
    }
  }
  return sorted;
  // Your code here
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:
  Set a pointer dividing the array into sortedArray and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the leftValue is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  let dividerIndex = 0;
  while (dividerIndex < arr.length) {
    let currentValue = arr[dividerIndex];
    let breakPoint = 0;
    for (let i = dividerIndex; i >= 0; i--) {
      let leftValue = arr[i - 1];
      if (leftValue < currentValue) {
        breakPoint = i;
        break;
      } else {
        arr[i] = leftValue;
      }
    }
    arr[breakPoint] = currentValue;
    console.log(arr.join(','));
    dividerIndex++
  }
  return arr;
}

module.exports = [insertionSort, insertionSortInPlace];
