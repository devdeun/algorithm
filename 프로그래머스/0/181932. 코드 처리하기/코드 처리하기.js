function solution(code) {
    let mode = 0   
    const ret = [...code].reduce((acc, cur, idx) => {
        if (cur === "1") {
            mode = mode === 0 ? 1 : 0
            return acc
        }
        
        return idx % 2 === mode ? acc + cur : acc
    }, "")
    
    return ret || "EMPTY"
}