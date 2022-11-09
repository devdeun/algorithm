function solution(n) {
    let count = 1;
    while ((count * 6) % n) count++;
    return count;
}