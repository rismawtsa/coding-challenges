/* Given an array nums of integers, return how many of them contain an even number of digits.

Example:
Input: nums = [12, 6, 123, 7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
6 contains 1 digit (odd number of digits). 
123 contains 3 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.
 

Constraints:
1 <= nums.length <= 500
1 <= nums[i] <= 105

link: https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3237/
*/

const findNumbers = (nums) => {
  let evenNumberOfDigits = 0;

  nums.forEach((num) => {
    let numDigit = num.toString().length;
    if (numDigit % 2 === 0) evenNumberOfDigits++;
  });

  return evenNumberOfDigits;
};

module.exports = findNumbers;
