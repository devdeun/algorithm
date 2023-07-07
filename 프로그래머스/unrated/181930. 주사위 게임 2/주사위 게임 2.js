function solution(a, b, c) {
    const set = new Set();
    const count = set.add(a).add(b).add(c).size;
    let sum = a + b + c;
    if (count !== 3) sum *= Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2);
    if (count === 1) sum *= Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);
    return sum;
}