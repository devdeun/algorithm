function solution(survey, choices) {
    const types = ["R", "T", "C", "F", "J", "M", "A", "N"];
    const choicePoint = [3, 2, 1, 0, 1, 2, 3];
    const result = {};
    let answer = "";
    
    types.forEach(type => result[type] = 0);    
    survey.forEach((type, i) => {
        const [type1, type2] = type.split("");
        const choice = choices[i];
        const selected = choice < 4 ? type1 : type2;
        result[selected] += choicePoint[choice - 1];
    });
    
    for (let i = 0; i < types.length; i += 2) {
        const type1Point = result[types[i]];
        const type2Point = result[types[i + 1]];
        answer += type1Point >= type2Point ? types[i] : types[i + 1];
    }
    
    return answer;
}