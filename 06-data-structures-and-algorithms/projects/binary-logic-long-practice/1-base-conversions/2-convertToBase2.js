// Convert the integers in the console.logs below to base 2

/******************************************************************************/

const convertToBase2 = element => {
  return base10ToBase2(element)
};

function base10ToBase2(element) {
  let num = "0b" + recurseToBinary(element, 2).join("")
  return num;
}

function recurseToBinary(element, divisor) {
  if (element == 0) {
    return [];
  }
  let quotient = element % divisor;
  let remainder = Math.floor(element / divisor);
  return [...recurseToBinary(remainder, divisor), quotient];
}

/******************************************************************************/

console.log(convertToBase2(4)); // 0b100
console.log(convertToBase2(65)); // 0b1000001
console.log(convertToBase2(256)); // 0b100000000
console.log(convertToBase2(123)); // 0b1111011
console.log(convertToBase2(1000)); // 0b1111101000

console.log('––––––');

console.log(convertToBase2('0xf')); // 0b1111
console.log(convertToBase2('0xfa')); // 0b11111010
console.log(convertToBase2('0x1234')); // 0b1001000110100
console.log(convertToBase2('0xc9a1')); // 0b1100100110100001
console.log(convertToBase2('0xbf12')); // 0b1011111100010010
