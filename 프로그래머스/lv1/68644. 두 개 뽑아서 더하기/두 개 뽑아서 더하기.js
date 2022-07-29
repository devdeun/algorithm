function solution(numbers) {
    let answer;
    const sumSet = new Set();
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            sumSet.add(numbers[i] + numbers[j]);
        }
    }
    
    answer = [...sumSet].sort((a, b) => a - b);
    return answer;
}