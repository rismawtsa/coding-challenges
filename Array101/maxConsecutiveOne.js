/* Given a binary array nums, return the maximum number of consecutive 1's in the array.
link: https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3238/

example:
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Constraints:
1 <= nums.length <= 105
nums[i] is either 0 or 1.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
  let arr = [0];
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      arr[j] = arr[j] + 1;
    } else {
      arr.push(0);
      j++;
    }
  }

  arr.sort((a, b) => b - a);
  return arr[0];
};

module.exports = findMaxConsecutiveOnes;
