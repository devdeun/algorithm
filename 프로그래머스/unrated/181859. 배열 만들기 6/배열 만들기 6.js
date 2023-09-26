function solution(arr) {
    const stk = [];
    let i = 0;
    while (i < arr.length) {
        if (stk.length && stk[stk.length - 1] === arr[i]) {
            stk.pop();
            i++;
        } else {
            stk.push(arr[i++]);
        }
    }
    return stk.length ? stk : [-1];
}