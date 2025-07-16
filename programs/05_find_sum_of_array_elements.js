const finsSumOfArrayElements = (arr) => {
    // Using reduce to sum all elements in the array
    return arr.reduce((sum, e) => sum + e, 0);
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(finsSumOfArrayElements(inputArray)); 