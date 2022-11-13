function solution(array, n) {
    return array.sort((a, b) => a - b).reduce((acc, cur) => {
        return Math.abs(acc - n) > Math.abs(cur - n) ? cur : acc;    
    }, 0);
}