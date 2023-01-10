function solution(board) {
    const setBoard = (indexList) => {
        for (let index = 0; index < indexList.length; index++) {
            const [i, j] = indexList[index];
            if (i < 0 || i > board.length - 1 || j < 0 || j > board.length - 1) continue;
            if (board[i][j] === 0) board[i][j] = 2;
        }
    };
    board.forEach((arr, i) => arr.forEach((num, j) => {
        if (num === 1) setBoard([
            [i, j-1], [i, j+1], [i-1, j-1], [i-1, j], [i-1, j+1], [i+1, j-1], [i+1, j], [i+1, j+1]
        ]);
    }));
    return board.reduce((acc, cur) => acc + cur.filter(n => !n).length, 0);
}