const fs = require("fs");
const n = +fs.readFileSync("/dev/stdin").toString().trim();

let sum = 0;
let i = 0;
while (sum <= n) {
  i++;
  sum += i;
}

console.log(i - 1);
