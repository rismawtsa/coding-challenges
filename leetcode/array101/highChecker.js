/**
 * https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3228/
 * A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in
 * non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the
 * expected height of the ith student in line.
 *
 * You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is
 * the height of the ith student in line (0-indexed).
 *
 * Return the number of indices where heights[i] != expected[i].
 *
 * example:
 * Input: heights = [1,1,4,2,1,3]
 * Output: 3
 * Explanation:
 * heights:  [1,1,4,2,1,3]
 * expected: [1,1,1,2,3,4]
 * Indices 2, 4, and 5 do not match.
 */

const heightChecker = (heights) => {
  const heightSort = [...heights].sort((a, b) => a - b);

  let result = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== heightSort[i]) result++;
  }

  return result;
};

module.exports = { heightChecker };
