/**
 * https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3253/
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 *
 * example:
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
 * The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const mergeV1 = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2);

  for (let i = 0; i < nums1.length; i++) {
    for (let j = i + 1; j < nums1.length; j++) {
      if (nums1[i] > nums1[j]) {
        let temp = nums1[i];
        nums1[i] = nums1[j];
        nums1[j] = temp;
      }
    }
  }
};

const mergeV2 = (nums1, m, nums2, n) => {
  let i = m - 1;
  j = n - 1;
  k = m + n - 1;
  while (i >= 0 && j >= 0) {
    // coz of nums1 and nums2 are non-decreasing ordered array, so the last item of the array should be the highest number from each array. we fill from the latest index of nums1
    if (nums1[i] < nums2[j]) {
      nums1[k--] = nums2[j--];
    } else {
      nums1[k--] = nums1[i--];
    }
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
};

module.exports = { mergeV1, mergeV2 };
