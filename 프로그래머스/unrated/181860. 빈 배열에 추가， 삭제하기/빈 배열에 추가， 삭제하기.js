function solution(arr, flag) {
    const x = [];
    arr.forEach((num, i) => {
        if (flag[i]) {
            for (let j = 0; j < num * 2; j++) x.push(num);
        } else {
            for (let j = 0; j < num; j++) x.pop();
        }
    })
    return x;
}