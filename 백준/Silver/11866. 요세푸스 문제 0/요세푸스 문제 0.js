const fs = require("fs");
const [n, k] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const state = new Array(n).fill(false);
const arr = [];
let idx = 0;
while (arr.length < n) {
  let count = 0;
  while (true) {
    if (state[idx] === false) {
      count++;
    }
    if (count === k) {
      arr.push(idx + 1);
      state[idx] = true;
      break;
    }
    idx = (idx + 1) % n;
  }
}

console.log(`<${arr.join(", ")}>`);