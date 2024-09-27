function solution(info, edges) {
    const graph = Array.from(Array(info.length), () => Array(info.length).fill(null))
    const visited = Array.from(Array(info.length), () => Array(info.length).fill(false))
    let maxTotal = 0
    
    edges.forEach(([a, b]) => {
        graph[a][b] = info[b] === 0 ? 1 : -1
        graph[b][a] = 0
        if (a === 0) visited[b][a] = true 
    })
    
    console.log(graph)
    
//     const dfs = (v, total) => {
//         if (v === info.length) return total
        
//         let maxTotal = 0
//         for (let i = 0; i < info.length; i++) {
//             const value = graph[v][i]
            
//             if (value === null) continue
//             if (total + value <= 0) continue
            
//             if (!visited[v][i]) {
//                 visited[v][i] = true
//                 maxTotal = Math.max(maxTotal, dfs(i ,total + value))
//             } else {
//                 maxTotal = Math.max(maxTotal, dfs(i ,total))
//             }
            
//             if (!(v === 0 && i === 0)) visited[v][i] = false
//         }
        
//         return maxTotal
//     }
    
    for (let i = 0; i < graph.length; i++) {
        // const total = dfs(i, 1)
    }
    
    return;
}