function solution(age) {
    const ageNumbers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    return String(age).split("").reduce((acc, cur) => acc + ageNumbers[cur], "");
}