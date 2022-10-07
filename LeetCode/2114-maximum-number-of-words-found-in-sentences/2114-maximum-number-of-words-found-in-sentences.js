/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
  return sentences.reduce((acc, cur) => {
    const length = cur.split(" ").length;
    return Math.max(acc, length);
  }, 0);
};