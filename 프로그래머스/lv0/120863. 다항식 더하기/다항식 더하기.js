function solution(polynomial) {
    let x = 0;
    let c = 0;
    polynomial.split(" + ").forEach(p => {
        if (p.includes("x")) x += parseInt(p) || 1;
        else c += parseInt(p);
    });    
    if (!x && !c) return "0";
    x = x === 1 ? "x": (x ? `${x}x`: "");
    c = c ? (x ? ` + ${c}` : c ): "";
    return x + c;
}