const {
  fizzBuzzNaiveApproach,
  fizzBuzzStringConcat,
  fizzBuzzHash,
} = require("./fizzBuzz");

const inputOutputs = [
  { input: 3, output: ["1", "2", "Fizz"] },
  { input: 5, output: ["1", "2", "Fizz", "4", "Buzz"] },
  {
    input: 15,
    output: [
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
    ],
  },
];

inputOutputs.forEach((item) => {
  test(`fizzBuzzNaiveApproach(${item.input}) should return ${JSON.stringify(
    item.output
  )}`, () => {
    expect(fizzBuzzNaiveApproach(item.input)).toEqual(item.output);
  });
});

inputOutputs.forEach((item) => {
  test(`fizzBuzzStringConcat(${item.input}) should return ${JSON.stringify(
    item.output
  )}`, () => {
    expect(fizzBuzzStringConcat(item.input)).toEqual(item.output);
  });
});

inputOutputs.forEach((item) => {
  test(`fizzBuzzHash(${item.input}) should return ${JSON.stringify(
    item.output
  )}`, () => {
    expect(fizzBuzzHash(item.input)).toEqual(item.output);
  });
});
