function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        if (index % 2 == 1) {
            newArr.push(arr[index]);
        }
    }
    return newArr;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let newArr = [];
    for (let index = arr.length - 1; index >= 0; index--) {
        if (index % 2 == 1) {
            newArr.push(arr[index]);
        }


    }
    return newArr;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let newArr = [];
    for (let i = 1; i < arr.length; i *= 2) {
        newArr.push(arr[i])
    }
    return newArr;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let newArr = [];
    for (let i = 1; i < arr.length; i *= n) {
        newArr.push(arr[i])
    }
    return newArr;
}



function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let newArr = [];
    for (let index = 0; index < arr.length / 2; index++) {
        newArr.push(arr[index])

    }
    return newArr;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let newArr = [];
    for (let index = arr.length / 2; index < arr.length; index++) {
        if (!arr[index]) {
            return [];
        }
        newArr.push(arr[index])

    }
    return newArr;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
