const findMinimum = arr => {
  let min = arr[0];
  arr.forEach(element => {
    if (min > element) {
      min = element
    }
  });
  return min;
  //Space complexity of 1 since just 1 min element and time of O(n)
};

const runningSum = arr => {
  /*
  Given an array of numbers, return the running sum of its elements.
  */
  let sum = 0;
  let sums = [];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    sums.push(sum);
  }
  return sums;
};

const evenNumOfChars = arr => {
  let sum = 0;
  arr.forEach(element => {
    if (element.length % 2 == 0) {
      sum++;
    }
  })
  return sum;
  // Time complexity of n. Space complexity of 1
};

const smallerThanCurr = arr => {
  let smallArr = []
  arr.forEach(element => {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
      if (element > arr[i]) {
        count++;
      }
    }
    smallArr.push(count);
  })
  return smallArr;
  //Time Complexity of n^2 and space complexity of n
};

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target && i != j) {
        return true;
      }
    }
  }
  return false;
  //Time complexity of n^2 and space of 1
};

const secondLargest = arr => {
  if (arr.length < 2) {
    return undefined;
  }
  let max = Math.max(...arr);
  let max2 = Math.min(...arr)
  for (el of arr) {
    if (max2 < el && el < max) {
      max2 = el;
    }
  }
  return max2;
  //Time complexity of O(n), space complexity of 1
};

const shuffle = (arr) => {
  let newArray = [...arr];
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;

};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
