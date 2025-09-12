const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let max = -1;
let result = "";
for (let i = 0; i < 9; i++) {
  const arr = input[i].split(" ").map(Number);

  for (let j = 0; j < 9; j++) {
    if (arr[j] > max) {
      max = arr[j];
      result = `${i + 1} ${j + 1}`;
    }
  }
}

console.log(max);
console.log(result);