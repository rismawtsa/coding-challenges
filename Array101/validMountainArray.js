/**
 * https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3251/
 *
 * Given an array of integers arr, return true if and only if it is a valid mountain array.
 *
 * Recall that arr is a mountain array if and only if:
 * arr.length >= 3
 *
 * There exists some i with 0 < i < arr.length - 1 such that:
 * arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
 * arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 * example
 * Input: arr = [2,1] Output: false
 */

/**
 *
 * @param {number[]} arr
 * @returns {boolean}
 */
const validMountainArrayV1 = function (arr) {
  if (arr.length < 3) return false;

  let increase = false,
    decrease = false;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i]) return false;
    if (decrease && arr[i - 1] < arr[i]) return false;

    if (arr[i - 1] < arr[i]) {
      increase = true;
    } else {
      decrease = true;
    }
  }

  if (increase && decrease) return true;
  else return false;
};

// inspired by sriharik's comment
const validMountainArrayV2 = function (arr) {
  if (arr.length < 3) return false;

  let increase = arr[0] < arr[1];
  if (!increase) return false;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i]) return false;

    if (increase) {
      if (arr[i - 1] > arr[i]) increase = false; // reached the peak
    } else {
      if (arr[i - 1] < arr[i]) return false;
    }
  }

  return !increase; // should reach the peak
};

// inspired by code at the solutions tab
const validMountainArrayV3 = function (arr) {
  let n = arr.length,
    i = 0;

  // walk up
  while (i + 1 < n && arr[i] < arr[i + 1]) i++;

  // i==0 means no increasing
  // i==n-1 no decreasing
  // the element of the mountain array should be strictly increasing then strictly decreasing
  if (i == 0 || i == n - 1) return false;

  // walk down
  while (i + 1 < n && arr[i] > arr[i + 1]) i++;

  return i == n - 1;
};

module.exports = {
  validMountainArrayV1,
  validMountainArrayV2,
  validMountainArrayV3,
};
