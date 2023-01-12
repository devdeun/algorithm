function solution(lines) {
    const lineNums = [];
    let length = 0;
    lines.forEach(([start, end]) => {
        for (let i = start; i < end; i++) {
            if (lineNums.includes(i)) {
                lineNums.splice(lineNums.indexOf(i), 1);
                length++;
            } else {
                lineNums.push(i);
            };
        }
    });
    return length;
}