function solution(k, score) {
    let ranking = [];
    return score.map((num, i) => {
        ranking.push(num);
        ranking.sort((a, b) => b - a);
        return i < k ? ranking[ranking.length - 1] : ranking[k - 1];
    });
}