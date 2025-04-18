const fs = require("fs")
const [n, m] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number)

const MOD = 1000000007;
const dp = new Array(n + 1).fill(0);
dp[0] = 1;

for (let i = 1; i <= n; i++) {
  dp[i] = (dp[i] + dp[i - 1]) % MOD;

  if (i >= m) {
    dp[i] = (dp[i] + dp[i - m]) % MOD;
  }
}

console.log(dp[n])