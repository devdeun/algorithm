const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

const maxNumber = Math.max(...input);
console.log(maxNumber);
console.log(input.indexOf(maxNumber) + 1);
