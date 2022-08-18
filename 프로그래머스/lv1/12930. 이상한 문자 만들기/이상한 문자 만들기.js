function solution(s) {
    const replacedWords = s.split(" ").map(word => {
        return word.split("").map((str, i) => {
            return i % 2 ? str.toLowerCase(): str.toUpperCase();
        }).join("");
    });
    
    return replacedWords.join(" ");
}