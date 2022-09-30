/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  const arrayFromPermutation = [];
  nums.forEach(num => arrayFromPermutation.push(nums[num]));
  return arrayFromPermutation;
};
