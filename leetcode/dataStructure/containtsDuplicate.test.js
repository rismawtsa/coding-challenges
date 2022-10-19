const {
  containsDuplicateV1,
  containsDuplicateV2,
} = require("./containtsDuplicate");

test("containsDuplicateV1([1,2,3,1]) should return true", () => {
  expect(containsDuplicateV1([1, 2, 3, 1])).toBe(true);
});
test("containsDuplicateV1([1,2,3,4]) should return false", () => {
  expect(containsDuplicateV1([1, 2, 3, 4])).toBe(false);
});
test("containsDuplicateV1([1,1,1,3,3,4,3,2,4,2]) should return true", () => {
  expect(containsDuplicateV1([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
});

test("containsDuplicateV2([1,2,3,1]) should return true", () => {
  expect(containsDuplicateV2([1, 2, 3, 1])).toBe(true);
});
test("containsDuplicateV2([1,2,3,4]) should return false", () => {
  expect(containsDuplicateV2([1, 2, 3, 4])).toBe(false);
});
test("containsDuplicateV2([1,1,1,3,3,4,3,2,4,2]) should return true", () => {
  expect(containsDuplicateV2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
});
