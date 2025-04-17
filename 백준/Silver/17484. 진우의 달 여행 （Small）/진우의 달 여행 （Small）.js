const fs = require("fs")
const [[n, m], ...map] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(str => str.split(" ").map(Number))

const dx = [-1, 0, 1]
const dp = Array.from({ length: n }, () => Array.from({ length: m }, () => Array(3).fill(Infinity)))

for (let j = 0; j < m; j++) {
  for (let d = 0; d < 3; d++) {
    dp[0][j][d] = map[0][j]
  }
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j < m; j++) {
    for (let d = 0; d < 3; d++) {
      const prevJ = j + dx[d]
      if (prevJ < 0 || m <= prevJ) continue
      for (let prevD = 0; prevD < 3; prevD++) {
        if (d === prevD) continue
        dp[i][j][d] = Math.min(dp[i][j][d], dp[i - 1][prevJ][prevD] + map[i][j])
      }
    }
  }
}

const result = Math.min(...dp[n - 1].flat())
console.log(result)