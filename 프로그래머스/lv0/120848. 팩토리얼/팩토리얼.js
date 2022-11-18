function solution(n) {
    let temp = 1;
    let factorial = 1;
    while (temp * factorial < n) {
        factorial++;
        temp *= factorial;
    }
    return factorial;
}