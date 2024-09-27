function solution(info, edges) {
    const graph = Array.from(Array(info.length), () => Array())
    edges.forEach(([a, b]) => {
        graph[a].push(b)
    })
    
    let maxSheep = 0
    const dfs = (vertex, sheep, wolf, prevVisitable = []) => {
        info[vertex] === 0 ? sheep++ : wolf++
        
        if (sheep - wolf <= 0) return
        if (maxSheep < sheep) maxSheep = sheep
        
        const visitable = [...prevVisitable.filter(v => v !== vertex), ...graph[vertex]]
        visitable.forEach(v => dfs(v, sheep, wolf, visitable))
    }
    
    dfs(0, 0, 0)
    
    return maxSheep
}