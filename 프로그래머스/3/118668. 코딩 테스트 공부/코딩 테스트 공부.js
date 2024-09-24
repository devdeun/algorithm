function solution(alp, cop, problems) {
    const maxAlpReq = Math.max(...problems.map(problem => problem[0]), alp)
    const maxCopReq = Math.max(...problems.map(problem => problem[1]), cop)
    
    if (maxAlpReq <= alp && maxCopReq <= cop) return 0
    
    const dp = Array.from(Array(maxAlpReq + 150), () => Array(maxCopReq + 150).fill(Infinity))
    dp[alp][cop] = 0
    
    const result = []
    
    for (let i = Math.min(alp, maxAlpReq); i <= maxAlpReq; i++) {
        for (let j = Math.min(cop, maxCopReq); j <= maxCopReq; j++) {
            let prevMinCost = Math.min(i > 0 ? dp[i - 1][j] : Infinity, j > 0 ? dp[i][j - 1] : Infinity)
            prevMinCost = prevMinCost === Infinity ? 0 : prevMinCost

            dp[i][j] = Math.min(dp[i][j], prevMinCost + 1)
            
            if (maxAlpReq <= i && maxCopReq <= j) result.push(dp[i][j]) 
            
            for (let k = 0; k < problems.length; k++) {
                const [alpReq, copReq, alpRwd, copRwd, cost] = problems[k]
                if (i < alpReq || j < copReq) continue
                
                dp[i + alpRwd][j + copRwd] = Math.min(dp[i + alpRwd][j + copRwd], dp[i][j] + cost)
                
                if (maxAlpReq <= i + alpRwd && maxCopReq <= j + copRwd) {
                    result.push(dp[i + alpRwd][j + copRwd])
                }
            }
        }
    }
    
    return Math.min(...result)
}