function solution(picture, k) {
    const result = []
    
    for (let i = 0; i < picture.length; i++) {
        const resizedPicture = [...picture[i]].map(s => s.repeat(k)).join("")
        for (let j = 0; j < k; j++) {
            result.push(resizedPicture)
        }
    }
    
    return result
}