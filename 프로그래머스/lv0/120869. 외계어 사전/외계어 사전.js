function solution(spell, dic) {
    const word = spell.sort().join("");
    const filteredDic = dic.filter(s => s.split("").sort().join("").indexOf(word) > -1);
    return filteredDic.length ? 1 : 2;
}