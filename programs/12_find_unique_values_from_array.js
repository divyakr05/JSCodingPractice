const findUique = (arr) => {
    // Using Set to find unique values in the array
    const output = [...new Set(arr)];
    return output
}

const inputArray = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 10];
console.log(findUique(inputArray));