const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const sum = input[1].split("").reduce((a, b) => a + +b, 0);
console.log(sum);
