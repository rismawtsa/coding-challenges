const maximumWealth = require("./richestCustomerWealth");

const inputAndOutputs = [
  {
    input: [
      [1, 2, 3],
      [3, 2, 1],
    ],
    output: 6,
  },
  {
    input: [
      [1, 5],
      [7, 3],
      [3, 5],
    ],
    output: 10,
  },
  {
    input: [
      [2, 8, 7],
      [7, 1, 3],
      [1, 9, 5],
    ],
    output: 17,
  },
];

inputAndOutputs.forEach((item) => {
  test(`maximumWealth(${JSON.stringify(item.input)}) should return ${
    item.output
  }`, () => {
    expect(maximumWealth(item.input)).toBe(item.output);
  });
});
