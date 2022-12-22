function solution(t, p) {
    let count = 0;
    for (let i = 0; i < t.length; i++) {
        const sliced = t.slice(i, p.length + i);
        if (sliced.length < p.length) break;
        if (+sliced <= +p) count++;
    }
    return count;
}