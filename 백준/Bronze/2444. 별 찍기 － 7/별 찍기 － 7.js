const fs = require("fs");
const num = +fs.readFileSync("/dev/stdin").toString().trim();
let count = 1;
const max = (num - 1) * 2 + 1;

for (let i = 1; i <= 2 * num - 1; i++) {
  const blank = (max - count) / 2;
  console.log(" ".repeat(blank) + "*".repeat(count));
  count += i < num ? 2 : -2;
}