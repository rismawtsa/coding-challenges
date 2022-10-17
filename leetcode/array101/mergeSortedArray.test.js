const { mergeV1, mergeV2 } = require("./mergeSortedArray");

const inputAndOutputs = [
  {
    nums1: [1, 2, 3, 0, 0, 0],
    m: 3,
    nums2: [2, 5, 6],
    n: 3,
    finalNums1: [1, 2, 2, 3, 5, 6],
  },
  {
    nums1: [1],
    m: 1,
    nums2: [],
    n: 0,
    finalNums1: [1],
  },
  { nums1: [0], m: 0, nums2: [1], n: 1, finalNums1: [1] },
];

inputAndOutputs.forEach((item) => {
  test(`mergeV1(${
    (JSON.stringify(item.nums1), item.m, item.nums2, item.n)
  }) not return the sorted array and first argument should be ${JSON.stringify(
    item.finalNums1
  )}`, () => {
    mergeV1(item.nums1, item.m, item.nums2, item.n);
    expect(item.nums1).toEqual(item.finalNums1);
  });
});

const inputAndOutputs2 = [
  {
    nums1: [1, 2, 3, 0, 0, 0],
    m: 3,
    nums2: [2, 5, 6],
    n: 3,
    finalNums1: [1, 2, 2, 3, 5, 6],
  },
  {
    nums1: [1],
    m: 1,
    nums2: [],
    n: 0,
    finalNums1: [1],
  },
  { nums1: [0], m: 0, nums2: [1], n: 1, finalNums1: [1] },
];

inputAndOutputs2.forEach((item) => {
  test(`mergeV2(${
    (JSON.stringify(item.nums1), item.m, item.nums2, item.n)
  }) not return the sorted array and first argument should be ${JSON.stringify(
    item.finalNums1
  )}`, () => {
    mergeV2(item.nums1, item.m, item.nums2, item.n);
    expect(item.nums1).toEqual(item.finalNums1);
  });
});
