function solution(s) {
    const words = [];
    let currentSpell;
    let count = 0
    let startIndex = 0;
    s.split("").forEach((spell, i) => {
        if (!count) currentSpell = spell;
        count += spell === currentSpell ? 1 : -1;
        if (!count) {
            words.push(s.slice(startIndex, i + 1));
            startIndex = i + 1;
        } else if (i === s.length - 1) words.push(s.slice(startIndex, i + 1));
    });
    return words.length;
}