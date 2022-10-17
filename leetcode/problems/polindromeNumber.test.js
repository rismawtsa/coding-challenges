const {
  isPalindromeV1,
  isPalindromeV2,
  isPalindromeV3,
} = require("./polindromeNumber");

test("isPalindromeV1(10) should return false", () => {
  expect(isPalindromeV1(10)).toBe(false);
});
test("isPalindromeV1(1001) should return true", () => {
  expect(isPalindromeV1(1001)).toBe(true);
});
test("isPalindromeV1(121) should return true", () => {
  expect(isPalindromeV1(121)).toBe(true);
});
test("isPalindromeV1(-121) should return false", () => {
  expect(isPalindromeV1(-121)).toBe(false);
});
test("isPalindromeV1(1234) should return false", () => {
  expect(isPalindromeV1(1234)).toBe(false);
});
test("isPalindromeV1(1119898111) should return true", () => {
  expect(isPalindromeV1(1119889111)).toBe(true);
});

test("isPalindromeV2(10) should return false", () => {
  expect(isPalindromeV2(10)).toBe(false);
});
test("isPalindromeV2(1001) should return true", () => {
  expect(isPalindromeV2(1001)).toBe(true);
});
test("isPalindromeV2(121) should return true", () => {
  expect(isPalindromeV2(121)).toBe(true);
});
test("isPalindromeV2(-121) should return false", () => {
  expect(isPalindromeV2(-121)).toBe(false);
});
test("isPalindromeV2(1234) should return false", () => {
  expect(isPalindromeV2(1234)).toBe(false);
});
test("isPalindromeV2(1119898111) should return true", () => {
  expect(isPalindromeV2(1119889111)).toBe(true);
});

test("isPalindromeV3(10) should return false", () => {
  expect(isPalindromeV3(10)).toBe(false);
});
test("isPalindromeV3(1001) should return true", () => {
  expect(isPalindromeV3(1001)).toBe(true);
});
test("isPalindromeV3(121) should return true", () => {
  expect(isPalindromeV3(121)).toBe(true);
});
test("isPalindromeV3(-121) should return false", () => {
  expect(isPalindromeV3(-121)).toBe(false);
});
test("isPalindromeV3(1234) should return false", () => {
  expect(isPalindromeV3(1234)).toBe(false);
});
test("isPalindromeV3(1119898111) should return true", () => {
  expect(isPalindromeV3(1119889111)).toBe(true);
});
