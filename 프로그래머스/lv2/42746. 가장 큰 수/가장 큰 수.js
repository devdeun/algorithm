function solution(numbers) {
    const sortedNumbers = numbers.sort((a, b) => 
       parseInt(b + "" + a) - parseInt(a + "" + b)
    );
    const answer = sortedNumbers.join("");
    return answer[0] === "0" ? "0" : answer;
}