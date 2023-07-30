function solution(n) {
    const result = [n];
    while (n > 1) {
        const num = n % 2 ? 3 * n + 1 : n / 2;
        result.push(num);
        n = num;
    }
    return result;
}