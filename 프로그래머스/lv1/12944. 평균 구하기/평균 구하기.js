function solution(arr) {
    const total = arr.reduce((prev, current) => prev + current , 0);
    
    return total / arr.length;
}