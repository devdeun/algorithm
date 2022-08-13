function solution(d, budget) {
    let answer = 0;
    let count = budget;
    
    d.sort((a, b) => a - b).forEach(num => {
        if (count - num >= 0) {
            count -= num;
            answer++;
        }
    });
    
    return answer;
}