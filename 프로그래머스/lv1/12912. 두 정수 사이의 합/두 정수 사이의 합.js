function solution(a, b) {
    const from = a < b ? a : b;
    const to = a > b ? a : b;
    
    let answer = 0;
    for (let i = from; i <= to; i++) {
        answer += i;
    }
    return answer;
}