/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const arr = [];
    for (let i = 0; i <= n; i++) {
        const binary = i.toString(2);
        arr.push(binary.replace(/0/g, "").length);
    }
    return arr;
}; 