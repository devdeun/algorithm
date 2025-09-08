const fs = require("fs");
const n = +fs.readFileSync("/dev/stdin").toString().trim();

let line;
let index;
for (let i = 1; i <= n; i++) {
  const sum = (i * (1 + i)) / 2;
  if (sum >= n) {
    line = i;
    index = sum - n;
    break;
  }
}

let x = 0;
let y = 0;
if (line % 2) {
  x = 1 + index;
  y = line - index;
} else {
  x = line - index;
  y = 1 + index;
}

console.log(`${x}/${y}`);