/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindromeV1 = function (x) {
  const a = x.toString();
  const l = a.length;
  const m = Math.ceil(l / 2);

  for (let i = 0; i < m && i + m < l; i++) {
    if (a[i] != a[l - 1 - i]) return false;
  }
  return true;
};

const isPalindromeV2 = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  const arr = String(x).split("");
  const n = arr.length;
  const mid = Math.ceil(n / 2);
  let left = 0;
  let right = arr.length - 1;

  while (left < mid) {
    if (arr[left] != arr[right]) return false;

    left++;
    right--;
  }

  return true;
};

// revert half of the number
const isPalindromeV3 = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let revertedNumber = 0;
  while (x > revertedNumber) {
    console.log({ revertedNumber, x });
    revertedNumber = revertedNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x == revertedNumber || x == Math.floor(revertedNumber / 10);
};

module.exports = { isPalindromeV1, isPalindromeV2, isPalindromeV3 };
