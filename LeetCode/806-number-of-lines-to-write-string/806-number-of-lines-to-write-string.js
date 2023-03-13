/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let lines = 1;
    let totalWide = 0;
    for (let i = 0; i < s.length; i++) {
        const wide = widths[s[i].charCodeAt(0) - 97];
        if (totalWide + wide <= 100) totalWide += wide;
        else {
            totalWide = wide;
            lines++;
        }
    }
    return [lines, totalWide];
};