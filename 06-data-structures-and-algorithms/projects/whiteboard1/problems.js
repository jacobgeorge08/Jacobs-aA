// Define a function logBetween(lowNum, highNum) that will return an array from lowNum to highNum, inclusive. Inclusive means that the range includes lowNum and highNum.
function logBetween(lowNum, highNum) {
  let arr = [];
  for (let i = lowNum; i <= highNum; i++) {
    arr.push(i)
  }
  return arr;
}

// O(n) time complexity and space as well;

/*
logBetweenStepper
Write a function logBetweenStepper(min, max, step) that takes in three numbers as parameters. The function should return an array of numbers between min and max at step intervals.
Examples:
logBetweenStepper(5, 9, 1) // => [5, 6, 7, 8, 9]
logBetweenStepper(-10, 15, 5) // => [-10, -5, 0, 5, 10, 15]
*/

let logBetweenStepper = (min, max, step) => {
  let arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  console.log(arr);
}

// Time and space are both O(n)

/*
printReverse
Write a function printReverse(min, max) that returns an array of all numbers from max to min (exclusive), in reverse order.
Examples:
printReverse(13, 18) // => [17, 16, 15, 14]
printReverse(90, 94) // => [93, 92, 91]
*/

function printReverse(min, max) {
  let arr = [];
  for (let i = max - 1; i > min; i--) {
    arr.push(i);
  }
  console.log(arr);
}

// Time and Space of O(n)

/*
fizzBuzz
Define a function fizzBuzz(max) that takes a number and returns an array of every number from 0 to max that is divisible by either 3 or 5, but not both.
Examples:
fizzBuzz(20); // => [3, 5, 6, 9, 10, 12, 18]
*/

function fizzBuzz(max) {
  const results = [];

  for (let i = 0; i <= max; i++) {
    if (i % 3 === 0 ^ i % 5 === 0) {
      results.push(i);
    }
  }

  return results;
}
// Space and Time comeplexity of O(n)

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const maxValue = array => {
  if (array.length === 0) {
    return [];
  }
  return Math.max(...array)
}

function myIndexOf(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i
    }
  }
  return -1
}

function factorArray(array, number) {
  let arr = [];
  array.forEach(element => {
    if (number % element === 0) {
      arr.push(element)
    }
  });
  return arr;
}

function oddRange(end) {
  let arr = [];
  for (let i = 1; i < end; i += 2) {
    arr.push(i)
  }
  return arr;
}

function reverseHyphenString(string) {
  return string.split(`-`).reverse().join(`-`)
}

function intersect(arr1, arr2) {
  let arr = [];
  arr1.forEach(element => {
    if (arr2.includes(element)) {
      arr.push(element);
    }
  });
  return arr;
}
function mirrorArray(array) {
  let arr2 = array.slice();
  return array.concat(arr2.reverse())
}

function abbreviate(sentence) {
  let sentArr = sentence.split(` `)
  let newSent = [];
  for (let i = 0; i < sentArr.length; i++) {
    if (sentArr[i].length > 3) {
      newSent.push(removevowels(sentArr[i]));
    }
    else newSent.push(sentArr[i]);
  }
  return newSent.join(` `)
}

function removevowels(str) {
  const vowels = `aeiou`;
  let newStr = ``
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i].toLowerCase())) {
      newStr += str[i];
    }
  }
  return newStr;
}

function adults(people) {
  let arr = [];
  people.forEach(element => {
    if (element.age >= 18) {
      arr.push(element.name)
    }
  })
  return arr;
}

function countScores(people) {
  let newScore = {}
  for (let person of people) {
    if (newScore[person.name] == undefined) {
      newScore[person.name] = person.score
    }
    else {
      newScore[person.name] += person.score
    }
  }
  return newScore
}

function firstNPrimes(n) {
  let arr = [];
  let i = 2;
  while (arr.length < n) {
    if (isPrime(i)) {
      arr.push(i)
    }
    i++;
  }
  return arr;
}

function peakFinder(arr) {
  let newArr = [];
  if (arr[0] > arr[1]) {
    newArr.push(0)
  }
  if (arr[arr.length - 1] > arr[arr.length - 2]) {
    newArr.push(arr.length - 1)
  }
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] > arr[i - 1]) && (arr[i] > arr[i + 1])) {
      newArr.push(i)
    }

  }
  return newArr
}

function divisibleByThreePairSum(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if ((array[i] + array[j]) % 3 == 0) {
        arr.push([i, j])
      }
    }
  }
  return arr;
}

function zipArray(arr1, arr2) {
  let arr = []
  for (let i = 0; i < arr1.length; i++) {
    arr.push([arr1[i], arr2[i]])
  }
  return arr;
}

