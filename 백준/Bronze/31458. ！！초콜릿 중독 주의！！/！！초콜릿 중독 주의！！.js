const fs = require("fs")
const [length, ...arr] = fs.readFileSync("/dev/stdin").toString().split("\n")

for (let i = 0; i < length; i++) {
  let n = arr[i].includes('0') ? 0 : 1
  const [logicalNot, factorial] = arr[i].split(n)
  if (factorial) n = 1
  n = (logicalNot && logicalNot.length % 2) ? +!n : n
  console.log(n)
}