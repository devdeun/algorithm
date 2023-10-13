function solution(arr, k) {
    const numSet = new Set();
    arr.forEach(num => {
        if (numSet.size < k) numSet.add(num);
    });
    const result = [...numSet];
    while (result.length < k) result.push(-1);
    return result;
}