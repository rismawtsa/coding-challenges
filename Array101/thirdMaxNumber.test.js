const { thirdMaxV1, thirdMaxV2, thirdMaxV3 } = require("./thirdMaxNumber");

test("thirdMaxV1([3, 2, 1]) should return 1", () => {
  expect(thirdMaxV1([3, 2, 1])).toBe(1);
});

test("thirdMaxV1([1, 1, 2]) should return 1", () => {
  expect(thirdMaxV1([1, 1, 2])).toBe(2);
});

test("thirdMaxV1([1, 2, 2, 5, 3, 5]) should return 1", () => {
  expect(thirdMaxV1([1, 2, 2, 5, 3, 5])).toBe(2);
});

test("thirdMaxV1([2,2,3,1]) should return 1", () => {
  expect(thirdMaxV1([2, 2, 3, 1])).toBe(1);
});

test("thirdMaxV2([3, 2, 1]) should return 1", () => {
  expect(thirdMaxV2([3, 2, 1])).toBe(1);
});

test("thirdMaxV2([1, 1, 2]) should return 1", () => {
  expect(thirdMaxV2([1, 1, 2])).toBe(2);
});

test("thirdMaxV2([1, 2, 2, 5, 3, 5]) should return 1", () => {
  expect(thirdMaxV2([1, 2, 2, 5, 3, 5])).toBe(2);
});

test("thirdMaxV2([2,2,3,1]) should return 1", () => {
  expect(thirdMaxV2([2, 2, 3, 1])).toBe(1);
});

test("thirdMaxV3([3, 2, 1]) should return 1", () => {
  expect(thirdMaxV3([3, 2, 1])).toBe(1);
});

test("thirdMaxV3([1, 1, 2]) should return 1", () => {
  expect(thirdMaxV3([1, 1, 2])).toBe(2);
});

test("thirdMaxV3([1, 2, 2, 5, 3, 5]) should return 1", () => {
  expect(thirdMaxV3([1, 2, 2, 5, 3, 5])).toBe(2);
});

test("thirdMaxV3([2,2,3,1]) should return 1", () => {
  expect(thirdMaxV3([2, 2, 3, 1])).toBe(1);
});
