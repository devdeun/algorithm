const fs = require("fs")
const [n, pattern, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

const [start, end] = pattern.split("*")
for (let i = 0; i < n; i++) {
  if (arr[i].length < start.length + end.length) {
    console.log("NE")
  } else {
    console.log(arr[i].startsWith(start) && arr[i].endsWith(end) ? "DA" : "NE")
  }
}