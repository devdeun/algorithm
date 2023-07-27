function solution(n) {
    const array = new Array(n).fill(new Array(n).fill(0));
    return array.map((arr, i) => arr.map((_, j) => i === j ? 1 : 0));
}