const {
  validMountainArrayV1,
  validMountainArrayV2,
  validMountainArrayV3,
} = require("./validMountainArray");

const inputOutputs = [
  { arr: [0, 3, 2, 1], output: true },
  { arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], output: false },
  { arr: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], output: false },
  { arr: [3, 5, 5], output: false },
  { arr: [0, 3, 2, 1], output: true },
  { arr: [2, 1], output: false },
];

inputOutputs.forEach((element) => {
  test(`validMountainArrayV1(${element.arr}) should return ${element.output}`, () => {
    expect(validMountainArrayV1(element.arr)).toBe(element.output);
  });
});

inputOutputs.forEach((element) => {
  test(`validMountainArrayV2(${element.arr}) should return ${element.output}`, () => {
    expect(validMountainArrayV2(element.arr)).toBe(element.output);
  });
});

inputOutputs.forEach((element) => {
  test(`validMountainArrayV3(${element.arr}) should return ${element.output}`, () => {
    expect(validMountainArrayV3(element.arr)).toBe(element.output);
  });
});
