function solution(s) {
    let letters = [];
    return s.split("").map((letter, i) => {
        const index = letters.lastIndexOf(letter);
        letters.push(letter);
        return index > -1 ? i - index: index;
    });
}