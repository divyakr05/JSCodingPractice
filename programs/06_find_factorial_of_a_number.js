const findFactorial = (n) => {
    if(n == 0 || n == 1){
        return 1;
    }
    else{
        for(let i = n; i > 1; i--){
            n = n * (i - 1);
        }
        return n;
    }
}

const inputNumber = 7; // Change this to find the factorial of a different number
console.log(findFactorial(inputNumber)); // Output: 5040