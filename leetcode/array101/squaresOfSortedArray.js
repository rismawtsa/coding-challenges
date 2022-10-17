/*  Squares of a Sorted Array
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 
Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.

Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

link: https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/
*/

// naive solution / Brute Force Approach
const sortedSquares = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let squares = nums[i] * nums[i];
    result.push(squares);
  }

  return result.sort((a, b) => a - b);
};

/* Optimized Approach
This approach is using the two pointer. Taking one pointer at the start of the array and then another pointer at the last of the array, and then compare these values
*/
const sortedSquaresOptimized = function (nums) {
  let result = [];

  // we will get the value in the left index and right index to compare
  let left = 0;
  let right = nums.length - 1;

  // the result index. we fill the array from the last index to store the highest number first
  let index = nums.length - 1;

  while (left <= right) {
    const sqrLeft = nums[left] * nums[left];
    const sqrRight = nums[right] * nums[right];

    if (sqrLeft > sqrRight) {
      result[index] = sqrLeft;
      left++;
    } else {
      result[index] = sqrRight;
      right--;
    }
    index--;
  }

  return result;
};

/* loops are produced of the optimized approach for the input is nums = [-4,-1,0,3,10]:
1. loop 1
left = 0, right = 4, index = 4, result = []
  - 0 <= 4, continue
  - sqrLeft = -4*-4 = 16, sqrRight = 10*10=100;
  - if(16>100) false
  - else result[4] = [0], right = 4 - 1 = 3;
  - index = 4 - 1 = 3;
2. loop 2
left = 0, right = 3, index = 3, result = [undefined, undefined, undefined, undefined, 100]
  - 0 <= 3, continue
  - sqrLeft = -4*-4 = 16, sqrRight = 3*3=9;
  - if(16>9) true, result[3] = 16, left = 0 + 1 = 1;
  - index = 3 - 1 = 2;
3. loop 3
left = 1, right = 3, index = 2, result = [undefined, undefined, undefined, 16, 100]
  - 1 <= 3, continue
  - sqrLeft = -1*-1 = 1, sqrRight = 3*3=9;
  - if(1>9) false, 
  - else result[2] = 9, right = 3 - 1 = 2;
  - index = 2 - 1 = 1;
4. loop 4
left = 1, right = 2, index = 1, result = [undefined, undefined, 9, 16, 100]
  - 1 <= 2, continue
  - sqrLeft = -1*-1 = 1, sqrRight = 0*0=0;
  - if(1>0) result[1] = 1, left = 1 + 1 = 2;
  - index = 1 - 1 = 0;
4. loop 5
left = 2, right = 2, index = 0, result = [undefined, 1, 9, 16, 100]
  - 2 <= 2, continue
  - sqrLeft = 0*0 = 0, sqrRight = 0*0=0;
  - if(0>0) false
  - else result[0] = 0, right = 2 - 1 = 1;
  - index = 0 - 1 = -1;

left = 2, right = 1, index = -1, result = [0, 1, 9, 16, 100]
2<=1 false, no more loop


time complexity = o(n)
space complexity ?? TODO should learn the complexity
*/

module.exports = {
  sortedSquares,
  sortedSquaresOptimized,
};
