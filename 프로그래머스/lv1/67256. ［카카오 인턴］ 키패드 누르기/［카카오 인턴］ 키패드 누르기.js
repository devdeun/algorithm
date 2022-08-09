function solution(numbers, hand) {
    const keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["*", 0, "#"]];
    let answer = "";
    let leftPos = [3, 0];
    let rightPos = [3, 2];
    
    numbers.forEach(number => {
        const leftKey = [1, 4, 7];
        if (leftKey.includes(number)) {
            leftPos = [leftKey.indexOf(number), 0];
            answer += "L";
        }
        const rightKey = [3, 6, 9];
        if (rightKey.includes(number)) {
            rightPos = [rightKey.indexOf(number), 2];
            answer += "R";
        }
        const middleKey = [2, 5, 8, 0];
        if (middleKey.includes(number)) {
            middlePos = [middleKey.indexOf(number), 1];
            const leftLength = Math.abs(middlePos[0] - leftPos[0]) + Math.abs(middlePos[1] - leftPos[1]);
            const rightLength = Math.abs(middlePos[0] - rightPos[0]) + Math.abs(middlePos[1] - rightPos[1]);
           
            if (leftLength < rightLength) {
                leftPos = [middleKey.indexOf(number), 1];
                answer += "L";
            }
            if (rightLength < leftLength) {
                rightPos = [middleKey.indexOf(number), 1];
                answer += "R";
            }
            if (rightLength === leftLength) {
                const position = hand[0].toUpperCase();
                if (position === "L") {
                    leftPos = [middleKey.indexOf(number), 1];
                    answer += "L";
                } else {
                    rightPos = [middleKey.indexOf(number), 1];
                    answer += "R";
                }
            }
        }
    });
    
    return answer;
}