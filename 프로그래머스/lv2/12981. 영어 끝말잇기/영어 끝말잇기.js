function solution(n, words) {
    const result = [0, 0];
    const wordSet = new Set();
    wordSet.add(words[0]);
    
    let prevWord = words[0].slice(-1);
    for (let i = 1; i < words.length; i++) {
        if (wordSet.has(words[i]) || words[i][0] !== prevWord) {
            result[0] = (i + 1) % n || n;
            result[1] = Math.ceil((i + 1) / n);
            return result;
        }
        wordSet.add(words[i]); 
        prevWord = words[i].slice(-1);
    }
    
    return result;
}