const fs = require("fs")
const [n, m] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number)

if (n === 1) console.log(1)
else if (n === 2) console.log(Math.min(4, Math.floor((m + 1) / 2)))
else if (m < 7) console.log(Math.min(4, m))
else console.log(m - 2)