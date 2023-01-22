/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let prevNum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (prevNum === nums[i]) {
            nums.splice(i, 1);
            i--;
        } else prevNum = nums[i];
    }
    return nums.length;
};