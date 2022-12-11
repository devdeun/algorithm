function solution(n) {
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