const mergeAndSortArrays = (arr1, arr2) => {
    // Merge the two arrays 
    const mergedArray = [...arr1, ...arr2];
    // Sort the merged array in ascending order
    mergedArray.sort((a, b) => a - b)
    return mergedArray;
}

const array1 = [3, 1, 4, 2];
const array2 = [6, 5, 8, 7];
console.log(mergeAndSortArrays(array1, array2)); 