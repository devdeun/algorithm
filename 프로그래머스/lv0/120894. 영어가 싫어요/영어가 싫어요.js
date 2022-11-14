function solution(numbers) {
    const engNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let temp = "";
    let result = "";
    for (let i = 0; i < numbers.length; i++) {
        temp += numbers[i];
        if (engNumbers.indexOf(temp) > -1) {
            result += engNumbers.indexOf(temp);
            temp = "";
        }
    }
    return +result;
}