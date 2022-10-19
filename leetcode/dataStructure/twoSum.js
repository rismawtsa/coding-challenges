/**
 * https://leetcode.com/problems/two-sum/
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

/**
 * Time: O(N^2)
 * Space: O(1)
 */
const twoSumV1 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

/** using hashmap table
 * Time: O(N)
 * Space: O(N)
 */
const twoSumV2 = function (nums, target) {
  let obj = {}; // store the past element

  for (let i = 0; i < nums.length; i++) {
    const b = nums[i];
    a = target - b;
    if (obj[a] !== undefined) return [obj[a], i];
    obj[b] = i;
  }
};

module.exports = { twoSumV1, twoSumV2 };
