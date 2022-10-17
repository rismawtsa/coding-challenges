const {
  findDisappearedNumbersV1,
  findDisappearedNumbersV2,
  findDisappearedNumbersV3,
} = require("./findDisappearedNumber");

test("findDisappearedNumbersV1([4,3,2,7,8,2,3,1]) should return [5,6]", () => {
  expect(findDisappearedNumbersV1([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
});

test("findDisappearedNumbersV1([1,1]) should return [5,6]", () => {
  expect(findDisappearedNumbersV1([1, 1])).toEqual([2]);
});

test("findDisappearedNumbersV2([4,3,2,7,8,2,3,1]) should return [5,6]", () => {
  expect(findDisappearedNumbersV2([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
});

test("findDisappearedNumbersV2([1,1]) should return [5,6]", () => {
  expect(findDisappearedNumbersV2([1, 1])).toEqual([2]);
});

test("findDisappearedNumbersV3([4,3,2,7,8,2,3,1]) should return [5,6]", () => {
  expect(findDisappearedNumbersV3([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
});

test("findDisappearedNumbersV3([1,1]) should return [5,6]", () => {
  expect(findDisappearedNumbersV3([1, 1])).toEqual([2]);
});
