function solution(i, j, k) {
    let s = "";
    for (let index = i; index <=j; index++) s += index;
    return s.split(k).length - 1;
}