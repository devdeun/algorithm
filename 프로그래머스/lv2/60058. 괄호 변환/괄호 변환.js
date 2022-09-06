function solution(p) {
    return getBalancedString(p);
}

function getBalancedString(p) {
    const [u, v] = separateP(p);
    const isBalancedV = isBalancedString(v);
    let balancedString = "";
    if (isBalancedString(u)) {
        return isBalancedV ? u + v : u + getBalancedString(v);
    } else {
        const str = u.slice(1, -1).split("").map(b => b === "(" ? ")": "(").join("");
        return isBalancedV ? `(${v})${str}` : `(${getBalancedString(v)})${str}`;
    }
}

function separateP(p) {
    let u = "";
    let v = "";
    let balance = 0;
    let isBalanced = false;
    p.split("").forEach(bracket => {
        if (!bracket) return [u, v];
        balance += bracket === "(" ? 1 : -1;
        isBalanced ? v += bracket : u += bracket;
        if (!balance) isBalanced = true;
    });
    
    return [u, v];
}

function isBalancedString(p) {
    const stack = [];
    p.split("").forEach(bracket => {
        if (stack[stack.length - 1] === "(" && bracket === ")") {
            stack.pop();
        } else {
            stack.push(bracket);
        }
    });

    return stack.length ? false : true;
}