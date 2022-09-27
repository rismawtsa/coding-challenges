const { removeElementV1, removeElementV2 } = require("./removeElements");

const inputs = [
  {
    nums: [0, 1, 2, 2, 3, 0, 4, 2],
    val: 2,
    expectedNums: [0, 1, 3, 0, 4],
    k: 5,
  },
  {
    nums: [4, 5],
    val: 5,
    expectedNums: [4],
    k: 1,
  },
  {
    nums: [3, 2, 2, 3],
    val: 3,
    expectedNums: [2, 2],
    k: 2,
  },
  {
    nums: [1],
    val: 1,
    expectedNums: [],
    k: 1,
  },
  {
    nums: [2, 2, 2],
    val: 2,
    expectedNums: [],
    k: 0,
  },
];

inputs.forEach((element) => {
  test(`removeElementV1(${element.nums}, ${element.val}), the first argument should be ${element.expectedNums}`, () => {
    let nums = element.nums;
    let k = removeElementV1(element.nums, element.val);
    nums.splice(k);
    nums.sort();
    let expectedNums = element.expectedNums;
    expectedNums.sort();

    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });
});

const inputs2 = [
  {
    nums: [0, 1, 2, 2, 3, 0, 4, 2],
    val: 2,
    expectedNums: [0, 1, 3, 0, 4],
    k: 5,
  },
  {
    nums: [4, 5],
    val: 5,
    expectedNums: [4],
    k: 1,
  },
  {
    nums: [3, 2, 2, 3],
    val: 3,
    expectedNums: [2, 2],
    k: 2,
  },
  {
    nums: [1],
    val: 1,
    expectedNums: [],
    k: 1,
  },
  {
    nums: [2, 2, 2],
    val: 2,
    expectedNums: [],
    k: 0,
  },
];

inputs2.forEach((element) => {
  test(`removeElementV2(${element.nums}, ${element.val}), the first argument should be ${element.expectedNums}`, () => {
    let nums = element.nums;
    let k = removeElementV2(element.nums, element.val);
    nums.splice(k);
    nums.sort();
    let expectedNums = element.expectedNums;
    expectedNums.sort();

    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });
});
