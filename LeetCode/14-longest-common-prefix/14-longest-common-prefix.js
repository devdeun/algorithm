/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    for (let i = 0; i < 200; i++) {
        const temp = strs.map(str => str[i]);
        if (temp[0] && temp.every(str => str === temp[0])) prefix += temp[0];
        else return prefix;
    }
};