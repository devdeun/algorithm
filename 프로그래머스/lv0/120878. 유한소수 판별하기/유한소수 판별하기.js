function solution(a, b) {
    const getGcd = (a, b) => b ? getGcd(b, a % b) : a;
    const getPrimeFactor = n => {
        const primeFactor = new Set();
        while (n % 2 === 0) {
            primeFactor.add(2);
            n = n / 2;
        };
        for (let i = 3; i * i <= n; i += 2) {
            while (n % i === 0) {
                primeFactor.add(i);
                n = n / i;
            }
        }
        if (n > 2) primeFactor.add(n);
        return [...primeFactor];
    }
    const gcd = getGcd(a, b);
    if (gcd !== 1) {
        a /= gcd;
        b /= gcd;
    }
    const primeFactor = getPrimeFactor(b);
    return primeFactor.filter(n => n !== 2 && n !== 5).length ? 2 : 1;
}






