/** https://leetcode.com/problems/contains-duplicate/
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicateV1 = (nums) => {
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) return true;
  }

  return false;
};

const containsDuplicateV2 = (nums) => {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) return obj[nums[i]];
    else obj[nums[i]] = true;
  }

  return false;
};

module.exports = { containsDuplicateV1, containsDuplicateV2 };
