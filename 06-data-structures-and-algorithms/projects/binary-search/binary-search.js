function linearSearch(arr, target) {
  return arr.indexOf(target);
};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let lo = 0
  let hi = arr.length - 1
  // While high and low indices do not overlap...
  while (hi >= lo) {
    // Find the midpoint between high and low indices
    let mid = Math.floor((hi + lo) / 2)
    // Compare the target value to the midpoint value
    if (target == arr[mid]) {
      // If the target equals the midpoint...
      // Return the midpoint index
      return mid;
    }
    else if (target > arr[mid]) {
      lo = mid + 1
    }
    // If the target is higher than the midpoint...
    // Move the low pointer to midpoint + 1
    // If the target is less than the midpoint...
    // Move the high pointer to midpoint - 1
    else if (target < arr[mid]) {
      hi = mid - 1;
    }
  }
  return -1
  // Return -1 if the loop exits with overlapping pointers

}


module.exports = [linearSearch, binarySearch]
