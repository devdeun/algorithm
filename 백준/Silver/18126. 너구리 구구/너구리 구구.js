const fs = require('fs')
const [N, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const n = Number(N)

function solve() {
  if (n === 1) {
    console.log(0)
    return
  }

  const graph = Array(n + 1)
    .fill()
    .map(() => [])

  for (let i = 0; i < arr.length; i++) {
    const [a, b, c] = arr[i].split(' ').map(Number)
    graph[a].push({ to: b, distance: c })
    graph[b].push({ to: a, distance: c })
  }

  function bfs(start) {
    const distances = Array(n + 1).fill(-1)
    distances[start] = 0

    const queue = [{ room: start, distance: 0 }]

    while (queue.length > 0) {
      const { room, distance } = queue.shift()

      for (const neighbor of graph[room]) {
        if (distances[neighbor.to] === -1) {
          const newDistance = distance + neighbor.distance
          distances[neighbor.to] = newDistance
          queue.push({ room: neighbor.to, distance: newDistance })
        }
      }
    }

    return Math.max(...distances)
  }

  console.log(bfs(1))
}

solve()
