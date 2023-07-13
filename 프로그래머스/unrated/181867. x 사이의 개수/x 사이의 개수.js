function solution(myString) {
    const result = [];
    let length = 0;
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === "x") {
            result.push(length);
            length = 0;
        } else {
            length++;
        }
        if (i === myString.length - 1) result.push(length);
    }
    return result;
}