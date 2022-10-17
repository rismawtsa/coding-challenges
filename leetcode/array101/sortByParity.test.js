const { sortByParity } = require("./sortByParity");

test("sortByParity([3,1,2,4]), the output and the original input should be [2,4,3,1] or [4,2,3,1] or [2,4,1,3] or [4,2,1,3]", () => {
  const nums = [3, 1, 2, 4];
  const output = sortByParity(nums);
  const expectedNums = [2, 4, 3, 1];
  expect(output).toEqual(expectedNums);
  expect(nums).toEqual(expectedNums);
});

test("sortByParity([0]), the output and the original input should be [0]", () => {
  const nums = [0];
  const output = sortByParity(nums);
  const expectedNums = [0];
  expect(output).toEqual(expectedNums);
  expect(nums).toEqual(expectedNums);
});
