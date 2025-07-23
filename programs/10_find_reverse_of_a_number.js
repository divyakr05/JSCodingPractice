const reverseNumber = (num) => {
    if (num >=0 && num <=9) {
        return num; // If the number is a single digit, return it as is
    }
    else {
        let output = 0; // Initialize output to build the reversed number
        while (num > 0) {
            let digit = num % 10;
            num = Math.floor(num / 10); // Remove the last digit from the number
            output = output * 10 + digit; // Build the reversed number
        }
        return output; // Return the reversed number
    }
}

const inputNumber = 1; 
console.log(reverseNumber(inputNumber)); 