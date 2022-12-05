function solution(A, B) {
    if (A === B) return 0;
    const strArr = [...A, ...A];
    for (let i = 1; i < A.length; i++) {
        if (strArr.slice(i, i + A.length).join("") === B) return A.length - i;
    }
    return -1;
}