function solution(n) {
    const array = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2) array.push(i);
    }
    return array;
}