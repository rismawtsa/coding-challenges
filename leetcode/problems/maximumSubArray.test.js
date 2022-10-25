const { maxSubArrayV1, maxSubArrayV2 } = require("./maximumSubArray");

test("maxSubArrayV1([-2,1,-3,4,-1,2,1,-5,4]) should return 6", () => {
  expect(maxSubArrayV1([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});
test("maxSubArrayV1([1]) should return 1", () => {
  expect(maxSubArrayV1([1])).toBe(1);
});
test("maxSubArrayV1([5,4,-1,7,8]) should return 23", () => {
  expect(maxSubArrayV1([5, 4, -1, 7, 8])).toBe(23);
});

test("maxSubArrayV2([-2,1,-3,4,-1,2,1,-5,4]) should return 6", () => {
  expect(maxSubArrayV2([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});
test("maxSubArrayV2([1]) should return 1", () => {
  expect(maxSubArrayV2([1])).toBe(1);
});
test("maxSubArrayV2([5,4,-1,7,8]) should return 23", () => {
  expect(maxSubArrayV2([5, 4, -1, 7, 8])).toBe(23);
});
