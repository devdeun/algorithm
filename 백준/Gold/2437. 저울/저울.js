const fs = require("fs")
const [n, str] = fs.readFileSync("/dev/stdin").toString().trim().split("\n")
const arr = str.split(" ").map(Number).sort((a, b) => a - b)

let sum = 1
for (let i = 0; i < n; i++) {
  if (arr[i] > sum) break
  sum += arr[i]
}

console.log(sum)