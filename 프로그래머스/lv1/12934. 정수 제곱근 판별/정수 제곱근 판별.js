function solution(n) {
    const sqrtNum = Math.sqrt(n);
    return sqrtNum % 1 ? -1 : Math.pow(sqrtNum + 1, 2);
}