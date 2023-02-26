function quicksort(arr) {

  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) {
    return arr;
  }
  // Pick the first value as the pivot
  let pivot = arr[0];
  let left = [];
  let right = [];
  // Orient the pivot so that...
  // every number smaller than the pivot is to the left
  // every number larger (or equal) than the pivot is to the right
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    }
    else right.push(arr[i]);
  }
  // Recursively sort the left
  let sortedR = quicksort(right);
  // Recursively sort the right
  let sortedL = quicksort(left);
  // Return the left, pivot and right in sorted order
  return [...sortedL, pivot, ...sortedR];
}


module.exports = [quicksort];
