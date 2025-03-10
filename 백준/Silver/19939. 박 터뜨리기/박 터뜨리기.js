const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const [n, k] = input.split(" ").map(Number);
const sum = (k * (1 + k)) / 2;

if (n < sum) return console.log(-1);

if ((n - sum) % k === 0) return console.log(k - 1);
console.log(k);