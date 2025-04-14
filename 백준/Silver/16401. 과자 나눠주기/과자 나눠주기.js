const fs = require("fs")
const [[m, n], arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(s => s.split(" ").map(Number))

let left = 1
let right = Math.max(...arr)
let maxLength = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2)
  const count = arr.reduce((acc, cur) => acc + Math.floor(cur / mid), 0)

  if (count >= m) {
    maxLength = mid
    left = mid + 1
  } else {
    right = mid - 1
  }
}

console.log(maxLength)