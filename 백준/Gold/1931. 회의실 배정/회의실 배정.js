const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = input.slice(1).map(str => str.split(" ").map(Number)).sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  return a[0] - b[0];
})

let count = 1;
let current = 0;

for (let i = 1; i < n; i++) {
  if (arr[current][1] <= arr[i][0]) {
    current = i;
    count++;
  }
}

console.log(count);