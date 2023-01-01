function solution(X, Y) {
    const commonNumbers = [];
    const setCommonNumbers = (num, times) => {
        for (let i = 0; i < times; i++) commonNumbers.push(num);
    };
    const getCommonNumbers = (x, y) => {
        // const short = [...x].sort((a, b) => b - a);
        // const long = [...y].sort((a, b) => b - a);
        for (let i = 0; i < 10; i++) {
            const shortLength = [...x].filter(s => +s === i).length;
            const longLength = [...y].filter(s => +s === i).length;
            shortLength === longLength ? setCommonNumbers(i, shortLength) : setCommonNumbers(i, Math.min(shortLength, longLength));
        }
    }
    X.length < Y.length ? getCommonNumbers(X, Y) : getCommonNumbers(Y, X);
    if (!commonNumbers.length) return "-1";
    return commonNumbers.every(x => x === 0) ? "0" : commonNumbers.sort((a, b) => b - a).join("");
}