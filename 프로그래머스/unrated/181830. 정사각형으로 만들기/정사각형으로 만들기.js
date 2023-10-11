function solution(arr) {
    const row = arr.length;
    const col = arr[0].length;
    if (row > col) {
        arr.forEach(rowArr => {
            for (let i = 0; i < row-col; i++) {
                rowArr.push(0);
            }
        })
    } else if (row < col) {
        const temp = new Array(col).fill(0);
        for (let i = 0; i < col-row; i++) {
            arr.push(temp);
        }
    }
    return arr;
}