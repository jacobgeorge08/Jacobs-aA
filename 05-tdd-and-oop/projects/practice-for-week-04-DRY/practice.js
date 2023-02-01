function check(num1, num2, compare) {
  return compare == `bigger` ? Math.max(num1, num2) : Math.min(num1, num2)
}


function multiplyBiggerNumByTwo(num1, num2) {
  return check(num1, num2, `bigger`) * 2
}

function divideBiggerNumByThree(num1, num2) {
  return check(num1, num2, `bigger`) / 3
}

function eatMostTacos(sum1, sum2) {
  return `I ate ${check(sum1, sum2, `bigger`)} tacos.`
}

function adoptSmallerDog(weight1, weight2) {
  return `I adopted a dog that weighs ${check(weight1, weight2, `smaller`)} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
