const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const arrow = Array(n + 1).fill(0);

let count = 0;

for (let i = 0; i < n; i++) {
  const current = arr[i];
  if (arrow[current] > 0) {
    arrow[current] -= 1;
    arrow[current - 1] += 1;
  } else {
    arrow[current - 1] += 1;
    count++;
  }
}

console.log(count)