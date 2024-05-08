const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = new Array(n).fill(0);
for (let idx = 1; idx < m + 1; idx++) {
  let [i, j, k] = input[idx].split(" ").map(Number);
  for (; i <= j; i++) {
    arr[i - 1] = k;
  }
}

console.log(arr.join(" "));
