/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;
    let depth = ~~(n / 2);
    for (let i = 0; i < depth; i++) {
        let length = n - 2 * i - 1;
        let opp = n - 1 - i;
        for (let j = 0; j < length; j++) {
            let temp = matrix[i][i + j];
            matrix[i][i + j] = matrix[opp - j][i];
            matrix[opp - j][i] = matrix[opp][opp - j];
            matrix[opp][opp - j] = matrix[i + j][opp];
            matrix[i + j][opp] = temp;
        }
    }
    return matrix;
};