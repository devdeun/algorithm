function solution(ineq, eq, n, m) {
    const ineqFlag = ineq === "<" ? n < m : n > m;
    const eqFlag = eq === "=" ? n === m : ineqFlag;
    return (ineqFlag || eqFlag) ? 1 : 0;
}