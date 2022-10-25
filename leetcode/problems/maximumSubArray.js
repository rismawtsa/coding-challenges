/**
 * https://leetcode.com/problems/maximum-subarray/?envType=study-plan&id=data-structure-i
 *
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and
 * return its sum.
 * A subarray is a contiguous part of an array
 *
 * example:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 */

// brute force
const maxSubArrayV1 = (nums) => {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    let currSum = 0;
    for (let j = i; j < nums.length; j++) {
      currSum += nums[j];
      if (currSum > max) max = currSum;
    }
  }

  return max;
};

// kadane's algorithm
const maxSubArrayV2 = (nums) => {
  let max = Number.MIN_SAFE_INTEGER,
    sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum > max) max = sum;
    if (sum < 0) sum = 0;
  }

  return max;
};

module.exports = { maxSubArrayV1, maxSubArrayV2 };

console.log(maxSubArrayV1([5, 4, -1, 7, 8])); // 23
console.log(maxSubArrayV1([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
