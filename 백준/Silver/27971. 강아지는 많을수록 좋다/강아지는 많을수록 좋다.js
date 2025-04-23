
const fs = require('fs')
const [[n, m, a, b], ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((s) => s.split(' ').map(Number))

const forbiddenRanges = []
for (let i = 0; i < arr.length; i++) {
  const [l, r] = arr[i]
  forbiddenRanges.push([l, r])
}

const forbidden = new Array(n + 1).fill(false)
for (const [l, r] of forbiddenRanges) {
  for (let i = l; i <= r; i++) {
    forbidden[i] = true
  }
}

if (forbidden[n]) {
  console.log(-1)
  process.exit(0)
}

const dp = new Array(n + 1).fill(Infinity)
dp[0] = 0

for (let i = 0; i < n; i++) {
  if (dp[i] === Infinity) continue

  const nextA = i + a
  if (nextA <= n) {
    if (!forbidden[nextA]) {
      dp[nextA] = Math.min(dp[nextA], dp[i] + 1)
    } else {
      dp[0] = Math.min(dp[0], dp[i] + 1)
    }
  }

  const nextB = i + b
  if (nextB <= n) {
    if (!forbidden[nextB]) {
      dp[nextB] = Math.min(dp[nextB], dp[i] + 1)
    } else {
      dp[0] = Math.min(dp[0], dp[i] + 1)
    }
  }
}

if (dp[n] === Infinity) {
  console.log(-1)
} else {
  console.log(dp[n])
}
