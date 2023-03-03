function ageSort(users) {
  // Your code here
  return users.sort((a, b) => a.age - b.age)
}

function oddEvenSort(arr) {
  // Your code here
  const odd = arr.filter(el => el % 2 == 1).sort((a, b) => a - b);
  const even = arr.filter(el => el % 2 == 0).sort((a, b) => a - b);
  return [...odd, ...even]
}

function validAnagrams(s, t) {
  // Your code here
  if (s.length != t.length) {
    return false;
  }
  let sortedS = s.toLowerCase().split(``);
  let sortedT = t.toLowerCase().split(``);
  sortedS.sort();
  sortedT.sort()

  return (sortedS.join(``) == sortedT.join(``))
}

function reverseBaseSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    if (a.toString().length > b.toString().length) { return -1 };
    if (a.toString().length < b.toString().length) { return 1 };
    return a - b;
  })

}

function frequencySort(arr) {
  // Your code here
  let frequency = (target => arr.filter(val => val === target).length);

  arr.sort((a, b) => {
    let aFreq = frequency(a);
    let bFreq = frequency(b);

    if (aFreq !== bFreq) {
      return aFreq - bFreq;
    } else {
      return b - a;
    }
  });

  return arr;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
