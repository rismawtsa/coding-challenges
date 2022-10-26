/**
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/submissions/
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as
 * many times as it shows in both arrays and you may return the result in any order.
 *
 * example:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2,2]
 */

// first try, before I realized that I can added up the value of the hash table
const intersectV1 = function (nums1, nums2) {
  let objNums1 = {},
    arr = [];

  nums1.forEach((v, i) => {
    objNums1[i] = [v, true];
  });

  for (let i = 0; i < nums2.length; i++) {
    let key1 = Object.keys(objNums1).find(
      (key) => objNums1[key][0] === nums2[i] && objNums1[key][1]
    );
    if (key1 && objNums1[key1][1]) {
      arr.push(nums2[i]);
      objNums1[key1][1] = false;
    }
  }
  return arr;
};

// O(n+m), n = nums1.length, m = nums2.length
const intersectV2 = function (nums1, nums2) {
  let objNums1 = {},
    arr = [];

  nums1.forEach((v, i) => {
    if (objNums1[v]) objNums1[v]++;
    else objNums1[v] = 1;
  });

  for (let i = 0; i < nums2.length; i++) {
    if (objNums1[nums2[i]]) {
      arr.push(nums2[i]);
      objNums1[nums2[i]]--;
    }
  }
  return arr;
};

module.exports = { intersectV1, intersectV2 };
