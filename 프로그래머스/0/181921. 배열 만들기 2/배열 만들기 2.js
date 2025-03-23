function solution(l, r) {
    let result = []
    for (let i = l; i <= r; i++) {
        const arr = String(i).split('')
        if (arr.every(s => s === '5' || s === '0')) {
            result.push(i)
        }
    }
    return result.length ? result : [-1]
}