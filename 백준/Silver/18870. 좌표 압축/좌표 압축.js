const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);
const uniqueArr = [...new Set(arr)];
uniqueArr.sort((a, b) => a - b);

const mapping = new Map();
for (let i = 0; i < uniqueArr.length; i++) {
  mapping.set(uniqueArr[i], i);
}

let answer = "";
for (const x of arr) {
  answer += mapping.get(x) + " ";
}

console.log(answer);
