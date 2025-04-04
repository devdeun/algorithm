const fs = require("fs")
const [input, str] = fs.readFileSync("/dev/stdin").toString().split("\n")

const [_, k] = input.split(" ").map(Number)
const arr = str.split(" ").map(Number)

let startIdx = 0
let endIdx = k
let maxSum = -Infinity
while (endIdx <= arr.length) {
  let sum = 0
  for (let i = startIdx; i < endIdx; i++) {
    sum += arr[i]
  }
  maxSum = Math.max(maxSum, sum)
  startIdx++
  endIdx++
}

console.log(maxSum)