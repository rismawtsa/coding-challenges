const { twoSumV1, twoSumV2 } = require("./twoSum");

test("twoSumV1([2,7,11,15], 9) should return [0,1]", () => {
  expect(twoSumV1([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
test("twoSumV1([3,2,4], 6) should return [1,2]", () => {
  expect(twoSumV1([3, 2, 4], 6)).toEqual([1, 2]);
});
test("twoSumV1([3,3], 6) should return [0,1]", () => {
  expect(twoSumV1([3, 3], 6)).toEqual([0, 1]);
});

test("twoSumV2([2,7,11,15], 9) should return [0,1]", () => {
  expect(twoSumV2([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
test("twoSumV2([3,2,4], 6) should return [1,2]", () => {
  expect(twoSumV2([3, 2, 4], 6)).toEqual([1, 2]);
});
test("twoSumV2([3,3], 6) should return [0,1]", () => {
  expect(twoSumV2([3, 3], 6)).toEqual([0, 1]);
});