function twoDimensionalTotal(array) {
  let total = array.reduce(
    (sum, subArray) => {
      return sum + subArray.reduce(
        (sum, element) => sum + element
      );
    }
    , 0
  );

  console.log(total);
}

function moreDotLessDash(str) {
  let doCount = 0;
  let daCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == `-`) {
      daCount++;
    }
    else if (str[i] == `.`) {
      doCount++;
    }
  }
  return doCount > daCount ? true : false
}

function numsToWords(numString) {
  let str = ``;
  let words = {
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine"
  };
  for (let i = 0; i < numString.length; i++) {

    str += words[numString[i]]

  }
  return str;
}

function evenSumArray(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(sumtoN(array[i]))
  }
  return arr;

}

function sumtoN(n) {
  let sum = 0
  for (let i = 0; i <= n; i += 2) {
    sum += i
  }
  return sum;
}

function hasSymmetry(array) {
  let i = 0;
  let j = array.length - 1;
  while (i <= j) {
    if (array[i] != array[j]) {
      return false;
    }
    i++
    j--
  }
  return true;
}

function vowelShift(sentence) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  let newSentence = "";

  for (let i = 0; i < sentence.length; i++) {
    let currentLetter = sentence[i];
    let indexOfVowel = VOWELS.indexOf(currentLetter);
    if (indexOfVowel === -1) {
      newSentence += currentLetter;
    } else {
      newSentence += VOWELS[(indexOfVowel + 1) % VOWELS.length]
    }
  }
  console.log(newSentence);
}

function threeUniqueVowels(string) {

  let count = 0;
  let found = "";

  //iterate through the string
  for (let i = 0; i < string.length; i++) {
    let currentLetter = string[i];
    //check if currentLetter is a vowel and has not been found yet
    if (VOWELS.includes(currentLetter) && !found.includes(currentLetter)) {
      //increment count
      count++;
      //add to found
      found += currentLetter;
    }
  }

  return (count >= 3);
}

function splitHalfArray(array) {
  let newArr2 = [];
  let newArr1 = [];
  if (array.length % 2 == 1) {
    let mid = Math.floor(array.length / 2);
    array.splice(mid, 1);
  }
  for (let i = 0; i < array.length / 2; i++) {
    newArr1.push(array[i])
  }
  for (let i = array.length / 2; i < array.length; i++) {
    newArr2.push(array[i])
  }
  return [newArr1, newArr2];
}

function commonPrimeFactors(num1, num2) {

}

function commonFactors(num1, num2) {
  let factors = []
  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

function isPrime(number) {

  if (number === 1) { return false }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function commonPrimeFactors(num1, num2) {
  let factors = commonFactors(num1, num2);
  return factors.filter(factor => isPrime(factor));
}

function mindPsAndQs(str) {
  let currentStreak = 0;
  let longestStreak = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'P' || str[i] === 'Q') {
      currentStreak++;
      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
      }
    } else {
      currentStreak = 0;
    }
  }
  return longestStreak;
}

function oddWordsOut(sentence) {
  let arr = sentence.split(` `);
  let arr2 = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 == 0) {
      arr2.push(arr[i])
    }
  }
  return arr2.join(` `)
}

function collapseString(str) {
  let str2 = ``;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      continue;
    }
    else {
      str2 += str[i];
    }

  }
  return str2;
}

function powerSequence(base, length) {
  let arr = [];
  for (let i = 1; i <= length; i++) {
    arr.push(base ** i)
  }
  return arr;
}

function flipped(first, second) {

  if (first === 0 || second === 0) { return false; }

  if (first > 0 && second < 0) { return true; }
  if (first < 0 && second > 0) { return true; }

  return false;

}

function signFlipCount(nums) {

  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let current = nums[i];
    let next = nums[i + 1];

    if (flipped(current, next)) { count++; }
  }
  console.log(count);

}

function countAdjacentSums(arr, n) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] === n) {
      count++;
    }
  }
  return count;
}

function pairsToString(arr) {
  let str = ``;
  for (let i = 0; i < arr.length; i++) {
    str += returnStr(arr[i]);
  }
  return str;
}

function returnStr(subarr) {
  let str = ``;
  for (let i = 0; i < subarr[1]; i++) {
    str += subarr[0]
  }
  return str;
}

function countRepeats(string) {
  let counts = {};
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (counts[string[i]] === 1) {
      count++;
      counts[string[i]]++;
    }
    else if (counts[string[i]]) { counts[string[i]]++; }
    else { counts[string[i]] = 1; }
  }

  console.log(count);
}

