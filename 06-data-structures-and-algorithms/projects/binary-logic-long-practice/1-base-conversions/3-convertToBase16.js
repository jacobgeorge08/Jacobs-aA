// Convert the integers in the console.logs below to base 16:

/******************************************************************************/
let hexObj = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: `a`,
  11: `b`,
  12: `c`,
  13: `d`,
  14: `e`,
  15: `f`,
  16: `g`
}

const convertToBase16 = element => {
  // Your code here
  let num = "0x" + recurseToBinary(element, 16).join("")
  return num;
};

function recurseToBinary(element, divisor) {
  if (element == 0) {
    return [];
  }
  let quotient = element % divisor;
  let hexQ = hexObj[quotient]
  let remainder = Math.floor(element / divisor);
  return [...recurseToBinary(remainder, divisor), hexQ];
}
/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
