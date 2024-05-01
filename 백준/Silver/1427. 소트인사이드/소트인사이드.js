const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const arr = input
  .split("")
  .map(Number)
  .sort((a, b) => b - a);

console.log(arr.join(""));
