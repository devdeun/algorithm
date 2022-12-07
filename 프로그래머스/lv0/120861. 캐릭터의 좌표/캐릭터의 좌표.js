function solution(keyinput, board) {
    const result = [0, 0];
    const setResult = (i, num) => {
        if (Math.abs(result[i] + num) <= Math.floor(board[i]/2)) result[i] += num;
    };
    
    keyinput.forEach(key => {
        let index = 0;
        if (key === "up" || key === "down") index = 1;
        let addNum = 1;
        if (key === "left" || key === "down") addNum = -1;
        setResult(index, addNum);
    });
    return result;
}