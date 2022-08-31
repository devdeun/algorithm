function solution(dartResult) {
    let answer = 0;
    const scores = dartResult.split(/S|D|T|\*|\#/g).filter(s => s).map(s => +s);
    const bonusAndOptions = dartResult.split(/[0-9]/g).filter(s => s);
    
    let prevScore = 0;
    scores.forEach((score, i) => {
        const [bonus, option] = bonusAndOptions[i].split("");
        let currScore = score;
        if (bonus === "D") currScore = Math.pow(score, 2);
        if (bonus === "T") currScore = Math.pow(score, 3);
        if (option === "#") currScore *= -1;
        if (option === "*") {
            currScore *= 2;
            prevScore *= 2;
        }
        answer += prevScore;
        prevScore = currScore;        
    })
    answer += prevScore;
    
    return answer;
}