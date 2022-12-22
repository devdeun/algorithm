function solution(num, total) {
    const a = (2 * total / num + 1 - num) / 2;
    const result = [];
    for (let i = a; i < num + a; i ++) result.push(i);
    return result;
}