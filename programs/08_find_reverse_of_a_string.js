const findReverse = (inputString) => {
    outputString = inputString.split('') // Split the string into an array of characters
        .reverse() // Reverse the array of characters
        .join(''); // Join the reversed array back into a string

    return outputString;
}

const inputString = 'Hello, World!';
console.log(findReverse(inputString)); 