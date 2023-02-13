const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  console.time(`addNums10Timer`)
  let arr = [];
  for (let i = increment; i <= increment * 10; i += increment) {
    arr.push(addNums(i))
    console.timeLog(`addNums10Timer`)
  }
  console.timeEnd(`addNums10Timer`)
  return arr;

}


function addManyNums10Timing(increment) {
  console.time(`addManyNums10Timer`)
  let arr = [];
  for (let i = increment; i <= increment * 10; i += increment) {
    arr.push(addManyNums(i))
    console.timeLog(`addManyNums10Timer`)

  }
  console.timeEnd(`addManyNums10Timer`)
  return arr;

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
