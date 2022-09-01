function solution(citations) {
    let hIndex = 0;
    for (let h = 0; h < Math.max(...citations); h++) {
        const overH = citations.filter(num => num >= h).length;
        if (overH >= h && citations.length - overH <= h) {
            hIndex = h;
        }
    }
    return hIndex;
}