function solution(n) {
  const count = getCount(n);
  while (true) {
    if (count === getCount(++n)) return n;
  }
}

function getCount(n) {
  return n
    .toString(2)
    .split("")
    .filter(s => s === "1").length;
}
