function solution(number) {
    return number.split("").map(s => +s).reduce((a, c) => a + c, 0) % 9;
}