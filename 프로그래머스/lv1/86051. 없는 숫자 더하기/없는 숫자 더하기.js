function solution(numbers) {
    let answer;
    const totalSum = 45;
    answer = totalSum - numbers.reduce((a, b) => a + b, 0);
    
    return answer;
}