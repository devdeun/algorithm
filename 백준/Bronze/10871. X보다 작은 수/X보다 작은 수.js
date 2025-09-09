const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [_, x] = input[0].split(" ").map(Number);
const arr = input[1].split(" ");
console.log(arr.filter((n) => +n < x).join(" "));