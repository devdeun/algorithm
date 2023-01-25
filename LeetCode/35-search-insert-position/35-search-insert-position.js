/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) { 
    const targetIndex = nums.indexOf(target);
    if (targetIndex > -1) return targetIndex;
    else {
        nums.push(target);
        return nums.sort((a, b) => a - b).indexOf(target);
    };
};