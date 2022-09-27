const {
  removeDuplicatesV1,
  removeDuplicatesV2,
} = require("./removeDuplicateSortedArray");

const inputAndOutputs = [
  {
    nums: [1, 1, 2],
    k: 2,
    expectedNums: [1, 2],
  },
  {
    nums: [1, 1, 2, 2, 3, 3],
    k: 3,
    expectedNums: [1, 2, 3],
  },
  {
    nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
    k: 5,
    expectedNums: [0, 1, 2, 3, 4],
  },
];

inputAndOutputs.forEach((element) => {
  test(`removeDuplicatesV1(${element.nums}) should be return ${element.k} and the first argument should be ${element.expectedNums}`, () => {
    let nums = element.nums;
    let k = removeDuplicatesV1(element.nums);
    nums.splice(k);
    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(element.expectedNums[i]);
    }

    expect(k).toBe(element.k);
  });
});

const inputAndOutputs2 = [
  {
    nums: [1, 1, 2],
    k: 2,
    expectedNums: [1, 2],
  },
  {
    nums: [1, 1, 2, 2, 3, 3],
    k: 3,
    expectedNums: [1, 2, 3],
  },
  {
    nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
    k: 5,
    expectedNums: [0, 1, 2, 3, 4],
  },
];

inputAndOutputs2.forEach((element) => {
  test(`removeDuplicatesV2(${element.nums}) should be return ${element.k} and the first argument should be ${element.expectedNums}`, () => {
    let nums = element.nums;
    let k = removeDuplicatesV2(element.nums);
    nums.splice(k);
    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(element.expectedNums[i]);
    }

    expect(k).toBe(element.k);
  });
});
