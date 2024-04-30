const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input
  .slice(1)
  .map((s) => s.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[0] - b[0];
  });
console.log(arr.map((inner) => inner.join(" ")).join("\n"));
