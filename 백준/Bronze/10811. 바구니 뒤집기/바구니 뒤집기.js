const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = new Array(n).fill(0).map((_, i) => i + 1);

for (let idx = 1; idx < input.length; idx++) {
  const [i, j] = input[idx].split(" ").map(Number);
  const temp = arr.slice(i - 1, j).reverse();
  arr.splice(i - 1, j - i + 1, ...temp);
}

console.log(arr.join(" "));
