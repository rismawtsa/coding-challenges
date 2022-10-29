const { generate } = require("./pascalTriangle");

test("generate(1) should return [[1]]", () => {
  expect(generate(1)).toEqual([[1]]);
});

test("generate(3) should return [[1], [1, 1], [1, 2, 1]]", () => {
  expect(generate(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
});

test("generate(5) should return [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]", () => {
  expect(generate(5)).toEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
  ]);
});
