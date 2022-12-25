function solution(dots) {
    const slopeList = [];
    for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            const [x1, y1] = dots[i];
            const [x2, y2] = dots[j];
            slopeList.push((y2 - y1) / (x2 - x1));
        }
    }
    return slopeList.length === new Set(slopeList).size ? 0 : 1;
}