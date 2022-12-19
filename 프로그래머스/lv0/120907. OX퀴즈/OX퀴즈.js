function solution(quiz) {
    return quiz.map(q => {
        const [question, answer] = q.split("=");
        return eval(question) === +answer ? "O" : "X";
    });
}