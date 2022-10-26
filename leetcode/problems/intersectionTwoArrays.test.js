const { intersectV1, intersectV2 } = require("./intersectionTwoArrays");

function expect_or(...tests) {
  try {
    tests.shift()();
  } catch (e) {
    if (tests.length) expect_or(...tests);
    else throw e;
  }
}
test("intersectV1([4, 9, 5], [9, 4, 9, 8, 4]) should return [4, 9]", () => {
  expect_or(
    () => expect(intersectV1([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9]),
    () => expect(intersectV1([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4])
  );
});
test("intersectV1([1, 2, 2, 1], [2, 2]) should return [2, 2]", () => {
  expect(intersectV1([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
});
test("intersectV1([1, 2, 2, 1], [2]) should return [2]", () => {
  expect(intersectV1([1, 2, 2, 1], [2])).toEqual([2]);
});
test("intersectV1([61, 24, 20, 58, 95, 53, 17, 32, 45, ...], [5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, ...]) should return [5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, ...]", () => {
  expect(
    intersectV1(
      [
        61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5, 95,
        12, 86, 58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89, 85,
        7, 30, 67, 34, 62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46,
        70, 60, 4, 63, 82, 42, 65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92,
        31, 43, 81, 88, 60, 10, 55, 66, 82, 0, 79, 11, 81,
      ],
      [
        5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34,
        92, 84, 38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48,
      ]
    )
  ).toEqual([5, 4, 57, 79, 7, 89, 88, 45, 34, 92, 38, 85, 6, 0, 77, 44, 61]);
});
