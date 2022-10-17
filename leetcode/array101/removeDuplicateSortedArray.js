/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element
 * appears only once. The relative order of the elements should be kept the same.
 *
 * Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the
 * first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements
 * of nums should hold the final result. It does not matter what you leave beyond the first k elements.
 *
 * Return k after placing the final result in the first k slots of nums.
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory
 *
 * Custom Judge:
 * The judge will test your solution with the following code:
 *
 * int[] nums = [...]; // Input array
 * int[] expectedNums = [...]; // The expected answer with correct length
 * int k = removeDuplicates(nums); // Calls your implementation
 * assert k == expectedNums.length;
 * for (int i = 0; i < k; i++) {
 *   assert nums[i] == expectedNums[i];
 * }
 * If all assertions pass, then your solution will be accepted.
 *
 * Example:
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicatesV1 = function (nums) {
  let i = 0;
  let j = 1;
  while (i < nums.length - 1) {
    if (nums[j - 1] !== nums[i + 1]) {
      nums[j++] = nums[i + 1];
    }
    i++;
  }

  return j;
};

const removeDuplicatesV2 = function (nums) {
  let i = 1;
  let j = 1;
  while (i < nums.length) {
    if (nums[i - 1] !== nums[i]) {
      nums[j++] = nums[i];
    }
    i++;
  }

  return j;
};

module.exports = {
  removeDuplicatesV1,
  removeDuplicatesV2,
};