const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const half = Math.floor(input.length / 2);
let result = 1;
for (let i = 0; i < half; i++) {
  if (input[i] !== input[input.length - i - 1]) {
    result = 0;
    break;
  }
}

console.log(result);
