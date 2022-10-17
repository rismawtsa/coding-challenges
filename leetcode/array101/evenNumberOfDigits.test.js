const findNumbers = require("./evenNumberOfDigits");

const inputAndOutputs = [
  { input: [12, 6, 123, 7896], output: 2 },
  {
    input: [555, 901, 482, 1771],
    output: 1,
  },
];

inputAndOutputs.forEach((item) => {
  test(`findNumbers(${JSON.stringify(item.input)} should return ${
    item.output
  }`, () => {
    expect(findNumbers(item.input)).toBe(item.output);
  });
});
