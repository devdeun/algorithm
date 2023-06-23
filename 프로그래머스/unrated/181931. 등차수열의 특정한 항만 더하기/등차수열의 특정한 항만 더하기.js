function solution(a, d, included) {
    return included.reduce((acc, cur, i) => {
        if (!cur) return acc;
        return acc + a + d * i;
    }, 0);
}