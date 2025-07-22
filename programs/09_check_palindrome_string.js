const checkPalindrome = (inputString) => {
    inputString = inputString.toLowerCase(); 
    const reversedString = inputString.split('') // Split the string into an array of characters
        .reverse() // Reverse the array of characters
        .join(''); // Join the reversed array back into a string

    return inputString === reversedString; // Check if the original string is equal to the reversed string
}

const inputString = 'malaYALAM';
console.log(checkPalindrome(inputString)); 