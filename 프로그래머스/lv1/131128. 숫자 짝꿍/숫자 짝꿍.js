function solution(X, Y) {
  const commonNumbers = [];
  const setCommonNumbers = (num, times) => {
    for (let i = 0; i < times; i++) commonNumbers.push(num);
  };
  const getCommonNumbers = (x, y) => {
    for (let i = 0; i < 10; i++) {
      const countX = [...x].filter(s => +s === i).length;
      const countY = [...y].filter(s => +s === i).length;
      const count = countX === countY ? countX : Math.min(countX, countY);
      setCommonNumbers(i, count);
    }
  };
  X.length < Y.length ? getCommonNumbers(X, Y) : getCommonNumbers(Y, X);
  if (!commonNumbers.length) return "-1";
  return commonNumbers.every(x => x === 0)
    ? "0"
    : commonNumbers.sort((a, b) => b - a).join("");
}
