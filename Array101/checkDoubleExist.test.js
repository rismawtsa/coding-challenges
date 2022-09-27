const {
  checkIfExistV1,
  checkIfExistV2,
  checkIfExistV3,
} = require("./checkDoubleExist");

const inputAndOutputs = [
  { arr: [7, 1, 14, 11], output: true },
  { arr: [10, 2, 5, 3], output: true },
  { arr: [0, 0], output: true },
  { arr: [-10, 12, -20, -8, 15], output: true },
  { arr: [2, 3, 5], output: false },
];

inputAndOutputs.forEach((element) => {
  test(`checkIfExistV1(${element.arr}) should be return ${element.output}`, () => {
    expect(checkIfExistV1(element.arr)).toBe(element.output);
  });
});

inputAndOutputs.forEach((element) => {
  test(`checkIfExistV2(${element.arr}) should be return ${element.output}`, () => {
    expect(checkIfExistV2(element.arr)).toBe(element.output);
  });
});

inputAndOutputs.forEach((element) => {
  test(`checkIfExistV3(${element.arr}) should be return ${element.output}`, () => {
    expect(checkIfExistV3(element.arr)).toBe(element.output);
  });
});
