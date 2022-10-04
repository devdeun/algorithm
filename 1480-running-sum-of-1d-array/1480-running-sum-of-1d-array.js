/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let runningSum = 0;
  return nums.map(num => {
    runningSum += num;
    return runningSum;
  })
};