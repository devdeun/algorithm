const fs = require("fs");
const [n, k] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let arr = Array.from({ length: n }, (_, i) => i + 1);
let result = [];
let index = 0;

while (arr.length > 0) {
  index = (index + k - 1) % arr.length;
  result.push(arr.splice(index, 1)[0]);
}

console.log("<" + result.join(", ") + ">");