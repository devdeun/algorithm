function solution(myString) {
    const l_ASCII_CODE = 108;
    let answer = ""
    for (let i = 0; i < myString.length; i++) {
        answer += myString.charCodeAt(i) < l_ASCII_CODE ? "l" : myString[i];
    }
    return answer;
}