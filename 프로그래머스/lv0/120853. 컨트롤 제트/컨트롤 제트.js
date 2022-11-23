function solution(s) {
    const numStack = [];
    s.split(" ").forEach(s => s === "Z" ? numStack.pop() : numStack.push(+s));
    return numStack.reduce((acc, cur) => acc + cur, 0);
}