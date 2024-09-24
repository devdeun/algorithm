function solution(alp, cop, problems) {
    const maxAlpReq = Math.max(...problems.map(problem => problem[0]), alp)
    const maxCopReq = Math.max(...problems.map(problem => problem[1]), cop)
    
    if (maxAlpReq <= alp && maxCopReq <= cop) return 0
    
    const dp = new Array(maxAlpReq + 1).fill(null).map(() => new Array(maxCopReq + 1).fill(Infinity))
    dp[alp][cop] = 0
    
    for (let i = Math.min(alp, maxAlpReq); i <= maxAlpReq; i++) {
        for (let j = Math.min(cop, maxCopReq); j <= maxCopReq; j++) {
            const nextCost = dp[i][j] + 1
            if (i < maxAlpReq) dp[i + 1][j] = dp[i + 1][j] < nextCost ? dp[i + 1][j] : nextCost
            if (j < maxCopReq) dp[i][j + 1] = dp[i][j + 1] < nextCost ? dp[i][j + 1] : nextCost
            
            for (let k = 0; k < problems.length; k++) {
                const [alpReq, copReq, alpRwd, copRwd, cost] = problems[k]
                if (i < alpReq || j < copReq) continue
                
                const nextAlp = Math.min(i + alpRwd, maxAlpReq)
                const nextCop = Math.min(j + copRwd, maxCopReq)
                dp[nextAlp][nextCop] = Math.min(dp[nextAlp][nextCop], dp[i][j] + cost)
            }
        }
    }
    
    return dp[maxAlpReq][maxCopReq]
}