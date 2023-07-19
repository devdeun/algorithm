function solution(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1;
    }
    const arr1sum = arr1.reduce((a, c) => a + c, 0);
    const arr2sum = arr2.reduce((a, c) => a + c, 0);
    if (arr1sum === arr2sum) return 0;
    return arr1sum > arr2sum ? 1 : -1;
}