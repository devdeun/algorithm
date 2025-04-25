const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = +input[0]
const map = input.slice(1).map((line) => line.split(' '))
const dx = [0, 1]
const dy = [1, 0]

const calc = (a, op, b) => {
  a = Number(a)
  b = Number(b)
  if (op === '+') return a + b
  if (op === '-') return a - b
  if (op === '*') return a * b
}

const isInRange = (x, y) => x >= 0 && x < N && y >= 0 && y < N

const maxDp = Array.from({ length: N }, () => Array(N).fill(-Infinity))
const minDp = Array.from({ length: N }, () => Array(N).fill(Infinity))

maxDp[0][0] = minDp[0][0] = Number(map[0][0])

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if ((i + j) % 2 === 0) {
      for (let d = 0; d < 2; d++) {
        const ni = i + dx[d]
        const nj = j + dy[d]
        if (!isInRange(ni, nj)) continue

        const op = map[ni][nj]
        for (let dd = 0; dd < 2; dd++) {
          const ni2 = ni + dx[dd]
          const nj2 = nj + dy[dd]
          if (!isInRange(ni2, nj2)) continue

          const num = Number(map[ni2][nj2])
          const maxVal = calc(maxDp[i][j], op, num)
          const minVal = calc(minDp[i][j], op, num)

          maxDp[ni2][nj2] = Math.max(maxDp[ni2][nj2], maxVal, minVal)
          minDp[ni2][nj2] = Math.min(minDp[ni2][nj2], maxVal, minVal)
        }
      }
    }
  }
}

console.log(`${maxDp[N - 1][N - 1]} ${minDp[N - 1][N - 1]}`)