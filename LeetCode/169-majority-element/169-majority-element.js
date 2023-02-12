/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const majorityMap = new Map();
    nums.forEach(num => majorityMap.set(num, majorityMap.get(num) + 1 || 1));
    for (let [num, times] of majorityMap) {
        if (times >= Math.ceil(nums.length / 2)) return num;
    }
};