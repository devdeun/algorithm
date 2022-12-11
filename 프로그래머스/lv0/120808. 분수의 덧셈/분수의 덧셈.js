function solution(denum1, num1, denum2, num2) {
    const denum3 = num1 * denum2 + num2 * denum1;
    const num3 = num1 * num2;
    const getGcd = (a, b) => (a % b ? getGcd(b, a % b) : b);
    const gcd = getGcd(denum3, num3);
    return [denum3 / gcd, num3 / gcd];
}