const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let n = Number(input);
let i = 1;
while (n > 0) {
  if (n - i <= i) break;
  n -= i++;
}

console.log(i);
