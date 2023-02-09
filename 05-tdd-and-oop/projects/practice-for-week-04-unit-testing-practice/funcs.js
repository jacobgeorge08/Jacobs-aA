function isFive(num) {
  // Your code here
  return num === 5 ? true : false
}

function isOdd(number) {
  // Your code here
  if (typeof number !== `number`) {
    throw new Error(`Not a number`)
  }
  return number % 2 === 0 ? false : true
}

function myRange(min, max, step = 1) {
  // Your code here
  let arr = []
  for (let i = min; i <= max; i += step) {
    arr.push(i)
  }
  return arr;
}


module.exports = { isFive, isOdd, myRange };
