/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  const shufflednums = [];
  for (let i = 0; i < n; i++) {
    shufflednums.push(nums[i]);
    shufflednums.push(nums[i + n]);
  }
  return shufflednums;
};