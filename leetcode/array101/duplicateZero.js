/*
https://leetcode.com/problems/duplicate-zeros/
*/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 *
 * time complexity O(n^2), space O(1)
 */
const duplicateZerosInPlaceV1 = function (arr) {
  let i = 0;
  let fixLength = arr.length - 1;
  while (i < fixLength) {
    if (arr[i] === 0) {
      // shift to the right to make a empty space after the index of 0
      for (let j = fixLength - 1; j > i; j--) {
        arr[j + 1] = arr[j];
      }
      arr[i + 1] = 0;
      i++;
    }
    i++;
  }
};

/**
 * solution from leetcode
 * time complexity O(n), space O(1)
 */
const duplicateZerosInPlaceV2 = function (arr) {
  let possibleDups = 0; // the number of zeros would be duplicate
  let length = arr.length - 1;

  for (let left = 0; left <= length - possibleDups; left++) {
    if (arr[left] === 0) {
      // Edge case: This zero can't be duplicated. We have no more space,
      // as left is pointing to the last element which could be included
      if (left === length - possibleDups) {
        // For this zero we just copy it without duplication.
        arr[length] = 0;
        length--;
        break;
      }
      possibleDups++;
    }
  }

  let last = length - possibleDups;
  for (let i = last; i >= 0; i--) {
    if (arr[i] === 0) {
      arr[i + possibleDups] = 0;
      possibleDups--;
      arr[i + possibleDups] = 0;
    } else {
      arr[i + possibleDups] = arr[i];
    }
  }
};

/**
 * @param {number[]} arr
 * @return {number[]} result
 * time complexity O(n), space O(1)
 */
const duplicateZerosCopy = function (arr) {
  const result = [];
  let i = 0;
  let s = 0;
  while (i < arr.length) {
    // i < arr.length - 1, we don't want to duplicate 0 at the end of array, it will increase the length of the array
    if (arr[s] === 0 && i < arr.length - 1) {
      result[i] = 0;
      i++;
      result[i] = 0;
    } else {
      result[i] = arr[s];
    }
    i++;
    s++;
  }

  return result;
};

module.exports = {
  duplicateZerosInPlaceV1,
  duplicateZerosInPlaceV2,
  duplicateZerosCopy,
};
