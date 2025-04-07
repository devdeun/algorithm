const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(s => s.split(" ").map(Number))

const dx = [-1, 0, 1, -1, 1, -1, 0, 1]
const dy = [-1, -1, -1, 0, 0, 1, 1, 1]

const dfs = (map, i, j) => {
  if (!map[i][j]) return

  map[i][j] = 0
  for (let k = 0; k < dx.length; k++) {
    const x = i + dx[k]
    const y = j + dy[k]

    if (0 <= x && 0 <= y && x < map.length && y < map[0].length) {
      dfs(map, x, y)
    }
  }
}

for (let i = 0; i < input.length;) {
  const [w, h] = input[i]
  if (w === 0 && h === 0) break
  const map = input.slice(i + 1, i + 1 + h)

  let count = 0;
  for (let x = 0; x < h; x++) {
    for (let y = 0; y < w; y++) {
      if (!map[x][y]) continue
      dfs(map, x, y)
      count++
    }
  }  

  console.log(count)
  i += h + 1
}
