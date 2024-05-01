const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.slice(1).sort((a, b) => +a.split(" ")[0] - +b.split(" ")[0]);
console.log(arr.join("\n"));
