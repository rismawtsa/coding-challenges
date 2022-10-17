const { moveZeroes } = require("./moveZeroes");

test("moveZeroes([0,1,0,3,12]) should not return anything", () => {
  expect(moveZeroes([0, 1, 0, 3, 12])).toBe(undefined);
});

test("moveZeroes([0,1,0,3,12]), the original array should be [1,3,12,0,0]", () => {
  let nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  console.log({ nums });
  expect(nums).toEqual([1, 3, 12, 0, 0]);
});

test("moveZeroes([0]), the original array should be [0]", () => {
  let nums = [0];
  moveZeroes(nums);
  expect(nums).toEqual([0]);
});
