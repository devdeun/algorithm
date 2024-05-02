const fs = require("fs");
let n = +fs.readFileSync("/dev/stdin").toString().trim();

let count = 0;
while (n >= 0) {
  if (n % 5 === 0 || n === 0) {
    count += n / 5;
    break;
  }
  n -= 3;
  count++;
}

console.log(n < 0 ? -1 : count);
