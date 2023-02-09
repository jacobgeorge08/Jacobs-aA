function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(n) {
  // Your code here
  if (n > 10000 || n < 1) {
    throw TypeError(`Outside of acceptable range`)
  }
  return 1 / n
}

module.exports = {
  returnsThree,
  reciprocal
};
