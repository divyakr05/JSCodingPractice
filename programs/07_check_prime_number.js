const checkPrime = (num) => {
    if (num === 0 || num === 1) {
        return false; // 0 and 1 are not prime numbers
    }
    else if (num < 0) {
        return false; // Negative numbers are not prime
    }
    else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false; // If num is divisible by any number other than 1 and itself, it's not prime
            }
        }
        return true; // If no divisors found, num is prime
}
}

const input = 7;
console.log(checkPrime(input))