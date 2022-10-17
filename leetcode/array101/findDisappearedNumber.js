/**
 * https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3270/
 * Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all
 * the integers in the range [1,n] that do not appear in nums.
 *
 * example:
 * Input: nums = [4,3,2,7,8,2,3,1]
 * Output: [5,6]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbersV1 = function (nums) {
  const arr = [];
  for (let i = 1; i <= nums.length; i++) {
    let cond = false;
    for (let j = 0; j < nums.length; j++) {
      if (i === nums[j]) {
        cond = true;
        break;
      }
    }

    if (!cond) arr.push(i);
  }

  return arr;
};

// using set
const findDisappearedNumbersV2 = function (nums) {
  const set = new Set();
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) arr.push(i);
  }
  return arr;
};

const findDisappearedNumbersV3 = function (nums) {
  nums.forEach((num) => {
    const indexBasedOnThisValue = Math.abs(num) - 1;

    if (nums[indexBasedOnThisValue] > 0) {
      nums[indexBasedOnThisValue] = nums[indexBasedOnThisValue] * -1;
    }
  });

  let result = [];
  nums.forEach((num, index) => {
    if (num > 0) result.push(index + 1);
  });

  return result;
};

module.exports = {
  findDisappearedNumbersV1,
  findDisappearedNumbersV2,
  findDisappearedNumbersV3,
};
