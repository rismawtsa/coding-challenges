/**
 * https://leetcode.com/problems/pascals-triangle/
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 *      1
 *    1  1
 *   1  2   1
 * 1  3   3   1
 *
 * example:
 * Input: numRows = 4
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1]]
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */

const generate = (numRows) => {
  let result = [];

  for (let i = 0; i < numRows; i++) {
    let arr = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) arr.push(1);
      else arr.push(result[i - 1][j - 1] + result[i - 1][j]);
    }
    result.push(arr);
  }
  return result;
};

module.exports = { generate };
