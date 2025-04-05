const fs = require("fs")
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().split("\n")
const pattern = arr[0].split("")

for (let i = 1; i < n; i++) {
  for (let j = 0; j < pattern.length; j++) {
    if (pattern[j] !== arr[i][j]) pattern[j] = "?"
  }
}

console.log(pattern.join(""))