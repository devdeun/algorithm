function solution(k, m, score) {
    const boxes = [];
    const scoreList = score.sort((a, b) => b - a);
    for (let i = 0; i < score.length; i+=m) {
        if (i + m <= score.length) boxes.push(scoreList.slice(i, i + m));
    }
    return boxes.reduce((acc, cur) => {
        return acc + Math.min(...cur) * m;
    }, 0);
}