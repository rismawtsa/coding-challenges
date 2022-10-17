/**
 * https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3231/
 * Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist
 * return the maximum number.
 *
 * example:
 * Input: nums = [3,2,1]
 * Output: 1
 * Explanation:
 * The first distinct maximum is 3.
 * The second distinct maximum is 2.
 * The third distinct maximum is 1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMaxV1 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }

  let k = 1,
    n = nums.length,
    a = nums[n - 1];
  for (let i = n - 2; i >= 0 && k < 3; i--) {
    if (nums[i] !== a) {
      a = nums[i];
      k++;
    }
  }

  if (k < 3) return nums[n - 1];
  else return a;
};

/** using built-in sort function
 */
const thirdMaxV2 = (nums) => {
  nums.sort((a, b) => b - a);

  let elemCounted = 1,
    prevElem = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== prevElem) {
      prevElem = nums[i];
      elemCounted++;
    }

    if (elemCounted === 3) return prevElem;
  }

  return nums[0];
};

/**
 * Using 3 pointers
 */
const thirdMaxV3 = (nums) => {
  let firstMax = [0, false],
    secondMax = [0, false],
    thirdMax = [0, false];

  for (let i = 0; i < nums.length; i++) {
    if (
      (firstMax[1] && firstMax[0] === nums[i]) ||
      (secondMax[1] && secondMax[0] === nums[i]) ||
      (thirdMax[1] && thirdMax[0] === nums[i])
    )
      continue;

    if (!firstMax[1] || firstMax[0] <= nums[i]) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = [nums[i], true];
    } else if (!secondMax[1] || secondMax[0] <= nums[i]) {
      thirdMax = secondMax;
      secondMax = [nums[i], true];
    } else if (!thirdMax[1] || thirdMax[0] <= nums[i]) {
      thirdMax = [nums[i], true];
    }
  }

  if (!thirdMax[1]) return firstMax[0];

  return thirdMax[0];
};
module.exports = { thirdMaxV1, thirdMaxV2, thirdMaxV3 };
