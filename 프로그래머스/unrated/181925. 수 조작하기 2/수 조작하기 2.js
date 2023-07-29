function solution(numLog) {
    let prev;
    return numLog.reduce((acc, cur) => {
        if (prev === undefined) {
            prev = cur;
            return "";
        }
        let word;
        if (cur - prev === 1) word = "w";
        else if (prev - cur === 1) word = "s";
        else if (cur - prev === 10) word = "d";
        else if (prev - cur === 10) word = "a";
        prev = cur;
        return acc + word;
    }, "");
}