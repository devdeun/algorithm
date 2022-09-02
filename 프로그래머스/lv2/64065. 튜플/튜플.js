function solution(s) {
    const result = new Set();
    const numList = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));
    numList
        .sort((a, b) => a.length - b.length)
        .forEach(list => list.forEach(num => result.add(num)));
    return [...result];
}