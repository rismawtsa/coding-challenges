const numberOfSteps = require("./stepsToReduceNumber");

const inputAndOutputs = [
  { input: 14, output: 6 },
  {
    input: 8,
    output: 4,
  },
  {
    input: 123,
    output: 12,
  },
];

inputAndOutputs.forEach((item) => {
  test(`numberOfSteps(${item.input} should return ${item.output}`, () => {
    expect(numberOfSteps(item.input)).toEqual(item.output);
  });
});
