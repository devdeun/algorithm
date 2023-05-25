function solution(n, k) {
    return Array(Math.floor(n / k)).fill(k).map((n, i) => n * (i + 1));
}