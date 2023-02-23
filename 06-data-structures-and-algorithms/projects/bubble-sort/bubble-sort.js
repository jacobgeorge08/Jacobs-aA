function bubbleSort(arr) {
  let sortable = false;

  // Iterate through the array
  for (let i = 0; i < arr.length - 1; i++) {
    let el1 = arr[i];
    let el2 = arr[i + 1];
    // If the current value is greater than its neighbor to the right
    if (el1 > el2) {
      // Swap those values
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      sortable = true;

      // Do not move this console.log
      console.log(arr.join(","));
    }
  }

  // If you get to the end of the array and no swaps have occurred, return
  if (!sortable) {
    return arr;
  } else {
    // Otherwise, repeat from the beginning
    return bubbleSort(arr);
  }
}

module.exports = bubbleSort;
