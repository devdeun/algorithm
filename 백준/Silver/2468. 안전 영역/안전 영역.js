const fs = require("fs")
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().split("\n")
const areaInfo = arr.map(s => s.split(" ").map(Number))
const maxHeight = Math.max(...areaInfo.flat())

const setSafeAreas = (areas, x, y) => {
  if (!areas[x][y]) return

  areas[x][y] = 0
  if (0 <= x - 1) setSafeAreas(areas, x - 1, y)
  if (0 <= y - 1) setSafeAreas(areas, x, y - 1)
  if (x + 1 < Number(n)) setSafeAreas(areas, x + 1, y)
  if (y + 1 < Number(n)) setSafeAreas(areas, x, y + 1)
}

let maxSafeArea = 1
for (let h = 1; h < maxHeight; h++) {
  const safeAreas = areaInfo.map(arr => arr.map(l => l <= h ? 0 : 1)) 
  let count = 0;
  for (let x = 0; x < Number(n); x++) {
    for (let y = 0; y < Number(n); y++) {
      if (safeAreas[x][y]) {
        setSafeAreas(safeAreas, x, y)
        count++
      }
    }
  }

  maxSafeArea = Math.max(maxSafeArea, count)
}

console.log(maxSafeArea)