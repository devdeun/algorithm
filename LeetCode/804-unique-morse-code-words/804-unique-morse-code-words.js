/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseTable = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const morseWords = words.map(word => {
        let morseWord = "";
        for (let i = 0; i < word.length; i++) {
            morseWord += morseTable[word[i].charCodeAt(0) - 97];
        }
        return morseWord;
    })
    return [...new Set(morseWords)].length;
};