const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ");
const target = input[2];
const result = arr.filter((s) => s === target).length;
console.log(result);
