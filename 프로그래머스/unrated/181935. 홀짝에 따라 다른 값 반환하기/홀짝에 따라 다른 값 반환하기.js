function solution(n) {
    let result = 0;
    for (let i = n; i > 0; i-=2) {
        result += n % 2 ? i : Math.pow(i, 2);
    }
    return result;
}