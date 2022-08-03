function solution(s) {
    let answer = s;
    let numToEng = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    numToEng.forEach((num, index) => {
        const regex = new RegExp(num, "g");
        answer = answer.replace(regex, index);
    });
    
    return +answer;
}