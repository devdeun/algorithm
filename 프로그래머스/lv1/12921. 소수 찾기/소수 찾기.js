function solution(n) {
    const answer = [];
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        const sqrt = Math.sqrt(i);
        
        for (let j = 0; answer[j] <= sqrt; j++) {
            if (!(i % answer[j])) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            answer.push(i);
        }
    }
    
    return answer.length;
}