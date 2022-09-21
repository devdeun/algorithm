function solution(w, h) {
    const total = w * h;
    const getGcd= (num1, num2) => {
        while (num2 > 0) {
            let r = num1 % num2;
            num1 = num2;
            num2 = r;
        }
        return num1;
    }
    const gcd = getGcd(w, h);
    return gcd === 1 ? total - (w + h - 1) : total - (w + h - gcd);
}


