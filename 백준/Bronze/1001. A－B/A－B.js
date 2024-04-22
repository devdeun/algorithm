const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [a, b] = input;
console.log(Number(a) - Number(b));
