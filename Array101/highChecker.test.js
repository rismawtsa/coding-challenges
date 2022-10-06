const { heightChecker } = require("./highChecker");

test("heightChecker([1,1,4,2,1,3]) should return 3", () => {
  expect(heightChecker([1, 1, 4, 2, 1, 3])).toBe(3);
});

test("heightChecker([5,1,2,3,4]) should return 5", () => {
  expect(heightChecker([5, 1, 2, 3, 4])).toBe(5);
});

test("heightChecker([1,2,3,4,5]) should return 0", () => {
  expect(heightChecker([1, 2, 3, 4, 5])).toBe(0);
});
