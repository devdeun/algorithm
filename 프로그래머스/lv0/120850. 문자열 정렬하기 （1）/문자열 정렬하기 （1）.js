function solution(my_string) {
    const newString = my_string.replace(/[^0-9]/gi, "");
    return newString.split("").map(s => +s).sort((a, b) => a - b);
}