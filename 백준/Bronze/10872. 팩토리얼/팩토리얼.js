const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString().trim();

let answer = 1;
for (let i = Number(n); i > 0; i--) {
  answer *= i;
}

console.log(answer);