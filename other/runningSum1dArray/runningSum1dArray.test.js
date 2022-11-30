const runningSum1dArray = require("./runningSum1dArray");

const inputAndOutputs = [
  { input: [1, 2, 3, 4], output: [1, 3, 6, 10] },
  {
    input: [1, 1, 1, 1, 1],
    output: [1, 2, 3, 4, 5],
  },
  {
    input: [3, 1, 2, 10, 1],
    output: [3, 4, 6, 16, 17],
  },
];

inputAndOutputs.forEach((item) => {
  test(`runningSum1dArray(${item.input} should return ${item.output}`, () => {
    expect(runningSum1dArray(item.input)).toEqual(item.output);
  });
});
