function solution(strArr) {
    const total = {};
    strArr.map(str => {
        if (!total[str.length]) total[str.length] = 1;
        else total[str.length]++;
    });
    
    let max = 0;
    for (const length in total) {
        max = Math.max(total[length], max);
    }
    return max;
}