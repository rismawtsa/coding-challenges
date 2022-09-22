const {
  duplicateZerosCopy,
  duplicateZerosInPlaceV1,
  duplicateZerosInPlaceV2,
} = require("./duplicateZero");

const inputAndOutputs1 = [
  { input: [1, 0, 2, 3, 0, 4, 5, 0], output: [1, 0, 0, 2, 3, 0, 0, 4] },
  { input: [1, 0, 2, 3, 0, 4], output: [1, 0, 0, 2, 3, 0] },
  {
    input: [1, 2, 3],
    output: [1, 2, 3],
  },
  {
    input: [0, 0, 0, 0],
    output: [0, 0, 0, 0],
  },
  {
    input: [8, 4, 5, 0, 0, 0, 0, 7],
    output: [8, 4, 5, 0, 0, 0, 0, 0],
  },
  {
    input: [0, 1, 0, 3, 4],
    output: [0, 0, 1, 0, 0],
  },
];

const inputAndOutputs2 = [
  { input: [1, 0, 2, 3, 0, 4, 5, 0], output: [1, 0, 0, 2, 3, 0, 0, 4] },
  { input: [1, 0, 2, 3, 0, 4], output: [1, 0, 0, 2, 3, 0] },
  {
    input: [1, 2, 3],
    output: [1, 2, 3],
  },
  {
    input: [0, 0, 0, 0],
    output: [0, 0, 0, 0],
  },
  {
    input: [8, 4, 5, 0, 0, 0, 0, 7],
    output: [8, 4, 5, 0, 0, 0, 0, 0],
  },
  {
    input: [0, 1, 0, 3, 4],
    output: [0, 0, 1, 0, 0],
  },
];

inputAndOutputs1.forEach((item) => {
  test(`duplicateZerosCopy(${JSON.stringify(
    item.input
  )} should return ${JSON.stringify(item.output)}`, () => {
    expect(duplicateZerosCopy(item.input)).toEqual(item.output);
  });
});

inputAndOutputs1.forEach((item) => {
  test(`duplicateZerosInPlaceV1(${JSON.stringify(
    item.input
  )} should not return anything and the original array should be ${JSON.stringify(
    item.output
  )}`, () => {
    const arr = item.input;
    duplicateZerosInPlaceV1(arr);
    expect(arr).toEqual(item.output);
  });
});

inputAndOutputs2.forEach((item) => {
  test(`duplicateZerosInPlaceV2(${JSON.stringify(
    item.input
  )} should not return anything and the original array should be ${JSON.stringify(
    item.output
  )}`, () => {
    const arr = item.input;
    duplicateZerosInPlaceV2(arr);
    console.log({ arr });
    expect(arr).toEqual(item.output);
  });
});
