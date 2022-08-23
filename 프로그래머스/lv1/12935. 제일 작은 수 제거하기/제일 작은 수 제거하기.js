function solution(arr) {
    const minNumber = Math.min.apply(null, arr);
    return arr.length === 1 ? [-1] : arr.filter(num => num !== minNumber);
}