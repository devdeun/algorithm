const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let total = 0;
let acc = 0;
for (let i = 0; i < arr.length; i++) {
  acc += arr[i];
  total += acc;
}

console.log(total);
