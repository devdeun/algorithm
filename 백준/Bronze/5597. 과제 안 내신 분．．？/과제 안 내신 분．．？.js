const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const sorted = input.map(Number).sort((a, b) => a - b);

let count = 0;
for (let i = 0; i <= sorted.length; i++) {
  if (i + 1 + count !== sorted[i]) {
    console.log(i + 1 + count++);
  }
  if (count === 2) break;
}