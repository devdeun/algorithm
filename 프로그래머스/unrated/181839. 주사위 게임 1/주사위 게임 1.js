function solution(a, b) {
    if (a % 2 && b % 2) return Math.pow(a, 2) + Math.pow(b, 2);
    if (a % 2 || b % 2) return 2 * (a + b);
    return Math.abs(a - b);
}