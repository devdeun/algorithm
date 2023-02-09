function solution(clothes) {
    let answer = 1;
    const clothesMap = new Map();
    clothes.forEach(([name, type]) => {
        if (!clothesMap.get(type)) clothesMap.set(type, [name]);
        else clothesMap.get(type).push(name);
    } );
    for (let [_, types] of clothesMap) answer *= types.length + 1;
    return answer - 1; 
}