const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);

let pages = 1;
let currentMin;
for (let i = 0; i < arr.length; i++) {
  if (currentMin * 2 <= arr[i]) {
    currentMin = arr[i];
    pages++;
  }
  if (!currentMin) currentMin = arr[i];
}

console.log(pages);
