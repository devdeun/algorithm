function solution(s1, s2) {
    const arrSet = new Set();
    s1.forEach(s => arrSet.add(s));
    s2.forEach(s => arrSet.add(s));
    return s1.length + s2.length - arrSet.size;
}