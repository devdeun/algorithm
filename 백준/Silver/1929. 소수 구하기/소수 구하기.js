const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString()
const [m, n] = input.split(" ").map(Number)

const primeCheck = Array(n + 1)
const prime = []
primeCheck[0] = 1
primeCheck[1] = 1

for (let i = 2; i * i <= n; i++) {
  if (!primeCheck[i]) {
    for (let j = i * i; j <= n; j += i) {
      primeCheck[j] = 1
    }
  }
}

for (let i = m; i <= n; i++) {
  if (!primeCheck[i]) prime.push(i)
}

console.log(prime.join('\n'))