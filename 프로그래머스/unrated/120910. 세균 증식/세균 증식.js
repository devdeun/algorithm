function solution(n, t) {
    let total = n;
    for (let i = 0; i < t; i++) {
        total *= 2;
    }
    return total;
}