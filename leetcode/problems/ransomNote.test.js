const { canConstruct, canConstruct1 } = require("./ransomNote");

test('canConstruct("a", "b") should return false', () => {
  expect(canConstruct("a", "b")).toBe(false);
});
test('canConstruct("aa", "ab") should return false', () => {
  expect(canConstruct("aa", "ab")).toBe(false);
});
test('canConstruct("aa", "aab") should return true', () => {
  expect(canConstruct("aa", "aab")).toBe(true);
});
test('canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi") should return false', () => {
  expect(canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi")).toBe(false);
});

test('canConstruct1("a", "b") should return false', () => {
  expect(canConstruct1("a", "b")).toBe(false);
});
test('canConstruct1("aa", "ab") should return false', () => {
  expect(canConstruct1("aa", "ab")).toBe(false);
});
test('canConstruct1("aa", "aab") should return true', () => {
  expect(canConstruct1("aa", "aab")).toBe(true);
});
test('canConstruct1("fihjjjjei", "hjibagacbhadfaefdjaeaebgi") should return false', () => {
  expect(canConstruct1("fihjjjjei", "hjibagacbhadfaefdjaeaebgi")).toBe(false);
});
