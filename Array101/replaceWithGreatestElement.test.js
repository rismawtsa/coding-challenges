const { replaceElements } = require("./replaceWithGreatestElement");

test("replaceElements([17,18,5,4,6,1]) should be [18,6,6,6,1,-1]", () => {
  expect(replaceElements([17, 18, 5, 4, 6, 1])).toEqual([18, 6, 6, 6, 1, -1]);
});

test("replaceElements([1]) should be [-1]", () => {
  expect(replaceElements([1])).toEqual([-1]);
});
