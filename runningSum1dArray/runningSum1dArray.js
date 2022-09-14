/*
 * Source: leetcode's challenge - 1480. Running Sum of 1d Array
 * Link: https://leetcode.com/problems/running-sum-of-1d-array/
 */

const runningSum = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }

  return nums;
};

module.exports = runningSum;
