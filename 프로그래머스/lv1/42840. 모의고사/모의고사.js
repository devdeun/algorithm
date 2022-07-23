function solution(answers) {
    const count = answers.length;
    const answerFormula1 = repeatArray([1, 2, 3, 4, 5], count / 5);
    const answerFormula2 = repeatArray([2, 1, 2, 3, 2, 4, 2, 5], count / 8);
    const answerFormula3 = repeatArray([3, 3, 1, 1, 2, 2, 4, 4, 5, 5], count / 10);
    const scores = [0, 0, 0];
    
    answers.forEach((answer, i) => {
        if (answer === answerFormula1[i]) { scores[0]++; };
        if (answer === answerFormula2[i]) { scores[1]++; };
        if (answer === answerFormula3[i]) { scores[2]++; };
    });
    
    const answer = [];
    const highScore = Math.max(...scores);
    scores.forEach((score, i) => {
       if(score === highScore) {
           answer.push(i + 1);
       } 
    });
    
    return answer;
}

function repeatArray(array, count) {
    return new Array(Math.ceil(count)).fill(array).flat();
}