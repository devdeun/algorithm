function solution(score) {
    const averageScore =score.reduce((acc, cur) => {
        const [english, math] = cur;
        return [...acc, (english + math) / 2]
    }, []);
    const ranking = Array(score.length).fill(1);
    for (let i = 0; i < score.length; i++) {
        for (let j = 0; j < score.length; j++) {
            if (averageScore[i] < averageScore[j]) ranking[i]++;
        }
    }
    return ranking; 
}