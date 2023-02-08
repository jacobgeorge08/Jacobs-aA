// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}


try {
  let res = sum(null);
  console.log(res);
} catch (error) {
  console.error(`Array needs to be passed through. TypeError`)
}

// 2.
// tests
function sayName(a) {
  if (typeof a !== `string`) {
    throw new Error(`"Invalid name! Must be a string!`)
  }
  else {
    console.log(a)
  }
}
try {
  sayName(1);
}
catch (error) {
  console.error(error.message)
}

sayName("Alex");

// Your code here


// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet(null)
} catch (error) {
  console.error(`Hello World!`)
}
