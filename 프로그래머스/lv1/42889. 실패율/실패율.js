function solution(N, stages) {
    let answer;
    const userObj = {};
    const failureObj = {};
    
    stages.forEach(stage => {
        userObj[stage] = userObj[stage] ? userObj[stage] + 1 : 1;
    });
    
    let total = stages.length;
    for (let i = 1; i < N + 1; i++) {
        const userCount = userObj[i] || 0;
        failureObj[i] = userCount / total || 0;
        total -= userCount;
    }
    
    answer = Object.keys(failureObj).sort((a, b) => failureObj[b] - failureObj[a]);
    return answer.map(num => +num);
}