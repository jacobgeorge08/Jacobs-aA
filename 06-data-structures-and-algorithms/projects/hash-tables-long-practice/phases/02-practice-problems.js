function anagrams(str1, str2) {
  let cache1 = {};
  let cache2 = {};
  for (let i = 0; i < str1.length; i++) {
    if (cache1[str1[i]]) {
      cache1[str1[i]] += 1;
    }
    else cache1[str1[i]] = 1;
  }
  for (let i = 0; i < str2.length; i++) {
    if (cache2[str2[i]]) {
      cache2[str2[i]] += 1;
    }
    else cache2[str2[i]] = 1;
  }
  for (let key in cache1) {
    let val1 = cache1[key];
    let val2 = cache2[key];

    if (val1 !== val2) {
      return false;
    }
  }

  return true;
}



function commonElements(arr1, arr2) {
  // Your code here
  let cache1 = {};
  let cache2 = {};
  let common = [];
  for (let i = 0; i < arr1.length; i++) {
    if (cache1[arr1[i]]) {
      cache1[arr1[i]] += 1;
    }
    else cache1[arr1[i]] = 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (cache2[arr2[i]]) {
      cache2[arr2[i]] += 1;
    }
    else cache2[arr2[i]] = 1;
  }

  for (let key in cache1) {
    if (cache2[key]) {
      common.push(Number(key))
    }
  }
  return common;

}


function duplicate(arr) {
  // Your code here
  const cache = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (cache[num]) {
      return num;
    } else {
      cache[num] = 1;
    }
  }
}


function twoSum(nums, target) {
  // Your code here
  const numsSet = new Set(nums);

  for (let num of numsSet) {
    let lookingFor = target - num;

    if (numsSet.has(lookingFor) && lookingFor !== num) {
      return true;
    }
  };

  return false;
}


function wordPattern(pattern, strings) {
  // Your code here
  const model = {};
  const assigned = new Set()

  for (let i = 0; i < strings.length; i++) {
    let str = strings[i];
    let key = pattern[i];

    if (!model[key] && !assigned.has(str)) {
      model[key] = str;
      assigned.add(str);
    } else if (model[key] !== str) {
      return false;
    }
  }

  return true;
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
