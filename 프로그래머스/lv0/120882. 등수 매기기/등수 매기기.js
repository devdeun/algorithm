function solution(score) {
    const averageScore = score.map(([eng, math]) => (eng + math) / 2);
    const sortedAverageScore = [...averageScore].sort((a, b) => b - a);
    return averageScore.map(s => sortedAverageScore.indexOf(s) + 1); 
}