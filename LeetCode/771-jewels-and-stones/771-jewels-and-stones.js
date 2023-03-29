/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const jewelsArr = jewels.split("");
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
       if (jewelsArr.includes(stones[i])) count++;  
    }
    return count;
};