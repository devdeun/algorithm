function solution(balls, share) {
    const factorial = n => {
        let result = 1;
        while (n > 1) {
            result *= n;
            n--;
        }
        return result;
    }
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}