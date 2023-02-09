function myMap(inputArray, callback) {
  let arr = [];

  for (let i = 0; i < inputArray.length; i++) {
    arr.push(callback(inputArray[i]))
  }

  return arr;
}

module.exports = myMap;
