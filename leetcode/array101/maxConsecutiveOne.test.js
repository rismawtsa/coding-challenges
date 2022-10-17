const findMaxConsecutiveOnes = require("./maxConsecutiveOne");

const inputAndOutputs = [
  { input: [1, 1, 0, 1, 1, 1], output: 3 },
  {
    input: [1, 0, 1, 1, 0, 1],
    output: 2,
  },
];

inputAndOutputs.forEach((item) => {
  test(`findMaxConsecutiveOnes(${JSON.stringify(item.input)} should return ${
    item.output
  }`, () => {
    expect(findMaxConsecutiveOnes(item.input)).toEqual(item.output);
  });
});
