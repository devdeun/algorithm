const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const remainders = input.map((num) => +num % 42);
const remainderSet = new Set(remainders);
console.log(remainderSet.size);
