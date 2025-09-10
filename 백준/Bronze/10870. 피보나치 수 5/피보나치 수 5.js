const fs = require("fs");
const n = +fs.readFileSync("/dev/stdin").toString().trim();
const fb = [];

for (let i = 0; i <= n; i++) {
  fb.push(i === 0 || i === 1 ? i : fb[i - 2] + fb[i - 1]);
}

console.log(fb[fb.length - 1]);