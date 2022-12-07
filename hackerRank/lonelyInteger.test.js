const { lonelyIntegerV1, lonelyIntegerV2 } = require("./lonelyInteger");

const inputAndOutputs = [
  { a: [1], output: 1 },
  { a: [1, 2, 4, 2, 1], output: 4 },
  { a: [1, 1, 2], output: 2 },
  { a: [0, 0, 1, 2, 1], output: 2 },
  { a: [1, 2, 3, 4, 3, 2, 1], output: 4 },
];

inputAndOutputs.forEach((element) => {
  console.log(element.a);
  test(`lonelyIntegerV1(${element.a}) should be return ${element.output}`, () => {
    expect(lonelyIntegerV1(element.a)).toBe(element.output);
  });
});

inputAndOutputs.forEach((element) => {
  test(`lonelyIntegerV2(${element.a}) should be return ${element.output}`, () => {
    expect(lonelyIntegerV2(element.a)).toBe(element.output);
  });
});
