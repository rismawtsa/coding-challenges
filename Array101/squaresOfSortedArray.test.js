const {
  sortedSquares,
  sortedSquaresOptimized,
} = require("./squaresOfSortedArray");

const inputAndOutputs = [
  { input: [-4, -1, 0, 3, 10], output: [0, 1, 9, 16, 100] },
  {
    input: [-7, -3, 2, 3, 11],
    output: [4, 9, 9, 49, 121],
  },
];

inputAndOutputs.forEach((item) => {
  test(`sortedSquares(${JSON.stringify(
    item.input
  )} should return ${JSON.stringify(item.output)}`, () => {
    expect(sortedSquares(item.input)).toEqual(item.output);
  });
});

inputAndOutputs.forEach((item) => {
  test(`sortedSquaresOptimized(${JSON.stringify(
    item.input
  )} should return ${JSON.stringify(item.output)}`, () => {
    expect(sortedSquaresOptimized(item.input)).toEqual(item.output);
  });
});