function reverb(word) {
  let vowels = "aeiou";
  for (let i = word.length; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      return word + word.slice(i);
    }
  }

  return word;
}

function reverse2D(array) {
  let str = ``;
  for (let i = array.length - 1; i >= 0; i--) {
    str += reverseItems(array[i])
  }
  return str;
}

function reverseItems(arr) {
  return arr.reverse().join(``)
}

function threeIncreasing(arr) {
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] + 1 == arr[i + 1]) && (arr[i] + 2 == arr[i + 2])) {
      return true;
    }
  }
  return false;
}

function titleCase(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}

function variableNameify(words) {
  return words.reduce(
    (string, word, index) => {
      if (index === 0) {
        string += word.toLowerCase();
        return string;
      } else {
        string += titleCase(word);
        return string;
      }
    }, ""
  );

}

function threeInARow(arr) {
  for (let i = 0; i < arr.length - 3; i++) {
    let first = arr[i];
    let second = arr[i + 1];
    let third = arr[i + 2];

    if (first === second && first === third) {
      return true;
    }
  }
  return false;
}

let valueConcat = (array, obj) => {
  return array.map(
    element => {
      if (obj[element]) {
        return element + obj[element];
      } else {
        return element;
      }
    }
  );
}


function isPassing(assessments) {
  if (assessments.length === 0) {
    return false;
  }
  let totalScore = 0;
  for (let i = 0; i < assessments.length; i++) {
    totalScore += assessments[i].score;
  }
  const averageScore = totalScore / assessments.length;
  return averageScore >= 70;
}

function greatestCommonFactor(num1, num2) {
  for (let i = Math.min(num1, num2); i > 0; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
}

function shortestWord(sentence) {
  let words = sentence.split(" ");
  let shortest = words[0];

  for (let i = 1; i < words.length; i++) {
    let currentWord = words[i];
    if (currentWord.length < shortest.length) {
      shortest = currentWord;
    }
  }

  console.log(shortest);
}

function objectToString(count) {
  let keys = Object.keys(count);
  let str = ``;
  for (let i = 0; i < keys.length; i++) {
    let arr = new Array(count[keys[i]])
    arr.fill(keys[i]);
    str += arr.join(``)
  }
  return str;
}

function hipsterfyWord(word) {
  const vowels = "AEIOUaeiou";
  let hipster = "";

  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      hipster = word.slice(0, i) + word.slice(i + 1);
      break;
    }
  }
  return hipster;
}

function hipsterfy(sentence) {
  let words = sentence.split(" ");
  words = words.map(word => hipsterfyWord(word));
  console.log(words.join(" "));
}

function lcm(num1, num2) {
  for (let i = 1; i <= num1 * num2; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      console.log(i);
      return i;
    }
  }
}

function factorial(n) {
  if (n === 1) { return 1; }
  return n * factorial(n - 1);
}

function longWordCount(string) {
  let words = string.split(" ");
  console.log(
    words.reduce(
      (count, word) => {
        if (word.length > 7) { return count + 1; }
        else { return count; }
      }, 0
    )
  );
}

function twoDimensionalSize(array) {
  let result =
    array.reduce((count, subArray) => count + subArray.length, 0);
  console.log(result);
}

function pairProduct(arr, num) {
  let pairs = [];

  let i = 0;
  while (i < arr.length - 1) {

    let j = i + 1;
    while (j < arr.length) {

      if (arr[i] * arr[j] === num) {
        pairs.push([i, j]);
      }
      j++;
    }
    i++;
  }

  console.log(pairs);
}

function nextTwoPrimes(num) {
  let primes = [];
  let possiblePrime = num + 1;
  while (primes.length < 2) {
    if (isPrime(possiblePrime)) { primes.push(possiblePrime); }
    possiblePrime++;
  }
  console.log(primes);
}

function isPrime(num) {
  let prime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) { prime = false; }
  }
  return prime;
}

function elementCount(array) {

  let counts = {};
  array.forEach(
    element => {
      if (counts[element]) { counts[element]++; }
      else { counts[element] = 1; }
    }
  );

  console.log(counts);
}

function valueCounter(obj, val) {
  let count = 0;
  for (let key in obj) {
    if (obj[key] === val) {
      count++;
    }
  }
  console.log(count);
}


function countInnerElement(arr) {
  let counts = {};
  arr.forEach(
    subArray => {
      subArray.forEach(
        element => {
          if (counts[element]) {
            counts[element]++;
          } else {
            counts[element] = 1;
          }
        }
      );
    }
  );

  console.log(counts);
}


function twoDiff(array) {
  let result = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (Math.abs(array[i] - array[j]) === 2) {
        result.push([i, j]);
      }
    }
  }
  console.log(result);
}
