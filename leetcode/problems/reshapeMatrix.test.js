const { matrixReshape } = require("./reshapeMatrix");

test("matrixReshape([[1, 2], [3, 4]], 1, 4) should return [[1, 2, 3, 4]]", () => {
  expect(
    matrixReshape(
      [
        [1, 2],
        [3, 4],
      ],
      1,
      4
    )
  ).toEqual([[1, 2, 3, 4]]);
});
test("matrixReshape([[1, 2], [3, 4]], 2, 4) should return [[1, 2], [3, 4]]", () => {
  // return the original mat cause of 2*4 is greater than the mat length
  expect(
    matrixReshape(
      [
        [1, 2],
        [3, 4],
      ],
      2,
      4
    )
  ).toEqual([
    [1, 2],
    [3, 4],
  ]);
});
test("matrixReshape([[1, 2], [3, 4]], 2, 2) should return [[1, 2], [3, 4]]", () => {
  expect(
    matrixReshape(
      [
        [1, 2],
        [3, 4],
      ],
      2,
      2
    )
  ).toEqual([
    [1, 2],
    [3, 4],
  ]);
});

test("matrixReshape([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20]], 42, 5) should return [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]]", () => {
  expect(
    matrixReshape(
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
        [17, 18, 19, 20],
      ],
      42,
      5
    )
  ).toEqual([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
  ]);
});

test("matrixReshape([[1, 2, 3, 4]], 4, 1) should return [[1], [2], [3], [4]]", () => {
  expect(matrixReshape([[1, 2, 3, 4]], 4, 1)).toEqual([[1], [2], [3], [4]]);
});
