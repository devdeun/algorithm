function solution(arr, intervals) {
    return intervals.map(([start, end]) => {
        return arr.slice(start, end + 1);
    }).flat();
}