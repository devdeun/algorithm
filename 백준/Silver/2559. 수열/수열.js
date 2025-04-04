const fs = require("fs")
const [[n, k], arr] = fs.readFileSync("/dev/stdin").toString().split("\n").map(s => s.split(" ").map(Number))

let maxSum = temp = arr.slice(0, k).reduce((a, b) => a + b, 0)
for (let i = k; i < n; i++) {
  temp += arr[i] - arr[i - k]
  maxSum = Math.max(temp, maxSum)
}

console.log(maxSum)