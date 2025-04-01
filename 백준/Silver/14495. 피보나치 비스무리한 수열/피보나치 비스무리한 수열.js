const fs = require("fs")
const n = Number(fs.readFileSync('./dev/stdin').toString().trim())

const arr = [0, 1, 1, 1].map(BigInt)

for (let i = 4; i <= n; i++) {
  arr[i] = arr[i - 1] + arr[i - 3]
}

console.log(arr[n].toString())