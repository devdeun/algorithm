const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const set = new Set();
for (let i = 0; i < input.length; i++) {
  set.add(input[i] % 42);
}

console.log(set.size);

