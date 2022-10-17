/**
 * https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3157/
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 *
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 */

const moveZeroes = (nums) => {
  let writePointer = 0;

  for (let readPointer = 0; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] !== 0) {
      nums[writePointer] = nums[readPointer];
      writePointer++;
    }
  }

  for (let i = writePointer; i < nums.length; i++) {
    nums[i] = 0;
  }
};

module.exports = {
  moveZeroes,
};
