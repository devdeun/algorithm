function solution(s) {
    const numArr = s.split(" ").map(n => +n);
    return `${Math.min.apply(null, numArr)} ${Math.max.apply(null, numArr)}`;
}