function solution(start, end) {
    const result = [];
    while (start >= end) {
        result.push(start--);
    }
    return result;
}