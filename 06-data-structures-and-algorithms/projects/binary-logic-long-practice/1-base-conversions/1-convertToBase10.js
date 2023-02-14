// Convert the integers in the console.logs below to base 10:

/******************************************************************************/
let hex = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
  g: 16
}

const convertToBase10 = str => {
  if (str.includes("0b")) {
    return binarytoBase10(str);
  }
  else return hextoBase10(str);

};

const hextoBase10 = str => {
  let num = str.split(``).slice(2).reverse();
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += (16 ** i) * hex[num[i]]
  }
  return sum;
}

const binarytoBase10 = str => {
  let num = str.split(``).slice(2).reverse();
  let sum = 0
  for (let i = 0; i < num.length; i++) {
    sum += ((2 ** i) * (num[i]))
  }
  return sum;
}

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914
