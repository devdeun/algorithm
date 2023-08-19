function solution(board, k) {
    let sum = 0;
    board.forEach((row, i) => {
        sum += row.filter((num, j) => i + j <= k)
            .reduce((acc, cur) => acc + cur, 0);
    });
    return sum;
}