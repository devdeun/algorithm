const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = new Array(n).fill(1).map((n, i) => n + i);
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  const temp = arr[a - 1];
  arr[a - 1] = arr[b - 1];
  arr[b - 1] = temp;
}

console.log(arr.join(" "));
