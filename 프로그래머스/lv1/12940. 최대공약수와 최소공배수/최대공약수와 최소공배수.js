function solution(n, m) {
    let num1 = n;
    let num2 = m;
    
    while (num2 !== 0) {
        const remainder = num1 % num2;
        num1 = num2;
        num2 = remainder;
    }

    return [num1, (n * m) / num1];
}

